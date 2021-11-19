// import { bot } from "./bot/bot";

import { POLIMERS } from "./constants/polimer";
import { ApplicationT, BaseMaterialT, InkCompatibilityT, LineatureT, PolimerT, PolimerTypeT, PrintTypeT } from "./types/polimer.type";

// process.once('SIGINT', () => bot.stop('SIGINT'));
// process.once('SIGTERM', () => bot.stop('SIGTERM'));


const polimers = POLIMERS;

console.log(filterPolimer(polimers, {
    polimerType: "Цифровой",
    printType: "Флексо",
    application: ['Ротационная печать'],
    inkCompaibility: [ "УФ"]
}));


function filterPolimer(polimers: Array<PolimerT>, filter: {
    polimerType?: PolimerTypeT,
    printType?: PrintTypeT,
    application?: Array<ApplicationT>,
    baseMaterial?: BaseMaterialT,
    inkCompaibility?: Array<InkCompatibilityT>
    lineature?: LineatureT

}): Array<PolimerT> {
    let result = polimers;
    if (filter.polimerType) {
        result = result.filter(polimer => {
            return polimer.polimerType.indexOf(filter.polimerType as string) < 0 ? false : true
        });
    }

    if (filter.printType) {
        result = result.filter(polimer => {
            return polimer.printType === filter.printType;
        });
    }

    if (filter.application) {
        filter.application.forEach(application => {
            result = result.filter(polimer => {
                return polimer.applications.indexOf(application) < 0 ? false : true
            })
        })
    }

    if (filter.inkCompaibility) {
        filter.inkCompaibility.forEach(ink => {
            result = result.filter(polimer => {
                if (polimer.inkCompatibility) {
                    return polimer.inkCompatibility.indexOf(ink) < 0 ? false : true
                }
                return false
            })
        })
    }

    return result
}