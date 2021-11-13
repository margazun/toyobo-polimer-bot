import { getConfig } from "./config/config";

console.log('Hi! It\'s me!\nAre you here?\nDo you hear?');
const config = getConfig('env_');
console.log(config.bot);
