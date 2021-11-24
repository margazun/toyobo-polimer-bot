import { config } from "../config"
import { POLIMERS } from "../constants/polimer";
import { APPLICATIONS, ApplicationT, filterPolimer, InkCompatibilityT, PolimerFilterDataT, PolimerFilterT } from "../types/polimer.type";
import { getUsers } from "../users/users";
import { polimerFilterKeyboard } from "./keyboards/polimer.keyboard";
const Telegram = require('node-telegram-bot-api')

export const bot = new Telegram(config.bot.token, { polling: true });

interface MessageT {
  chat?: number,
  id?: number
}

const message: MessageT = {};
const resultMessage: MessageT = {};
const filter: PolimerFilterT = { applications: [], inkCompaibility: [] }


bot.onText(/\/start/, (msg: any) => {
  if(getUsers().filter(user => { return user.id === msg.chat.id }).length === 0) {
    let text = `id: ${msg.chat.id}`;
    text += `\nfirst_name: ${msg.chat.first_name ? msg.chat.first_name : ''}`;
    text += `\nlast_name: ${msg.chat.last_name ? msg.chat.last_name : ''}`;
    text += `\nusername: ${msg.chat.username ? msg.chat.username : ''}`;
    text += `\nПерешлите это сообщение сами знаете куда`
    bot.sendMessage(msg.chat.id, text);
    return
  }
  message.chat = msg.chat.id;
  bot.sendMessage(msg.chat.id, `<b>Выберите тип полимера</b>\n`, {
    parse_mode: 'HTML',
    reply_markup: {
      resize_keyboard: true,
      inline_keyboard: polimerFilterKeyboard(filter)
    }
  }).then((result: any) => {
    message.id = result.message_id;
  });
});

bot.onText(/\/showSelected/, (msg: any) => {
  if (resultMessage.chat) {
    bot.deleteMessage()
  }
  bot.sendMessage(msg.chat.id, printSelected(), {
    parse_mode: 'HTML',
    disable_web_page_preview: true
  });
});

bot.on('callback_query', (query: any) => {
  const data: {t: string, p: PolimerFilterDataT } = JSON.parse(query.data);
  if (data.t === 'data') {
    if('polimerType' in data.p
      || 'printType' in data.p
      || 'baseMaterial' in data.p
      || 'lineature' in data.p) {
      Object.assign(filter, data.p)
    }
    
    if('application' in data.p) {
      if (filter.application) {
        if (data.p.application){
          filter.application.indexOf(data.p.application) < 0
          ? filter.application.push(data.p.application as ApplicationT)
          : filter.application.splice(filter.application.indexOf(data.p.application), 1);
        }
      }
    }
    
    if('inkCompaibility' in data.p) {
      if (filter.inkCompaibility) {
        if (data.p.inkCompaibility) {
          filter.inkCompaibility.indexOf(data.p.inkCompaibility) < 0
          ? filter.inkCompaibility.push(data.p.inkCompaibility as InkCompatibilityT)
          : filter.inkCompaibility.splice(filter.inkCompaibility.indexOf(data.p.inkCompaibility), 1);
        }
      }
    }
    
    if('applications' in data.p) {
      if (filter.applications) {
        if (data.p.applications >=0) {
          filter.applications.indexOf(APPLICATIONS[data.p.applications]) < 0
            ? filter.applications.push(APPLICATIONS[data.p.applications])
            : filter.applications.splice(filter.applications.indexOf(APPLICATIONS[data.p.applications]), 1);
        }
      }
    }


  }
  bot.answerCallbackQuery(query.id);
  updateTable();
});

bot.on('message', (msg: any) => {
  bot.deleteMessage(msg.chat.id, msg.message_id);
});

function updateTable() {
  console.log(JSON.stringify(getPolimerList(filter), null, 2));
  const list = getPolimerList(filter);

  try {
    bot.editMessageText(
      `Выбрано полимеров: ${list.length} из ${POLIMERS.length}
/showSelected - показать выбраные полимеры`,
      {
        chat_id: message.chat,
        message_id: message.id,
        parse_mode: 'HTML',
        reply_markup: {
          resize_keyboard: true,
          inline_keyboard: polimerFilterKeyboard(filter)
        }
      }
    ).catch((err: any) => {
      if(err.response.body.error_code !== 400) {
        console.log('Error:',err);
      }
    })
  } catch (err) {
  }
}

function printSelected(): string {
  let polimerList = filterPolimer(POLIMERS, filter);
  let text: string = '';
  polimerList.forEach(polimer => {
    text += `\n<b>${polimer.brandName}</b>`;
    text += `\nТип: <b>${polimer.polimerType}.</b> Вид печати: <b>${polimer.printType}.</b>`;
    text += `\nМакс. линеатура: <b>${polimer.lineature}.</b> Разрешение: <b>${polimer.resolution}.</b>`;
    text += `\nОснова: <b>${polimer.baseMaterial}.</b> Толщина: <b>${polimer.thickness.join(', ')}</b>`;
    text += `\nСовместимость с красками: <b>${polimer.inkCompatibility?.join(', ')}</b>`;
    text += `\nТвердость: <b>${polimer.hardness?.join(', ')}</b>`;
    text += `\nГлубина рельефа: <b>${polimer.reliefDepth?.join(', ')}</b>`;
    text += `\n<a href="${polimer.podioLink}">Описание в Podio</a>`
    text += `\n================================`;
  })
  return text;
}

function getPolimerList(filter: PolimerFilterT) {
  return filterPolimer(POLIMERS, filter);
}
