import { PolimerFilterT } from "../../types/polimer.type"

export const polimerTypeKeyboard = (filter: PolimerFilterT) => {
    return [
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
                text: (filter.polimerType === 'Цифровой' ? '✔️ ' : '') + 'Цифровой',
                callback_data: JSON.stringify({
                    t: 'data',
                    p: {
                        polimerType: 'Цифровой'
                    }
                })
            },
            {
                text: (filter.polimerType === 'Аналоговый' ? '✔️ ' : '') + 'Аналоговый',
                callback_data: JSON.stringify({
                    t: 'data',
                    p: {
                        polimerType: 'Аналоговый'
                    }
                })
            },
        ]
    ]
}