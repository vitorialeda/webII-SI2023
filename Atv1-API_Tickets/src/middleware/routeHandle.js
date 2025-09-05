import { routes } from "../routers/index.js"
import { Database } from "../database/database.js"

const database = new Database()

export function routerHandler(req, res) {
    const route = routes.find((route) => {
        return route.method === req.method && route.path === req.url
    })

    if (route) {
        return route.controller({ req, res, database })
    }

    return res.writeHead(404).end()
}