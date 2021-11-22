import { config } from "../config"
import { PolimerFilterT } from "../types/polimer.type";
import { polimerKeyboard } from "./bot.keyboard";
const Telegram = require('node-telegram-bot-api')

export const bot = new Telegram(config.bot.token, { polling: true });

const message: {chat?: number, id?: number} = {};
const filter: PolimerFilterT = { application: [] }

bot.onText(/\/start/, (msg: any) => {
  message.chat = msg.chat.id;
  bot.sendMessage(msg.chat.id, `<b>Выберите тип полимера</b>\n`, {
    parse_mode: 'HTML',
    reply_markup: {
      resize_keyboard: true,
      inline_keyboard: polimerKeyboard
    }
  }).then((result: any) => {
    message.id = result.message_id;
  });
});

bot.on('callback_query', (query: any) => {
  const data: {t: string, p: PolimerFilterT } = JSON.parse(query.data);
  console.log(JSON.stringify(data, null, 2))
  if (data.t === 'data') {
    if('polimerType' in data.p || 'printType' in data.p) {
      Object.assign(filter, data.p)
    }
    if('application' in data.p) {
      if (filter.application) {
        filter.application.push(data.p.application)
      }
    }
  }
  bot.answerCallbackQuery(query.id);
  console.log(JSON.stringify(filter, null, 2));
});

bot.on('message', (msg: any) => {
  bot.deleteMessage(msg.chat.id, msg.message_id);
});