
export interface PolimerT {
    brandName: string,
    polimerType: PolimerTypeT,
    printType?: PrintTypeT,
    applications: Array<ApplicationT>,
    washoutSolution?: string,
    link?: string,
    thickness: Array<ThicknessT>,
    hardness: string,
    baseMaterial?: BaseMaterialT,
    resolution?: ResolutionT,
    lineature?: LineatureT,
    reliefDepth?: ReliefDepthT | string,
    inkCompatibility?: Array<InkCompatibilityT>
    countryOfOrigin?: CountryOfOriginT,
    podioLink: string
}

export type PrintTypeT = 'Высокая' | 'Флексо' | 'Трафаретная';

export type ApplicationT = 'Тампонная печать'
                    | 'Плоская печать этикеток, ярлыков'
                    | 'Типоофсет (Сухой офсет)'
                    | 'Высококачественная ротационная печать'
                    | 'Качественная ротационная печать'
                    | 'Ротационная печать'
                    | 'Тиснение, конгрев'
                    | 'Печать по скотчу'
                    | 'Плоская трафаретная печать'
                    | 'Термопечать печать'
                    | 'Изготовление табличек'
                    | 'Выборочная лакировка';

export type PolimerTypeT = 'Цифровой' | 'Аналоговый';

export type ThicknessT = 0.10 | 0.15 | 0.20 | 0.25 | 0.35 | 0.40 | 0.43
                | 0.53 | 0.58 | 0.73 | 0.80 | 0.83 | 0.95 | 1.00
                | 1.14 | 1.70 | 1.75 | 2.00 | 2.54 | 2.84 | 0.70;

export type BaseMaterialT = 'Полиэфирная' | 'Стальная';

export type LineatureT = '200 lpi' | '175 lpi' | '150 lpi';

export type ResolutionT = '3-95%' | '1-95%' | '5-90%' | '2-95%';

export type ReliefDepthT = '0.65';

export type InkCompatibilityT = 'Водные'
                            | 'Спиртовые'
                            | 'УФ'
                            | 'Масляные'
                            | 'Толуольные'
                            | 'Термокраски'

export type CountryOfOriginT = "Япония"