import { EmailRoutes } from "../email/email.routes.js";

export const registerRoutes = async (fastify, opts) => {
	fastify.register(EmailRoutes, { prefix: "/emails" });
};
