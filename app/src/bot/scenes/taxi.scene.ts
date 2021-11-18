import { Composer, Markup, Scenes } from "telegraf";

let message: any;
export const taxiScene = new Composer<Scenes.WizardContext>();
taxiScene.start(async (ctx) => {
    await ctx.replyWithHTML(`<b>Укажите маршрут</b>\n<i>Например, Гостиница - Ситалл</i>`);
});
taxiScene.on('text', async (ctx) => {
    ctx.state.data = { rout: ctx.message.text };
    message = await ctx.replyWithHTML(`<b>Маршрут</b>\n<i>${ctx.state.data.rout}</i>`,
        Markup.inlineKeyboard([
            Markup.button.callback('➡️ Дальше', 'next'),
            Markup.button.callback('🔙 Изменить', 'change'),
        ])
    );
    console.log(message);
});
taxiScene.action('next', async (ctx) => {
    ctx.answerCbQuery();
    return ctx.wizard.next();
});
taxiScene.action('change', async (ctx) => {
    ctx.answerCbQuery();
    ctx.scene.reenter();
});