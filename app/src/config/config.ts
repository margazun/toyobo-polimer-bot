import rc from 'rc';
import { ConfigT } from "../types/config";
import { config as dotConfig } from "dotenv";


function getConfig(name:string): ConfigT {
  const config = rc(name);
  if (!config.configs) {
    dotConfig();
    if (process.env.TOKEN && process.env.NAME) {
      return <ConfigT> {
        bot: {
          token: process.env.TOKEN,
          name: process.env.NAME
        }
      }
    }
    throw new Error(`Config by name ${name} not found.`);
  }
  return <ConfigT> {
    bot: {
      token: config.bot.token,
      name: config.bot.token
    }
  }
}

export const config = getConfig('env_')