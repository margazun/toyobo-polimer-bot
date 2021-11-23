import { config } from "../config"
import { POLIMERS } from "../constants/polimer";
import { APPLICATIONS, ApplicationT, filterPolimer, InkCompatibilityT, PolimerFilterDataT, PolimerFilterT } from "../types/polimer.type";
import { polimerFilterKeyboard } from "./keyboards/polimer.keyboard";
const Telegram = require('node-telegram-bot-api')

export const bot = new Telegram(config.bot.token, { polling: true });

const message: {chat?: number, id?: number} = {};
const filter: PolimerFilterT = { application: [], inkCompaibility: [] }

bot.onText(/\/start/, (msg: any) => {
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
      console.log(data.p);
      if (filter.applications) {
        if (data.p.applications) {
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
      `Выбрано полимеров: ${list.length} из ${POLIMERS.length}`,
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

function getPolimerList(filter: PolimerFilterT) {
  return filterPolimer(POLIMERS, filter);
}

// const polimers = POLIMERS;

// console.log(filterPolimer(polimers, {
//     polimerType: "Цифровой",
//     printType: "Флексо",
//     application: ['Ротационная печать'],
//     inkCompaibility: [ "УФ"]
// }));