export class AppError extends Error {
	constructor(message, additionalParams = {}) {
		super(message);
		const { statusCode = 500, error = null } = additionalParams;
		this.name = this.constructor.name;

		this.statusCode = statusCode;
		this.isOperational = true;

		Error.captureStackTrace(this, this.constructor);
		if (error) {
			console.error(error);
		}
	}
}
