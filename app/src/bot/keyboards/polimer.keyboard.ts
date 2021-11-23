import { PolimerFilterT } from "../../types/polimer.type"
import { aplicationTypeKeyboard } from "./aplication-type.keyboard"
import { baseMaterialKeyboard } from "./base-material.keyboard"
import { inkCompaibilityKeyboard } from "./ink-compaibility.keyboard"
import { lineatureKeyboard } from "./lineature.keyboard"
import { polimerTypeKeyboard } from "./polimer-type.keyboard"
import { printTypeKeyboard } from "./print-type.keyboard"

export const polimerFilterKeyboard = (filter: PolimerFilterT) => {
    return [
        ...polimerTypeKeyboard(filter),
        ...printTypeKeyboard(filter),
        ...inkCompaibilityKeyboard(filter),
        ...baseMaterialKeyboard(filter),
        ...lineatureKeyboard(filter),
        ...aplicationTypeKeyboard(filter),

    ]
}