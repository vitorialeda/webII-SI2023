import fs from "node:fs/promises";

const DATABASE_PATH = new URL("db.json", import.meta.url);

export class Database {
    #database = {};

    constructor() {
        fs.readFile(DATABASE_PATH, "utf8")
            .then((data) => {
                this.#database = JSON.parse(data);
            })
            .catch(() => {
                this.#persist();
            });
    };

    #persist() {
        fs.writeFile(DATABASE_PATH, JSON.stringify(this.#database));
    };

    #getIndexByID(table, id) {
        const index = this.#database[table].findIndex(element => {
            return element.id === id
        });

        return index;
    };

    insert(table, data) {
        if (Array.isArray(this.#database[table])) {
            this.#database[table].push(data);
        } else {
            this.#database[table] = [data];
        }
        this.#persist();
    };

    select(table, params) {
        const data = this.#database[table] ?? [];

        // console.log(params)
        if (params) {
            const keys = Object.keys(params);

            const filtered_data = data.filter(item => keys.every(key => item[key] === params[key]));

            return filtered_data
        };

        return data;
    }

    update(table, id, alteracoes) {
        const item = this.select(table, "id", id)[0];
        const index = this.#getIndexByID(table, item.id);

        if (index === -1 || 'name' in alteracoes) return null;

        const novo_item = { ...item, ...alteracoes, update_at: new Date() };

        this.#database[table][index] = novo_item;
        this.#persist();

        return this.#database[table][index];
    }

    delete(table, id) {
        const index = this.#getIndexByID(table, id);
        this.#database[table].splice(index, 1);
        this.#persist();
    }
}

