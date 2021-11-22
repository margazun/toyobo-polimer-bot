
export const polimerKeyboard = [
	[
		{
            text: '< Тип полимера >',
			callback_data: JSON.stringify({
                t: 'filter',
                p: { }
            })
        }	
	],
	[
        {
            text: 'Цифровой',
			callback_data: JSON.stringify({
                t: 'data',
                p: {
                    polimerType: 'Цифровой'
                }
            })
        },
        {
            text: 'Аналоговый',
			callback_data: JSON.stringify({
                t: 'data',
                p: {
                    polimerType: 'Аналоговый'
                }
            })
        },

	],
	[
		{
            text: '< Способ печати >',
			callback_data: JSON.stringify({
                t: 'filter',
                p: { }
            })
		    
        }
	],
	[
		{
			text: 'Высокая',
			callback_data: JSON.stringify({
                t: 'data',
                p: { printType: 'Высокая'}
            })
		},
		{
			text: 'Флексо',
			callback_data: JSON.stringify({
                t: 'data',
                p: { printType: 'Флексо'}
            })
		},
		{
			text: 'Трафаретная',
			callback_data: JSON.stringify({
                t: 'data',
                p: { printType: 'Трафаретная'}
            })
		}
	],
    [
		{
            text: '< Краски >',
			callback_data: JSON.stringify({
                t: 'filter',
                p: { }
            })
		    
        }
	],
    [
        {
			text: 'Водные',
			callback_data: JSON.stringify({
                t: 'data',
                p: { inkCompaibility: 'Водные'}
            })
		},
        {
			text: 'Спиртовые',
			callback_data: JSON.stringify({
                t: 'data',
                p: { inkCompaibility: 'Спиртовые'}
            })
		},
        {
			text: 'УФ',
			callback_data: JSON.stringify({
                t: 'data',
                p: { inkCompaibility: 'УФ'}
            })
		},
    ],
    [
        {
			text: 'Масляные',
			callback_data: JSON.stringify({
                t: 'data',
                p: { inkCompaibility: 'Масляные'}
            })
		},
        {
			text: 'Толуольные',
			callback_data: JSON.stringify({
                t: 'data',
                p: { inkCompaibility: 'Толуольные'}
            })
		},
        {
			text: 'Термокраски',
			callback_data: JSON.stringify({
                t: 'data',
                p: { inkCompaibility: 'Термокраски'}
            })
		},
    ],
	// [
	// 	Markup.button.callback(
	// 		'Масляные',
	// 		'inkConv',
	// 	),
	// 	Markup.button.callback(
	// 		'Толуольные',
	// 		'inkToluene',
	// 	),
	// 	Markup.button.callback(
	// 		'Термокраски',
	// 		'inkCarbon',
	// 	),
	// ],
];