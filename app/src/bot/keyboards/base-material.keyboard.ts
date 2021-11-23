import { PolimerFilterT } from "../../types/polimer.type"

export const baseMaterialKeyboard = (filter: PolimerFilterT) => {
    return [
        [
            {
                text: '< Материал основы >',
                callback_data: JSON.stringify({
                    t: 'filter',
                    p: { }
                })
                
            }
        ],
        [
            {
                text: (filter.baseMaterial === 'Полиэфирная' ? '✔️ ' : '') + 'Полиэфирная',
                callback_data: JSON.stringify({
                    t: 'data',
                    p: { baseMaterial: 'Полиэфирная'}
                })
            },
            {
                text: (filter.baseMaterial === 'Стальная' ? '✔️ ' : '') + 'Стальная',
                callback_data: JSON.stringify({
                    t: 'data',
                    p: { baseMaterial: 'Стальная'}
                })
            },
        ]
    ]
}