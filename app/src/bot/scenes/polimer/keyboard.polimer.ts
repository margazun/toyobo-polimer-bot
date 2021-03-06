import { Markup } from 'telegraf';

export const polimerKeyboard = [
	[
		Markup.button.callback(
			'< Тип полимера >',
			'separator'
		),
	],
	[
		Markup.button.callback(
			'Цифровой',
			'digital',
		),
		Markup.button.callback(
			'Аналоговый',
			'analogue',
		)
	],
	[
		Markup.button.callback(
			'< Способ печати >',
			'separator'
		),
	],
	[
		Markup.button.callback(
			'Высокая',
			'letterpress',
		),
		Markup.button.callback(
			'Флексо',
			'flexo',
		),
		Markup.button.callback(
			'Трафаретная',
			'screen',
		),
	],
	[
		Markup.button.callback(
			'< Краски >',
			'separator'
		),
	],
	[
		Markup.button.callback(
			'Водные',
			'inkWater',
		),
		Markup.button.callback(
			'Спиртовые',
			'inkAlchohol',
		),
		Markup.button.callback(
			'УФ',
			'inkUV',
		),
	],
	[
		Markup.button.callback(
			'Масляные',
			'inkConv',
		),
		Markup.button.callback(
			'Толуольные',
			'inkToluene',
		),
		Markup.button.callback(
			'Термокраски',
			'inkCarbon',
		),
	],
];