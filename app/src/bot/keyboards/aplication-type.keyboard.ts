import { PolimerFilterT } from "../../types/polimer.type"

export const aplicationTypeKeyboard = (filter: PolimerFilterT) => {
    return [
        [
            {
                text: '< Применение >',
                callback_data: JSON.stringify({
                    t: 'filter',
                    p: { }
                })
                
            }
        ],
        [
            {
                text: (filter.applications ? (filter.applications.indexOf('Тампонная печать') > -1 ? '✔️ ' : '') : '') + 'Тампонная печать',
                callback_data: JSON.stringify({
                    t: 'data',
                    p: { applications: 0}
                })
            },
        ],
        [
            {
                text: (filter.applications ? (filter.applications.indexOf('Плоская печать этикеток, ярлыков') > -1 ? '✔️ ' : '') : '') + 'Плоская печать этикеток, ярлыков',
                callback_data: JSON.stringify({
                    t: 'data',
                    p: { applications: 1}
                })
            }
            
        ],
        [
            {
                text: (filter.applications ? (filter.applications.indexOf('Типоофсет (Сухой офсет)') > -1 ? '✔️ ' : '') : '') + 'Типоофсет (Сухой офсет)',
                callback_data: JSON.stringify({
                    t: 'data',
                    p: { applications: 2}
                })
            }
            
        ],
        [
            {
                text: (filter.applications ? (filter.applications.indexOf('Высококачественная ротационная печать') > -1 ? '✔️ ' : '') : '') + 'Высококачественная ротационная печать',
                callback_data: JSON.stringify({
                    t: 'data',
                    p: { applications: 3}
                })
            }
            
        ],
        [
            {
                text: (filter.applications ? (filter.applications.indexOf('Качественная ротационная печать') > -1 ? '✔️ ' : '') : '') + 'Качественная ротационная печать',
                callback_data: JSON.stringify({
                    t: 'data',
                    p: { applications: 4}
                })
            }
            
        ],
        [
            {
                text: (filter.applications ? (filter.applications.indexOf('Ротационная печать') > -1 ? '✔️ ' : '') : '') + 'Ротационная печать',
                callback_data: JSON.stringify({
                    t: 'data',
                    p: { applications: 5}
                })
            },
            {
                text: (filter.applications ? (filter.applications.indexOf('Тиснение, конгрев') > -1 ? '✔️ ' : '') : '') + 'Тиснение, конгрев',
                callback_data: JSON.stringify({
                    t: 'data',
                    p: { applications: 6}
                })
            },
            
        ],
        [
            {
                text: (filter.applications ? (filter.applications.indexOf('Печать по скотчу') > -1 ? '✔️ ' : '') : '') + 'Печать по скотчу',
                callback_data: JSON.stringify({
                    t: 'data',
                    p: { applications: 7}
                })
            },
            {
                text: (filter.applications ? (filter.applications.indexOf('Плоская трафаретная печать') > -1 ? '✔️ ' : '') : '') + 'Плоская трафаретная печать',
                callback_data: JSON.stringify({
                    t: 'data',
                    p: { applications: 8}
                })
            },
            
        ],
        [
            {
                text: (filter.applications ? (filter.applications.indexOf('Термопечать') > -1 ? '✔️ ' : '') : '') + 'Термопечать',
                callback_data: JSON.stringify({
                    t: 'data',
                    p: { applications: 9}
                })
            },
            {
                text: (filter.applications ? (filter.applications.indexOf('Изготовление табличек') > -1 ? '✔️ ' : '') : '') + 'Изготовление табличек',
                callback_data: JSON.stringify({
                    t: 'data',
                    p: { applications: 10}
                })
            },
        ],
        [
            {
                text: (filter.applications ? (filter.applications.indexOf('Выборочная лакировка') > -1 ? '✔️ ' : '') : '') + 'Выборочная лакировка',
                callback_data: JSON.stringify({
                    t: 'data',
                    p: { applications: 11}
                })
            },
        ],
    ]
}