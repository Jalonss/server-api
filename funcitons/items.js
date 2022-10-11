import ResponseJSON from "./response.js";
import ItemTransform from "../utils/_InterfaceItems.js";
import ItemSpecsTransform from "../utils/_InterfaceItemSpecs.js";

async function getItems(req) {
    return fetch(`${process.env.API_URL_SEARCH_ITEMS}?limit=4&q=${req.q}`)
        .then(res => res.json())
        .then(json => ResponseJSON(ItemTransform(json), 200, "Get Item by Query"))
}

async function getItemsSpecs(req) {
    return Promise.all([
        fetch(`${process.env.API_URL_ITEM}/${req.id}`).then(res => res.json()),
        fetch(`${process.env.API_URL_ITEM}/${req.id}/description`).then(res => res.json()),
    ]).then(([specs, description]) => ResponseJSON(ItemSpecsTransform({ specs, description: description.plain_text }), 200, "Get Item by Id"))
}

export { getItems, getItemsSpecs };