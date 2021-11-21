import { bot } from "./bot/bot";

import { POLIMERS } from "./constants/polimer";
import { filterPolimer } from "./types/polimer.type";

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));


// const polimers = POLIMERS;

// console.log(filterPolimer(polimers, {
//     polimerType: "Цифровой",
//     printType: "Флексо",
//     application: ['Ротационная печать'],
//     inkCompaibility: [ "УФ"]
// }));

