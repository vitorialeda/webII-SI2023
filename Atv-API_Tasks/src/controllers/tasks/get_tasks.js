export function get_tasks({ req, res, database }) {
    const data = database.select("tasks", req.body)
    res.writeHead(201).end(JSON.stringify(data))
}