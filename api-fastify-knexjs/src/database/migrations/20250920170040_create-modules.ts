import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("modules", (table) => {
    table.increments("id").primary();
    table.string("title");
    table.string("description");
  });
}

export async function down(knex: Knex): Promise<void> {
  knex.schema.dropTable("modules");
}
