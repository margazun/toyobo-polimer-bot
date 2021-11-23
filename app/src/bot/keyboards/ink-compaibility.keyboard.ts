import { PolimerFilterT } from "../../types/polimer.type"

export const inkCompaibilityKeyboard = (filter: PolimerFilterT) => {
    return [
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
                text: (filter.inkCompaibility ? (filter.inkCompaibility.indexOf('Водные') > -1 ? '✔️ ' : '') : '') + 'Водные',
                callback_data: JSON.stringify({
                    t: 'data',
                    p: { inkCompaibility: 'Водные'}
                })
            },
            {
                text: (filter.inkCompaibility ? (filter.inkCompaibility.indexOf('Спиртовые') > -1 ? '✔️ ' : '') : '') + 'Спиртовые',
                callback_data: JSON.stringify({
                    t: 'data',
                    p: { inkCompaibility: 'Спиртовые'}
                })
            },
            {
                text: (filter.inkCompaibility ? (filter.inkCompaibility.indexOf('УФ') > -1 ? '✔️ ' : '') : '') + 'УФ',
                callback_data: JSON.stringify({
                    t: 'data',
                    p: { inkCompaibility: 'УФ'}
                })
            },
        ],
        [
            {
                text: (filter.inkCompaibility ? (filter.inkCompaibility.indexOf('Масляные') > -1 ? '✔️ ' : '') : '') + 'Масляные',
                callback_data: JSON.stringify({
                    t: 'data',
                    p: { inkCompaibility: 'Масляные'}
                })
            },
            {
                text: (filter.inkCompaibility ? (filter.inkCompaibility.indexOf('Толуольные') > -1 ? '✔️ ' : '') : '') + 'Толуольные',
                callback_data: JSON.stringify({
                    t: 'data',
                    p: { inkCompaibility: 'Толуольные'}
                })
            },
            {
                text: (filter.inkCompaibility ? (filter.inkCompaibility.indexOf('Термокраски') > -1 ? '✔️ ' : '') : '') + 'Термокраски',
                callback_data: JSON.stringify({
                    t: 'data',
                    p: { inkCompaibility: 'Термокраски'}
                })
            },
        ]
    ]
}