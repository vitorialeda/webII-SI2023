import fastify from "fastify";
import { knex } from "./database/knex";

const app = fastify();

interface Course {
  id: number;
  name: string;
}

interface Modules {
  id: number;
  title: string;
  course_id: number;
  description: string;
}

app.get("/", () => {
  return "Hello Web II";
});

app.get("/courses", async (_, res) => {
  const courses = await knex("courses").select().orderBy("name");
  return res.status(201).send(courses);
});

app.post("/courses", async (req, res) => {
  const { name } = req.body as Course;
  await knex("courses").insert({ name });
  return res.status(201).send({
    message: "Curso adicionado com sucesso.",
  });
});

app.put("/courses/:id", async (req, res) => {
  const { id, name } = req.body as Course;
  await knex("courses").update({ name }).where({ id });

  return res
    .status(201)
    .send({ message: "Nome do curso atualizado com sucesso." });
});

app.delete("/courses/:id", async (req, res) => {
  const { id } = req.body as Course;
  await knex("courses").delete().where({ id });

  return res.status(201).send({ message: "Curso deletado com sucesso." });
});

app.get("/modules", async (_, res) => {
  const modules = await knex("modules").select().orderBy("title");
  return res.status(201).send(modules);
});

app.post("/modules", async (req, res) => {
  const { title, course_id, description } = req.body as Modules;
  await knex("modules").insert({ title, course_id, description });
  return res.status(201).send({
    message: "Módulo adicionado com sucesso.",
  });
});

app.put("/modules/:id", async (req, res) => {
  const { id, title, course_id, description } = req.body as Modules;
  await knex("modules").update({ title, course_id, description }).where({ id });

  return res
    .status(201)
    .send({ message: "Módulo atualizado com sucesso." });
});

app.delete("/modules/:id", async (req, res) => {
  const { id } = req.body as Modules;
  await knex("modules").delete().where({ id });

  return res.status(201).send({ message: "Curso deletado com sucesso." });
});

app.listen({ port: 3333 }).then(() => {
  console.log("HTTP server running");
});
