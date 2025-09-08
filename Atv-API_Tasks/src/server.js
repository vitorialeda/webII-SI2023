import http from "node:http";
import { jsonHandler } from "./middleware/jsonHandler.js";
import { routeHandler } from "./middleware/routeHandler.js";

const PORT = 3333;

async function listner(req, res) {
    await jsonHandler(req, res);
    routeHandler(req, res);
}

http.createServer(listner).listen(PORT);