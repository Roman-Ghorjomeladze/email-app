import { z } from "zod";

import {
	EmailBCCValidationMessage,
	EmailCCValidationMessage,
	SubjectValidationMessage,
	BodyValidationMessage,
	ToIsRequired,
	InvalidEmail,
} from "@/utils/constants/validationTexts";

export const createEmailSchema = z.object({
	to: z.string().min(1, ToIsRequired).email(InvalidEmail),
	cc: z
		.string()
		.optional()
		.refine(
			(val) => {
				if (!val) return true;
				const emails = val.split(" ").filter((email) => email.trim() !== "");
				if (emails.length === 0) return true;

				const allValid = emails.every((email) => z.string().email().safeParse(email).success);
				return allValid;
			},
			{
				message: EmailCCValidationMessage,
			}
		),
	bcc: z
		.string()
		.optional()
		.refine(
			(val) => {
				if (!val) return true;
				const emails = val.split(" ").filter((email) => email.trim() !== "");
				if (emails.length === 0) return true;

				const allValid = emails.every((email) => z.string().email().safeParse(email).success);
				return allValid;
			},
			{
				message: EmailBCCValidationMessage,
			}
		),
	subject: z.string().min(1, SubjectValidationMessage),
	body: z.string().min(1, BodyValidationMessage),
});
