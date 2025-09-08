export function complete_task({ req, res, database }) {
    const id = req.url.split("/")[2]
    const task = database.update("tasks", id, { completed_at: new Date() });

    return res.writeHead(200).end(JSON.stringify(task));
}