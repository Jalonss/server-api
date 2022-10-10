const PORT = 4000;
import express from "express";
import cors from "cors";
const app = express();
import erros from "./_errors.js"
import { getItems, getItemsSpecs } from "./funcitons/items.js"

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/api/items', async function (req, res) {
    try {
        const respond = await getItems(req.query);
        res.status(200).send(respond);
    } catch (e) {
        res.status(500).send(erros.ERROR_NOT_FOUNDe);
    }
});

app.get('/api/items/:id', async function (req, res) {
    try {
        const respond = await getItemsSpecs(req.params);
        res.status(200).send(respond);
    } catch (e) {
        res.status(500).send(erros.ERROR_NOT_FOUNDe);
    }

});

app.listen(PORT, (error) => {
    if (!error)
        console.log("Server is Successfully Running, and App is listening on port " + PORT)
    else
        console.log("Error occurred, server can't start", error);
}
);
