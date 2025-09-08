export function delete_ticket({ req, res, database }) {
    const id = req.url.split("/")[2];
    database.delete("tickets", id);

    res.writeHead(200).end("Ticket deletado com sucesso.");
}