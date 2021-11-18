import { Telegraf, session, Scenes, Composer, Markup } from "telegraf";
import { config } from "../config";
import { USERS } from "../users/users";
import { taxiScene } from "./scenes/taxi.scene";

// export const bot = new Telegraf(config.bot.token);
// bot.use(session());
// bot.use(stage.middleware());
// const stage = new Scenes.Stage([taxiScene])

// bot.start( async (ctx) => {
//     if (ctx.message.from.id) {
//         let text: string = '';
//         text += `${ctx.message.from.id}`;
//         text += `\n${ctx.message.from.first_name}`;
//         text += ctx.message.from.last_name ? `\n${ctx.message.from.last_name}`: '';
//         text += ctx.message.from.username ? `\n${ctx.message.from.username}` : '';
//         text += `\n${new Date().toLocaleString('ru-RU')}`;
//         await ctx.reply(text);
//     }
// });

// bot.command('taxi', async (ctx) => {
//     const { id } = ctx.message.from;
//     const user = USERS.filter(user => { return user.id === id});
//     if (user) {
//         ctx.state.data = { userId: id }
//         await ctx.replyWithHTML('<b>Укажите маршрут</b>\n<i>Например, Гостиница - Ситалл</i>');
//     }
// });

// bot.on('text', async (ctx) => {
//     await ctx.reply(ctx.message.text);
// });

// bot.launch();

const token = config.bot.token;
const stepHandler = new Composer<Scenes.WizardContext>();
stepHandler.action('next', async (ctx) => {
    await ctx.reply('Step 2. Via inline button');
    return ctx.wizard.next();
});
stepHandler.command('next', async (ctx) => {
    await ctx.reply('Step 2. Via command');
    return ctx.wizard.next();
});
stepHandler.use((ctx) =>
    ctx.replyWithMarkdown('Press `Next` button or type /next')
);

const stepOne = new Composer<Scenes.WizardContext>();
stepOne.start(async (ctx) => {
    await ctx.reply('Step One. Start');
});
stepOne.on('text', async (ctx) => {
    ctx.state.data = { route: ctx.message.text }
    ctx.replyWithHTML(`<b>Input text</b>\n${ ctx.state.data.route }`);
    return ctx.wizard.next();
});
stepOne.use(async (ctx) => {
    await ctx.reply(
        'Step 1',
        Markup.inlineKeyboard([
          Markup.button.url('❤️', 'http://telegraf.js.org'),
          Markup.button.callback('➡️ Next', 'next'),
        ])
      );
      return ctx.wizard.next();
});

const superWizard = new Scenes.WizardScene(
    'super-wizard',
    taxiScene,
    stepOne,
    // async (ctx) => {
    //   await ctx.reply(
    //     'Step 1',
    //     Markup.inlineKeyboard([
    //       Markup.button.url('❤️', 'http://telegraf.js.org'),
    //       Markup.button.callback('➡️ Next', 'next'),
    //     ])
    //   );
    //   return ctx.wizard.next();
    // },
    stepHandler,
    async (ctx) => {
      await ctx.reply('Step 3');
      return ctx.wizard.next();
    },
    async (ctx) => {
      await ctx.reply('Step 4');
      return ctx.wizard.next();
    },
    async (ctx) => {
      await ctx.reply('Done');
      return await ctx.scene.leave();
    }
);

export const bot = new Telegraf<Scenes.WizardContext>(token);
const stage = new Scenes.Stage<Scenes.WizardContext>([superWizard], {
    default: 'super-wizard',
});

bot.use(session());
bot.use(stage.middleware());
bot.launch();