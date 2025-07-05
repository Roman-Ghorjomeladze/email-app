import { searchEmails, sendEmail, deleteEmailById } from "./email.controller.js";

export const EmailRoutes = async (fastify, opts) => {
	fastify.get("/search", searchEmails);
	fastify.post("/", sendEmail);
	fastify.delete("/:id", deleteEmailById);
};
