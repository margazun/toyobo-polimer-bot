import { PolimerT } from "../types/polimer.type";

export const POLIMERS: PolimerT[] = [
    {
        brandName: 'Toyobo Cosmolight QS',
        polimerType: "Цифровой",
        printType: "Флексо",
        applications: [ "Высококачественная ротационная печать"],
        washoutSolution: 'вода + COSMO SOAP',
        thickness: [1.14, 1.70, 2.54, 2.84],
        hardness: "77",
        baseMaterial: "Полиэфирная",
        resolution: "1-95%",
        podioLink: 'https://podio.com/yamru/flekso/apps/polimery/items/41'
    },
    {
        brandName: 'Toyobo Printight QF**DB',
        polimerType: "Цифровой",
        printType: "Высокая",
        applications: [
            "Высококачественная ротационная печать",
            "Качественная ротационная печать"
        ],
        washoutSolution: 'вода',
        thickness: [0.80, 0.95],
        hardness: "55",
        baseMaterial: "Полиэфирная",
        resolution: "1-95%",
        lineature: "175 lpi",
        reliefDepth: "0.65",
        inkCompatibility: [
            "УФ", "Масляные"
        ],
        countryOfOrigin: "Япония",
        podioLink: 'https://podio.com/yamru/flekso/apps/polimery/items/40'
    },
    {
        brandName: 'Toyobo Cosmolight NHE',
        polimerType: "Аналоговый",
        printType: "Флексо",
        applications: [
            "Качественная ротационная печать",
            "Ротационная печать"
        ],
        washoutSolution: 'Мыльный раствор воды',
        thickness: [1.14, 1.70, 2.54, 2.84],
        hardness: `1.14 - 81
1.70 - 76
2.54 - 71
2.84 - 70`,
        baseMaterial: "Полиэфирная",
        resolution: "1-95%",
        lineature: "175 lpi",
        inkCompatibility: [
            "Водные", "Спиртовые", "УФ"
        ],
        countryOfOrigin: "Япония",
        podioLink: 'https://podio.com/yamru/flekso/apps/polimery/items/39'
    },
    {
        brandName: 'Toyobo Printight QF**S*',
        polimerType: "Цифровой",
        printType: "Высокая",
        applications: [
            "Плоская печать этикеток, ярлыков",
            "Качественная ротационная печать"
        ],
        washoutSolution: 'Вода',
        thickness: [0.95, 0.70],
        hardness: `40`,
        baseMaterial: "Полиэфирная",
        resolution: "1-95%",
        lineature: '150 lpi',
        inkCompatibility: [
            "Спиртовые", "УФ"
        ],
        countryOfOrigin: "Япония",
        podioLink: 'https://podio.com/yamru/flekso/apps/polimery/items/38'
    },
    {
        brandName: 'Toyobo Printight QF**K',
        polimerType: "Цифровой",
        printType: "Высокая",
        applications: [
            "Плоская печать этикеток, ярлыков",
            "Высококачественная ротационная печать"
        ],
        washoutSolution: 'Вода',
        thickness: [0.95],
        hardness: `67`,
        baseMaterial: "Полиэфирная",
        resolution: "1-95%",
        lineature: '175 lpi',
        inkCompatibility: [
            "Спиртовые", "УФ"
        ],
        countryOfOrigin: "Япония",
        podioLink: 'https://podio.com/yamru/flekso/apps/polimery/items/37'
    },
    {
        brandName: 'Toyobo Printight QM*A*',
        polimerType: "Цифровой",
        printType: "Высокая",
        applications: [
            "Плоская печать этикеток, ярлыков",
            "Типоофсет (Сухой офсет)",
            "Высококачественная ротационная печать"
        ],
        washoutSolution: 'Вода',
        thickness: [0.73, 0.83, 0.95],
        hardness: `67`,
        baseMaterial: "Стальная",
        resolution: "1-95%",
        lineature: '175 lpi',
        inkCompatibility: [
            "Спиртовые", "УФ"
        ],
        countryOfOrigin: "Япония",
        podioLink: 'https://podio.com/yamru/flekso/apps/polimery/items/36'
    },
    {
        brandName: 'Toyobo Printight QM****AR',
        polimerType: "Цифровой",
        printType: "Высокая",
        applications: [
            "Типоофсет (Сухой офсет)",
        ],
        washoutSolution: 'Вода',
        thickness: [0.73, 0.83, 0.95],
        hardness: `67`,
        baseMaterial: "Стальная",
        resolution: "1-95%",
        lineature: '175 lpi',
        reliefDepth: `0.73 - 0.65
0.83 - 0.53
0.95 - 0.43`,
        inkCompatibility: [
            "Спиртовые", "УФ", "Масляные"
        ],
        countryOfOrigin: "Япония",
        podioLink: 'https://podio.com/yamru/flekso/apps/polimery/items/35'
    },
    {
        brandName: 'Toyobo Printight LF',
        polimerType: "Аналоговый",
        printType: "Высокая",
        applications: [
            "Высококачественная ротационная печать",
            "Качественная ротационная печать"
        ],
        washoutSolution: 'Вода',
        thickness: [0.80, 0.95],
        hardness: `55`,
        baseMaterial: "Полиэфирная",
        resolution: "2-95%",
        lineature: '150 lpi',
        inkCompatibility: [
            "УФ"
        ],
        countryOfOrigin: "Япония",
        podioLink: 'https://podio.com/yamru/flekso/apps/polimery/items/33'
    },
    {
        brandName: 'Toyobo Сosmomask TF',
        polimerType: "Аналоговый",
        printType: "Трафаретная",
        applications: [
            "Плоская трафаретная печать"
        ],
        washoutSolution: 'Вода',
        thickness: [0.10, 0.15, 0.20, 0.25, 0.35, 0.40],
        hardness: `0.1 - 67
0.2 - 60`,
        inkCompatibility: [
            "УФ"
        ],
        countryOfOrigin: "Япония",
        podioLink: 'https://podio.com/yamru/flekso/apps/polimery/items/32'
    },
    {
        brandName: 'Toyobo Printight CM',
        polimerType: "Аналоговый",
        printType: "Высокая",
        applications: [
            "Термопечать"
        ],
        washoutSolution: 'Вода',
        thickness: [1.70],
        hardness: `25`,
        baseMaterial: "Стальная",
        resolution: "5-90%",
        lineature: '150 lpi',
        reliefDepth: "1.48",
        inkCompatibility: [
            "Термокраски"
        ],
        countryOfOrigin: "Япония",
        podioLink: 'https://podio.com/yamru/flekso/apps/polimery/items/31'
    },
    {
        brandName: 'Toyobo Printight PM',
        polimerType: "Аналоговый",
        printType: "Высокая",
        applications: [
            "Тампонная печать"
        ],
        washoutSolution: 'Вода',
        thickness: [0.43, 0.73],
        hardness: `87`,
        baseMaterial: "Стальная",
        resolution: "3-95%",
        lineature: '150 lpi',
        reliefDepth: `0.43 - 0.21
0.73 - 0.43`,
        inkCompatibility: [
            "УФ", "Масляные", "Толуольные"
        ],
        countryOfOrigin: "Япония",
        podioLink: 'https://podio.com/yamru/flekso/apps/polimery/items/30'
    },
    {
        brandName: 'Toyobo Printight CF',
        polimerType: "Аналоговый",
        printType: "Высокая",
        applications: [
            "Термопечать"
        ],
        washoutSolution: 'Вода',
        thickness: [1.70, 2.00],
        hardness: `25`,
        baseMaterial: "Полиэфирная",
        resolution: "5-90%",
        lineature: '150 lpi',
        reliefDepth: "1.48",
        inkCompatibility: [
            "Термокраски"
        ],
        countryOfOrigin: "Япония",
        podioLink: 'https://podio.com/yamru/flekso/apps/polimery/items/29'
    },
    {
        brandName: 'Toyobo Printight ZF',
        polimerType: "Аналоговый",
        printType: "Флексо",
        applications: [
            "Качественная ротационная печать",
            "Выборочная лакировка"
        ],
        washoutSolution: 'Вода',
        thickness: [1.14],
        hardness: `27`,
        baseMaterial: "Полиэфирная",
        resolution: "3-95%",
        lineature: '150 lpi',
        reliefDepth: `0.85`,
        inkCompatibility: [
            "УФ"
        ],
        countryOfOrigin: "Япония",
        podioLink: 'https://podio.com/yamru/flekso/apps/polimery/items/28'
    },
    {
        brandName: 'Toyobo Printight YF',
        polimerType: "Аналоговый",
        applications: [
            "Изготовление табличек"
        ],
        washoutSolution: 'Вода',
        thickness: [0.95],
        hardness: `70`,
        baseMaterial: "Полиэфирная",
        resolution: "2-95%",
        reliefDepth: `0.70`,
        countryOfOrigin: "Япония",
        podioLink: 'https://podio.com/yamru/flekso/apps/polimery/items/27'
    },
    {
        brandName: 'Toyobo Printight RF',
        polimerType: "Аналоговый",
        printType: "Высокая",
        applications: [
            "Ротационная печать",
            "Выборочная лакировка"
        ],
        washoutSolution: 'Вода',
        thickness: [0.80, 0.95],
        hardness: `55`,
        baseMaterial: "Полиэфирная",
        resolution: "1-95%",
        lineature: '175 lpi',
        inkCompatibility: [
            "УФ", "Масляные", "Толуольные"
        ],
        countryOfOrigin: "Япония",
        podioLink: 'https://podio.com/yamru/flekso/apps/polimery/items/26'
    },
    {
        brandName: 'Toyobo Cosmolight QZ',
        polimerType: "Цифровой",
        printType: "Флексо",
        applications: [
            "Качественная ротационная печать"
        ],
        washoutSolution: 'Вода + порошок, вода + CosmoSoap',
        thickness: [1.14, 1.70],
        hardness: `1.14 - 77
1.70 - 71`,
        baseMaterial: "Полиэфирная",
        resolution: "1-95%",
        lineature: '200 lpi',
        inkCompatibility: [
            "УФ", "Водные"
        ],
        countryOfOrigin: "Япония",
        podioLink: 'https://podio.com/yamru/flekso/apps/polimery/items/25'
    },
    {
        brandName: 'Toyobo Cosmolight NZ',
        polimerType: "Аналоговый",
        printType: "Флексо",
        applications: [
            "Высококачественная ротационная печать"
        ],
        washoutSolution: 'Вода + порошок, вода + CosmoSoap',
        thickness: [1.14, 1.70],
        hardness: `1.14 - 77
1.70 - 71`,
        baseMaterial: "Полиэфирная",
        resolution: "1-95%",
        lineature: '175 lpi',
        inkCompatibility: [
            "УФ", "Водные", "Спиртовые"
        ],
        countryOfOrigin: "Япония",
        podioLink: 'https://podio.com/yamru/flekso/apps/polimery/items/24'
    },
    {
        brandName: 'Toyobo Cosmolight NSE',
        polimerType: "Аналоговый",
        printType: "Флексо",
        applications: [
            "Высококачественная ротационная печать"
        ],
        washoutSolution: 'Вода + порошок, вода + CosmoSoap',
        thickness: [1.14, 1.70, 2.54, 2.84],
        hardness: `1.14 - 77
1.70 - 71
2.54 - 65
2.84 - 64`,
        baseMaterial: "Полиэфирная",
        resolution: "1-95%",
        lineature: '200 lpi',
        inkCompatibility: [
            "Толуольные"
        ],
        countryOfOrigin: "Япония",
        podioLink: 'https://podio.com/yamru/flekso/apps/polimery/items/23'
    },
    {
        brandName: 'Toyobo Cosmolight QS**U',
        polimerType: "Цифровой",
        printType: "Флексо",
        applications: [
            "Тампонная печать", "Качественная ротационная печать"
        ],
        washoutSolution: 'Вода + порошок, вода + CosmoSoap',
        thickness: [1.14, 1.70],
        hardness: `1.14 - 77
1.70 - 71`,
        baseMaterial: "Полиэфирная",
        resolution: "1-95%",
        lineature: '200 lpi',
        reliefDepth: `1.14 - 0.5-0.7
1.70 - 0.07-0.9`,
        inkCompatibility: [
            "Водные", "УФ"
        ],
        countryOfOrigin: "Япония",
        podioLink: 'https://podio.com/yamru/flekso/apps/polimery/items/22'
    },
    {
        brandName: 'Toyobo Cosmolight NEO',
        polimerType: "Аналоговый",
        printType: "Флексо",
        applications: [
            "Качественная ротационная печать"
        ],
        washoutSolution: 'Вода + порошок, вода + CosmoSoap',
        thickness: [1.14, 1.70, 2.54, 2.84],
        hardness: `1.14 - 76
1.70 - 68
2.54 - 60
2.84 - 64`,
        baseMaterial: "Полиэфирная",
        resolution: "2-95%",
        lineature: '150 lpi',
        inkCompatibility: [
            "Водные",
            "Спиртовые",
            "УФ",
        ],
        countryOfOrigin: "Япония",
        podioLink: 'https://podio.com/yamru/flekso/apps/polimery/items/21'
    },
    {
        brandName: 'Toyobo Printight QF**B*',
        polimerType: "Цифровой",
        printType: "Высокая",
        applications: [
            "Плоская печать этикеток, ярлыков",
            "Выборочная лакировка"
        ],
        washoutSolution: 'Вода',
        thickness: [0.95],
        hardness: `25`,
        baseMaterial: "Полиэфирная",
        resolution: "2-95%",
        lineature: '150 lpi',
        inkCompatibility: [
            "Спиртовые",
            "УФ",
        ],
        countryOfOrigin: "Япония",
        podioLink: 'https://podio.com/yamru/flekso/apps/polimery/items/20'
    },
    {
        brandName: 'Toyobo Printight QM**K*',
        polimerType: "Цифровой",
        printType: "Высокая",
        applications: [
            "Плоская печать этикеток, ярлыков",
            "Типоофсет (Сухой офсет)",
        ],
        washoutSolution: 'Вода',
        thickness: [0.73, 0.83, 0.95],
        hardness: `67`,
        baseMaterial: "Стальная",
        resolution: "1-95%",
        lineature: '175 lpi',
        inkCompatibility: [
            "УФ",
            "Масляные",
        ],
        countryOfOrigin: "Япония",
        podioLink: 'https://podio.com/yamru/flekso/apps/polimery/items/18'
    },
    {
        brandName: 'Toyobo Printight QM**J',
        polimerType: "Цифровой",
        printType: "Высокая",
        applications: [
            "Плоская печать этикеток, ярлыков",
            "Типоофсет (Сухой офсет)",
        ],
        washoutSolution: 'Вода',
        thickness: [0.70, 0.83, 0.95],
        hardness: `55`,
        baseMaterial: "Стальная",
        resolution: "1-95%",
        lineature: '200 lpi',
        inkCompatibility: [
            "УФ",
            "Масляные",
        ],
        countryOfOrigin: "Япония",
        podioLink: 'https://podio.com/yamru/flekso/apps/polimery/items/17'
    },
    {
        brandName: 'Toyobo Printight UV',
        polimerType: "Аналоговый",
        printType: "Флексо",
        applications: [
            "Качественная ротационная печать",
            "Выборочная лакировка",
        ],
        washoutSolution: 'Вода',
        thickness: [1.14],
        hardness: `27`,
        baseMaterial: "Полиэфирная",
        resolution: "2-95%",
        lineature: '150 lpi',
        reliefDepth: "0.85",
        inkCompatibility: [
            "УФ",
        ],
        countryOfOrigin: "Япония",
        podioLink: 'https://podio.com/yamru/flekso/apps/polimery/items/16'
    },
    {
        brandName: 'Toyobo Printight UF',
        polimerType: "Аналоговый",
        printType: "Высокая",
        applications: [
            "Ротационная печать",
            "Выборочная лакировка",
        ],
        washoutSolution: 'Вода',
        thickness: [0.70, 0.95],
        hardness: `27`,
        baseMaterial: "Полиэфирная",
        resolution: "3-95%",
        lineature: '150 lpi',
        inkCompatibility: [
            "УФ",
            "Спиртовые"
        ],
        countryOfOrigin: "Япония",
        podioLink: 'https://podio.com/yamru/flekso/apps/polimery/items/15'
    },
    {
        brandName: 'Toyobo Printight SF',
        polimerType: "Аналоговый",
        printType: "Высокая",
        applications: [
            "Печать по скотчу"
        ],
        washoutSolution: 'Вода',
        thickness: [0.70, 0.95, 1.70],
        hardness: `40`,
        baseMaterial: "Полиэфирная",
        resolution: "3-95%",
        lineature: '150 lpi',
        inkCompatibility: [
            "УФ",
            "Спиртовые",
            "Толуольные",
        ],
        countryOfOrigin: "Япония",
        podioLink: 'https://podio.com/yamru/flekso/apps/polimery/items/14'
    },
    {
        brandName: 'Toyobo Cosmolight QH',
        polimerType: "Цифровой",
        printType: "Флексо",
        applications: [
            "Высококачественная ротационная печать",
            "Качественная ротационная печать",
            "Ротационная печать"
        ],
        washoutSolution: 'Вода + порошок, либо вода + Cosmo Soap',
        thickness: [1.14, 1.70],
        hardness: `1.14 - 81
1.70 - 86`,
        baseMaterial: "Полиэфирная",
        resolution: "1-95%",
        lineature: '200 lpi',
        reliefDepth: `1.14 - 0.7
1.70 - 0.9`,
        inkCompatibility: [
            "УФ",
            "Водные",
            "Спиртовые"
        ],
        countryOfOrigin: "Япония",
        podioLink: 'https://podio.com/yamru/flekso/apps/polimery/items/11'
    },
    {
        brandName: 'Toyobo Cosmolight QS**F',
        polimerType: "Цифровой",
        printType: "Флексо",
        applications: [
            "Тампонная печать",
            "Качественная ротационная печать"
        ],
        washoutSolution: 'Вода + порошок, либо вода + Cosmo Soap',
        thickness: [1.14, 1.70],
        hardness: `1.14 - 77
1.70 - 71`,
        baseMaterial: "Полиэфирная",
        resolution: "1-95%",
        lineature: '200 lpi',
        reliefDepth: `1.14 - 0.7
1.70 - 0.9`,
        inkCompatibility: [
            "УФ",
            "Водные",
        ],
        countryOfOrigin: "Япония",
        podioLink: 'https://podio.com/yamru/flekso/apps/polimery/items/10'
    },
    {
        brandName: 'Toyobo Printight BF',
        polimerType: "Аналоговый",
        printType: "Высокая",
        applications: [
            "Ротационная печать",
            "Печать по скотчу",
            "Выборочная лакировка"
        ],
        washoutSolution: 'Вода',
        thickness: [0.95, 1.70, 2.00],
        hardness: `25`,
        baseMaterial: "Полиэфирная",
        resolution: "3-95%",
        lineature: '150 lpi',
        reliefDepth: `1.14 - 0.7
1.70 - 0.9
2.00 - 1.78`,
        inkCompatibility: [
            "Масляные",
            "Толуольные",
            "УФ",
        ],
        countryOfOrigin: "Япония",
        podioLink: 'https://podio.com/yamru/flekso/apps/polimery/items/9'
    },
    {
        brandName: 'Toyobo Printight JF',
        polimerType: "Аналоговый",
        printType: "Высокая",
        applications: [
            "Типоофсет (Сухой офсет)",
            "Качественная ротационная печать",
        ],
        washoutSolution: 'Вода',
        thickness: [0.80, 0.95],
        hardness: `55`,
        baseMaterial: "Полиэфирная",
        resolution: "1-95%",
        lineature: '200 lpi',
        reliefDepth: `0.80 - 0.60
0.95 - 0.68`,
        inkCompatibility: [
            "УФ",
        ],
        countryOfOrigin: "Япония",
        podioLink: 'https://podio.com/yamru/flekso/apps/polimery/items/8'
    },
    {
        brandName: 'Toyobo Printight LF',
        polimerType: "Аналоговый",
        printType: "Высокая",
        applications: [
            "Высококачественная ротационная печать",
        ],
        washoutSolution: 'Вода',
        thickness: [0.80, 0.95],
        hardness: `55`,
        baseMaterial: "Полиэфирная",
        resolution: "1-95%",
        lineature: '175 lpi',
        reliefDepth: `0.80 - 0.60
0.95 - 0.68`,
        inkCompatibility: [
            "УФ",
            "Масляные",
        ],
        countryOfOrigin: "Япония",
        podioLink: 'https://podio.com/yamru/flekso/apps/polimery/items/7'
    },
    {
        brandName: 'Toyobo Printight KF',
        polimerType: "Аналоговый",
        printType: "Высокая",
        applications: [
            "Тампонная печать",
            "Плоская печать этикеток, ярлыков",
            "Типоофсет (Сухой офсет)",
            "Ротационная печать",
            "Тиснение, конгрев"
        ],
        washoutSolution: 'Вода',
        thickness: [0.43, 0.53, 0.58, 0.73, 0.83, 0.95, 1.75],
        hardness: `67`,
        baseMaterial: "Стальная",
        resolution: "1-95%",
        lineature: '175 lpi',
        reliefDepth: `0.43 - 0.21
0.53 - 0.31
0.58 - 0.36
0.73 - 0.43
0.83 - 0.53
0.95 - 0.65
1.75 - 1.45`,
        inkCompatibility: [
            "УФ",
            "Масляные",
        ],
        countryOfOrigin: "Япония",
        podioLink: 'https://podio.com/yamru/flekso/apps/polimery/items/6'
    },
    {
        brandName: 'Toyobo Printight KF',
        polimerType: "Аналоговый",
        printType: "Высокая",
        applications: [
            "Плоская печать этикеток, ярлыков",
            "Тиснение, конгрев"
        ],
        washoutSolution: 'Вода',
        thickness: [0.58, 0.80, 0.95, 1.75],
        hardness: `67`,
        baseMaterial: "Полиэфирная",
        resolution: "1-95%",
        lineature: '175 lpi',
        reliefDepth: `0.80 - 0.53
0.95 - 0.68`,
        inkCompatibility: [
            "УФ",
            "Масляные",
        ],
        countryOfOrigin: "Япония",
        podioLink: 'https://podio.com/yamru/flekso/apps/polimery/items/5'
    },
    {
        brandName: 'Toyobo Cosmolight NEO**F',
        polimerType: "Аналоговый",
        printType: "Флексо",
        applications: [
            "Ротационная печать",
            "Выборочная лакировка",
        ],
        washoutSolution: 'Вода + порошок, либо вода + Cosmo Soap',
        thickness: [1.14, 1.70, 2.54, 2.84],
        hardness: `1.17 - 76
1.70 - 68
2.54 - 61
2.84 - 60`,
        baseMaterial: "Полиэфирная",
        resolution: "2-95%",
        lineature: '150 lpi',
        reliefDepth: `1.14 - 0.5-0.7
1.70 - 0.7-0.9
2.54 - 0.9-1.1
2.84 - 1.1-1.3`,
        inkCompatibility: [
            "УФ",
            "Водные",
            "Спиртовые",
        ],
        countryOfOrigin: "Япония",
        podioLink: 'https://podio.com/yamru/flekso/apps/polimery/items/4'
    },
    {
        brandName: 'Toyobo Cosmolight NR**F',
        polimerType: "Аналоговый",
        printType: "Флексо",
        applications: [
            "Ротационная печать",
            "Выборочная лакировка",
        ],
        washoutSolution: 'Вода + порошок, либо вода + Cosmo Soap',
        thickness: [1.14, 1.70, 2.54, 2.84],
        hardness: `1.17 - 71
1.70 - 60
2.54 - 52
2.84 - 50`,
        baseMaterial: "Полиэфирная",
        resolution: "1-95%",
        lineature: '175 lpi',
        reliefDepth: `1.14 - 0.5-0.7
1.70 - 0.7-0.9
2.54 - 1.1-1.3
2.84 - 1.3-1.7`,
        inkCompatibility: [
            "Водные",
            "Спиртовые",
            "УФ",
        ],
        countryOfOrigin: "Япония",
        podioLink: 'https://podio.com/yamru/flekso/apps/polimery/items/3'
    },
    {
        brandName: 'Toyobo Cosmolight NH**F',
        polimerType: "Аналоговый",
        printType: "Флексо",
        applications: [
            "Качественная ротационная печать",
            "Ротационная печать",
        ],
        washoutSolution: 'Вода + порошок, либо вода + Cosmo Soap',
        thickness: [1.14, 1.70, 2.54, 2.84],
        hardness: `1.17 - 81
1.70 - 76
2.54 - 71
2.84 - 70`,
        baseMaterial: "Полиэфирная",
        resolution: "1-95%",
        lineature: '175 lpi',
        reliefDepth: `1.14 - 0.5-0.7
1.70 - 0.7-0.9
2.54 - 1.1-1.3
2.84 - 1.3-1.7`,
        inkCompatibility: [
            "Водные",
            "Спиртовые",
            "УФ",
        ],
        countryOfOrigin: "Япония",
        podioLink: 'https://podio.com/yamru/flekso/apps/polimery/items/2'
    },
    {
        brandName: 'Toyobo Cosmolight NS**F',
        polimerType: "Аналоговый",
        printType: "Флексо",
        applications: [
            "Высококачественная ротационная печать",
            "Качественная ротационная печать",
            "Ротационная печать",
        ],
        washoutSolution: 'Вода + порошок, либо вода + Cosmo Soap',
        thickness: [1.14, 1.70, 2.54, 2.84],
        hardness: `1.17 - 77
1.70 - 71
2.54 - 65
2.84 - 64`,
        baseMaterial: "Полиэфирная",
        resolution: "1-95%",
        lineature: '175 lpi',
        reliefDepth: `1.14 - 0.5-0.7
1.70 - 0.7-0.9
2.54 - 1.1-1.3
2.84 - 1.3-1.7`,
        inkCompatibility: [
            "Водные",
            "Спиртовые",
            "УФ",
        ],
        countryOfOrigin: "Япония",
        podioLink: 'https://podio.com/yamru/flekso/apps/polimery/items/1'
    },
    
]