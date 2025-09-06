import fs from "node:fs/promises"

const DATABASSE_PATH = new URL("db.json", import.meta.url)

export class Database {
    #database = {};

    constructor() {
        fs.readFile(DATABASSE_PATH, "utf8")
            .then((data) => {
                this.#database = JSON.parse(data);
            })
            .catch(() => {
                this.#persist();
            });
    };

    #persist() {
        fs.writeFile(DATABASSE_PATH, JSON.stringify(this.#database));
    };

    insert(table, data) {
        if (Array.isArray(this.#database[table])) {
            this.#database[table].push(data);
        } else {
            this.#database[table] = [data];
        }
        this.#persist();
    };

    select(table, key, param) {
        const data = this.#database[table] ?? []

        if (param) {
            return data.filter(ticket => ticket[key] === param)
        }

        return data
    }

    update(table, key, param, alteracoes) {
        const ticket = this.select(table, key, param)[0];
        const index = this.#database[table].findIndex(element => { return element.id === ticket.id });

        if (index === -1) {
            return 1;
        };
        if ('name' in alteracoes) {
            return 1;
        };

        const novo_ticket = { ...ticket, ...alteracoes, update_at: new Date() };

        this.#database[table][index] = novo_ticket;
        this.#persist();

        return this.#database[table][index];
    }

}