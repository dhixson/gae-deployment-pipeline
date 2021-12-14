// fastify server with ping enpoint
import fastify from 'fastify';

const port = Number(process.env.PORT) || 8080

const server = fastify({
    logger: true,
});

server.get('/', (request, reply) => {
    reply.send({ hello: 'world' });
});

server.listen(port, function (err, address) {
    if (err) {
        console.error(err)
        process.exit(1)
    }
    console.log(`Server listening on ${address}`)
})