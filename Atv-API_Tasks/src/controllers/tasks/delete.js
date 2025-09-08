export function delete_task({ req, res, database }) {
    const id = req.url.split("/")[2];
    database.delete("tasks", id);

    res.writeHead(200).end("Task deletada com sucesso.");
}