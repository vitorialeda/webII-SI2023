import { routes } from "../routers/index.js"

export function routerHandler(req, res) {
    const route = routes.find((route) => {
        return route.method === req.method && route.path === req.url
    })

    if (route) {
        return route.controller(req, res)
    }

    return res.writeHead(404).end()
}