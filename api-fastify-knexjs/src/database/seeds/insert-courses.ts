import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    // await knex("courses").del();

    // Inserts seed entries
    await knex("courses").insert([
        { name: "Go" },
        { name: "Python" },
        { name: "Java" }
    ]);
};
