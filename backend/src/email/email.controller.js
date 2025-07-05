import { ValidationError } from "yup";

import { paginationParams } from "../utils/helpers/pagination.js";
import { AppError } from "../utils/Errors/AppError.js";
import { EmailService } from "./email.service.js";
import { emailSchema } from "./email.schema.js";

/**
 * Controller to search emails with pagination and optional query string.
 *
 * @param {import('fastify').FastifyRequest} req - Fastify request object containing query parameters.
 * @param {import('fastify').FastifyReply} reply - Fastify reply object for sending the response.
 * @returns {Promise<void>} Sends a paginated list of emails as the response.
 *
 * @throws {AppError} If email search fails.
 */
export const searchEmails = async (req, reply) => {
	try {
		const { q } = req.query;
		const { page, perPage } = paginationParams(req.query);
		const data = await EmailService.search(q, page, perPage);
		return reply.send(data);
	} catch (error) {
		throw new AppError("Failed to search emais", { error });
	}
};

/**
 * Controller to validate and send (create) an email.
 *
 * @param {import('fastify').FastifyRequest} req - Fastify request object containing email payload in the body.
 * @param {import('fastify').FastifyReply} reply - Fastify reply object for sending the response.
 * @returns {Promise<void>} Sends the created email as the response with HTTP 201.
 *
 * @throws {ValidationError} If the email payload fails schema validation.
 * @throws {AppError} If sending the email fails.
 */
export const sendEmail = async (req, reply) => {
	try {
		const emailData = await emailSchema.validate(req.body, { abortEarly: false });
		const saved = await EmailService.send(emailData);
		return reply.code(201).send(saved);
	} catch (error) {
		if (error instanceof ValidationError) {
			return reply.code(400).send(error.errors);
		}
		throw new AppError("Failed to send emai", { error });
	}
};
