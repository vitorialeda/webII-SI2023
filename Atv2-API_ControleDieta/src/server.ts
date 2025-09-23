import Fastify from "fastify";

const port = 3000;
const fastify = Fastify({
    logger: true
});

fastify.get('/', async (_, res) => {
    res.send({ hello: 'world' });
});


fastify.listen({ port }, (err, address) => {
    if (err) {
        fastify.log.error(err);
    }
    console.log("Server ruinning at " + address);
});