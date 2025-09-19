import fastify from "fastify";
import { knex } from "./database/knex";

const app = fastify()

interface Course {
  id: number,
  name: string,
}


app.get('/', () => {
  return "Hello Web II"
})

app.get('/courses', async (require, res) => {
  const courses = await knex("courses").select().orderBy("name")
  return res.status(201).send(courses)
})

app.post('/courses', async (req, res) => {
  const { name } = req.body as Course
  await knex("courses").insert({ name })
  return res.status(201).send({
    message: "Curso adicionado com sucesso."
  })
})

app.put('/courses/:id', async (req, res) => {
  const {id,name} = req.body as Course 
  await knex("courses").update({name}).where({id})

  return res.status(201).send({message: "Nome do curso atualizado com sucesso."})
})

app.delete('/courses/:id', async (req, res) => {
  const {id} = req.body
  await knex("courses").delete().where({id})

  return res.status(201).send({message: "Curso deletado com sucesso."})
})

app.listen({ port: 3333 }).then(() => {
  console.log("HTTP server running")
})

