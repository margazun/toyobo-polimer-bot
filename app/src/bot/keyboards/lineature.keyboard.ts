import { PolimerFilterT } from "../../types/polimer.type"

export const lineatureKeyboard = (filter: PolimerFilterT) => {
    return [
        [
            {
                text: '< Максимальная линеатура >',
                callback_data: JSON.stringify({
                    t: 'filter',
                    p: { }
                })
                
            }
        ],
        [
            {
                text: (filter.lineature === '200 lpi' ? '✔️ ' : '') + '200 lpi',
                callback_data: JSON.stringify({
                    t: 'data',
                    p: { lineature: '200 lpi'}
                })
            },
            {
                text: (filter.lineature === '175 lpi' ? '✔️ ' : '') + '175 lpi',
                callback_data: JSON.stringify({
                    t: 'data',
                    p: { lineature: '175 lpi'}
                })
            },
            {
                text: (filter.lineature === '150 lpi' ? '✔️ ' : '') + '150 lpi',
                callback_data: JSON.stringify({
                    t: 'data',
                    p: { lineature: '150 lpi'}
                })
            },
        ]
    ]
}