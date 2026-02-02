import { ActionError, defineAction } from "astro:actions";
import { z } from "astro/zod";
import { Resend } from "resend";

const resend = new Resend(import.meta.env.RESEND_API_KEY);

console.log(resend);

export const server = {
	send: defineAction({
		accept: "form",
		input: z.object({
			name: z.string(),
			email: z.string().email(),
			message: z.string(),
		}),
		handler: async ({ name, email, message }) => {
			console.log(name);
			console.log(email);
			console.log(message);

			const { data, error } = await resend.emails.send({
				from: `${name} <${email}>`,
				to: ["contact@ricardoguzdev.com"],
				subject: `Portfolio Email From ${name} - ${email}`,
				html: `<h1>${name} - ${email}</h1><p>${message}</p>`,
			});

			if (error) {
				throw new ActionError({
					code: "BAD_REQUEST",
					message: error.message,
				});
			}

			console.log(data);
			return data;
		},
	}),
};
