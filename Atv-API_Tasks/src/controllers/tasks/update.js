export function update_tasks({ req, res, database }) {
    const id = req.url.split("/")[2];
    const alteracoes = req.body;
    const resultado = database.update("tasks", id, alteracoes)

    if (resultado === null) {
        return res.writeHead(400).end("Houve um problema ao tentar atualizar o ticket.")
    }

    return res.writeHead(201).end(JSON.stringify(resultado))
}