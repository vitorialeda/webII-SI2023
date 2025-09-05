export function get({ req, res, database }) {
    const data = database.select("tickets", req.body);
    res.writeHead(201).end(JSON.stringify(data));
}