import {rules, createComparison, defaultRules} from "../lib/compare.js";


export function initSearching(searchField) {
    // @todo: #5.1 — настроить компаратор
    const compare = createComparison(defaultRules.skipEmptyTargetValues);

    return (data, state, action) => {
        // @todo: #5.2 — применить компаратор
        rules.searchMultipleFields (searchField, ['date', 'customer', 'seller'], false);
        return data;
    }
}