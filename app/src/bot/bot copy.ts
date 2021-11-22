import { Telegraf, session, Scenes, Composer, Markup, Context } from "telegraf";
import { config } from "../config";
import { PolimerFilterT } from "../types/polimer.type";
import { USERS } from "../users/users";
import { polimerScene } from './scenes/polimer/polimer.scene';
import { taxiScene } from "./scenes/taxi.scene";


const token = config.bot.token;
export interface PolimerSceneSession extends Scenes.SceneSessionData {
  filter: PolimerFilterT
}

export interface PolimerSession extends Scenes.SceneSession<PolimerSceneSession> {
  polimerProp: number
}

export interface PolimerContext extends Context {
  polimerFilter: PolimerFilterT
  session: PolimerSession
  scene: Scenes.SceneContextScene<PolimerContext, PolimerSceneSession>
}

export const bot = new Telegraf<PolimerContext>(token);
const stage = new Scenes.Stage<PolimerContext>(
  [ polimerScene ],
  { ttl: 10 }
);

bot.use(session());
bot.use(stage.middleware());
bot.use((ctx, next) => {
  ctx.polimerFilter = { };
  ctx.session.polimerProp = 888;
  ctx.scene.session.filter = { }
  next();
});
bot.start(async (ctx) => {
  console.log('Starting scene polimer...')
  await ctx.scene.enter('polimerScene');
})
bot.launch();