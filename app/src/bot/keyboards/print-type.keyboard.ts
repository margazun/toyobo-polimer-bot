import { PolimerFilterT } from "../../types/polimer.type"

export const printTypeKeyboard = (filter: PolimerFilterT) => {
    return [
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
                text: (filter.printType === 'Высокая' ? '✔️ ' : '') + 'Высокая',
                callback_data: JSON.stringify({
                    t: 'data',
                    p: { printType: 'Высокая'}
                })
            },
            {
                text: (filter.printType === 'Флексо' ? '✔️ ' : '') + 'Флексо',
                callback_data: JSON.stringify({
                    t: 'data',
                    p: { printType: 'Флексо'}
                })
            },
            {
                text: (filter.printType === 'Трафаретная' ? '✔️ ' : '') + 'Трафарет',
                callback_data: JSON.stringify({
                    t: 'data',
                    p: { printType: 'Трафаретная'}
                })
            }
        ],
    ]
}