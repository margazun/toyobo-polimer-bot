import { Telegraf, session, Scenes, Composer, Markup } from "telegraf";
import { config } from "../config";
import { USERS } from "../users/users";
import { polimerScene } from './scenes/polimer/polimer.scene';
import { taxiScene } from "./scenes/taxi.scene";


const token = config.bot.token;
const superWizard = new Scenes.WizardScene(
    'super-wizard',
    polimerScene
);

export const bot = new Telegraf<Scenes.WizardContext>(token);
const stage = new Scenes.Stage<Scenes.WizardContext>(
  [ superWizard ],
  { default: 'super-wizard', }
);

bot.use(session());
bot.use(stage.middleware());
bot.use((ctx, next) => {
  ctx.state.data = {};
  next();
});
bot.launch();