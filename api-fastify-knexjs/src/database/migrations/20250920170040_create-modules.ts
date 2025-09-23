import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("modules", (table) => {
    table.increments("id").primary();
    table.integer("course_id").notNullable().references("id").inTable("courses")
    table.string("title");
    table.string("description");
  });
}

export async function down(knex: Knex): Promise<void> {
  knex.schema.dropTable("modules");
}
