import http from "node:http"
import { jsonHandler } from "./middleware/jsonHandler.js"
import { routerHandler } from "./middleware/routeHandle.js"

async function listner(req, res) {
    await jsonHandler(req, res)
    routerHandler(req, res)
}


http.createServer(listner).listen(3333)