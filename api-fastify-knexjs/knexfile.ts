export default {
    client: "better-sqlite3",
    connection: {
        filename: "./src/database/database.db"
    },
    useNullAsDefault: true,
    migrations: {
        extensions: "ts",
        directory: "./src/database/migrations"
    },
    seeds: {
        extentions: "ts",
        directory: "./src/database/seeds"
    }
}