import * as yup from "yup";

const hasScriptTag = /<script[\s\S]*?>[\s\S]*?<\/script>/gi;
const hasHtmlTags = /<\/?[a-z][\s\S]*>/i;

const noScriptErrorText = "No script and HTML tag is allowed";

const emailList = (field) =>
	yup
		.string()
		.optional()
		.test("valid-emails", `${field} Must be a space-separated list of valid emails`, function (value) {
			if (!value) return true;
			const emails = value.trim().split(/\s+/);
			return emails.every((email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email));
		})
		.test("no-script", noScriptErrorText, (val) => {
			if (!val) return true;
			return !hasScriptTag.test(val) && !hasHtmlTags.test(val);
		});

export const emailSchema = yup.object({
	to: yup
		.string()
		.email()
		.test("no-script", noScriptErrorText, (val) => {
			if (!val) return true;
			return !hasScriptTag.test(val) && !hasHtmlTags.test(val);
		}),
	cc: emailList("CC"),
	bcc: emailList("BCC"),
	subject: yup
		.string()
		.max(255)
		.optional()
		.test("no-script", noScriptErrorText, (val) => {
			if (!val) return true;
			return !hasScriptTag.test(val) && !hasHtmlTags.test(val);
		}),
	body: yup
		.string()
		.required()
		.max(1500)
		.test("no-script", noScriptErrorText, (val) => {
			if (!val) return true;
			return !hasScriptTag.test(val) && !hasHtmlTags.test(val);
		}),
});
