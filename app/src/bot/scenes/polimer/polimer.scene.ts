import { Composer, Context, Markup, Scenes, Telegraf,  } from 'telegraf';
import { BaseScene } from 'telegraf/typings/scenes';
import { PolimerFilterT } from "../../../types/polimer.type";
import { PolimerContext } from '../../bot copy';
import { polimerKeyboard } from './keyboard.polimer';
import { getFilterText } from './polimer.helper';

// let keyboard = (ctx: Context) => {
// 	return Markup.inlineKeyboard([
// 		Markup.button.callback(
// 			'Цифровой',
// 			'digital',
// 			ctx.state.data.filter.polimerType !== 'Цифровой'
// 		),
// 		Markup.button.callback(
// 			'Аналоговый',
// 			'analogue',
// 			ctx.state.data.filter.polimerType !== 'Аналоговый'
// 		),
// 	])
// }
let message: number;
let chat: number;
export const polimerScene = new Scenes.BaseScene<PolimerContext>('polimerScene');
polimerScene.enter(async (ctx) => {
	await ctx.replyWithHTML(
		`<b>Выберите тип полимера</b>\n${getFilterText(ctx.polimerFilter)}`,
		Markup.inlineKeyboard(polimerKeyboard)
	);

	message = ctx.message ? ctx.message.message_id : 0;
	message = ctx.chat ? ctx.chat.id : 0;
	console.log('ENTER: ', JSON.stringify(ctx.polimerFilter, null, 2));
});
// polimerScene.start( async (ctx) => {
// 	await enterScene(ctx);
// });

polimerScene.action('separator', async (ctx) => {
	await ctx.answerCbQuery();
});

polimerScene.action('digital', async (ctx: PolimerContext) => {
	console.log('Setting digital type');
	ctx.scene.session.filter.polimerType = 'Цифровой';
	console.log(`DIGITAL Scene: ${JSON.stringify(ctx.scene.session.filter, null, 2)}`);
	await ctx.answerCbQuery('Цифровой');
	await updateMessage(ctx);
});

polimerScene.action('analogue', async (ctx: PolimerContext) => {
	console.log('Setting analogue type');
	ctx.scene.session.filter.polimerType = 'Аналоговый';
	console.log(`ANALOGUE Scene: ${JSON.stringify(ctx.scene.session.filter, null, 2)}`);
	await ctx.answerCbQuery('Аналоговый');
	await updateMessage(ctx);
});


// polimerScene.action('digital', async (ctx) => {
// 	console.log('DIGITAL:', JSON.stringify(ctx.state.data, null, 2));
// 	if(ctx.state.data.filter.polimerType === 'Цифровой') {
// 		// ctx.state.data.filter.polimerType = {} 
// 	} else {
// 		await ctx.answerCbQuery('Цифровой');
// 		ctx.state.data = {
// 			filter: {
// 				polimerType: 'Цифровой'
// 			} as PolimerFilterT
// 		}
// 	}
// 	await ctx.editMessageText(
// 		textMessage(ctx.state.data.filter),
// 		{
// 			parse_mode: 'HTML'
// 		});
// 	await ctx.editMessageReplyMarkup({
// 		inline_keyboard: getKeyboard(ctx)
// 	})
// });




function textMessage(filter: PolimerFilterT) {
	return `<b>Выберите тип полимера</b>\n${getFilterText(filter)}`
}
async function enterScene(ctx: PolimerContext) {
	await ctx.replyWithHTML(
		`<b>Выберите тип полимера</b>\n${getFilterText(ctx.scene.session.filter)}`,
		Markup.inlineKeyboard(polimerKeyboard)
	);
}

async function updateMessage(ctx: PolimerContext) {
	console.log('Updating message');
	try {
		console.log('Deleting message');
		await ctx.deleteMessage();
		console.log('Message deleted');
		await enterScene(ctx); 
		console.log('New message sended');
	} catch (e) {
		console.error(e)
	}
}