export function fechar({ req, res, database }) {
    const id = req.url.split("/")[2]
    const ticket_atualizado = database.update("tickets", id, { status: "closed" });

    return res.writeHead(200).end(JSON.stringify(ticket_atualizado));
}