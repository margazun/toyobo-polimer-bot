import { PolimerFilterT } from '../../../types/polimer.type';


export function getFilterText(filter: PolimerFilterT) {
	return JSON.stringify(filter, null, 2);
}