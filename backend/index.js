import fastifyHelmet from "@fastify/helmet";
import * as dotenv from "dotenv";
import cors from "@fastify/cors";
import Fastify from "fastify";

import { registerRoutes } from "./src/routes/index.js";

dotenv.config();

const PORT = Number(process.env.PORT);

/**
 * @type {import('fastify').FastifyInstance} Instance of Fastify
 */

const fastify = Fastify({
	logger: true,
});

fastify.register(cors, { origin: "*" });
fastify.register(fastifyHelmet);
fastify.register(registerRoutes);

fastify.listen({ port: PORT }, function (err, address) {
	if (err) {
		fastify.log.error(err);
		process.exit(1);
	}
});

const shutdown = async (signal) => {
	try {
		console.log(`\nReceived ${signal}. Closing server...`);
		await fastify.close();
		console.log("Server closed gracefully.");
		process.exit(0);
	} catch (err) {
		console.error("Error during shutdown:", err);
		process.exit(1);
	}
};

process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);
