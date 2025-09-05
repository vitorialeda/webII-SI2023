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

    select(table) {
        const data = this.#database[table] ?? []
        return data
    }

}