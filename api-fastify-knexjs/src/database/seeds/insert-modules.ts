import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  // await knex("table_name").del();

  // Inserts seed entries
  await knex("modules").insert([
    { title: "modulo1", description: "description 1" },
  ]);
}
