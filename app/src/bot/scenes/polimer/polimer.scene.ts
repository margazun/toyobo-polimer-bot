import { Composer, Context, Markup, Scenes,  } from 'telegraf';
import { PolimerFilterT } from "../../../types/polimer.type";
import { getKeyboard } from './keyboard.polimer';
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
export const polimerScene = new Composer<Scenes.WizardContext>();
polimerScene.start( async (ctx) => {
	await enterScene(ctx);
});

polimerScene.action('separator', async (ctx) => {
	await ctx.answerCbQuery();
});

polimerScene.action('digital', async (ctx) => {
	console.log(`DIGITAL: ${JSON.stringify(ctx.state.data, null, 2)}`);
	await ctx.answerCbQuery();
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
async function enterScene(ctx: Context) {
	if(!(ctx.state.data)) {
		ctx.state.data = {
			filter: {}
		}
	}
	console.log('DATA: ', JSON.stringify(ctx.state.data, null, 2));
	return await ctx.replyWithHTML(
		`<b>Выберите тип полимера</b>\n${getFilterText(ctx.state.data.filter)}`,
		Markup.inlineKeyboard(getKeyboard(ctx))
	);
}