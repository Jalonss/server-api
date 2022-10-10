import ResponseJSON from "./response.js";
import ItemTransform from "../utils/_InterfaceItems.js";
import ItemSpecsTransform from "../utils/_InterfaceItemSpecs.js";

async function getItems(req) {
    return fetch(`https://api.mercadolibre.com/sites/MLA/search?limit=4&q=${req.q}`)
        .then(res => res.json())
        .then(json => ResponseJSON(ItemTransform(json), 200, "Get Item by Q"))
}

async function getItemsSpecs(req) {
    return Promise.all([
        fetch(`https://api.mercadolibre.com/items/${req.id}`).then(res => res.json()),
        fetch(`https://api.mercadolibre.com/items/${req.id}/description`).then(res => res.json()),
    ]).then(([specs, description]) => ResponseJSON(ItemSpecsTransform({ specs, description: description.plain_text }), 200, "Get Item by Id"))
}
async function getItemsDescription(id) {
    return fetch(`https://api.mercadolibre.com/items/${id}/description`)
        .then(res => res.json())
        .then(json => ResponseJSON(json, 200, "Get Description by Id"))
}

export { getItems, getItemsSpecs };