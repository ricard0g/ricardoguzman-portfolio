import { ActionError, defineAction } from "astro:actions";
import { z } from "astro/zod";
import { Resend } from "resend";

export const server = {
	send: defineAction({
		accept: "form",
		input: z.object({
			name: z.string(),
			email: z.string().email(),
			message: z.string(),
		}),
		handler: async ({ name, email, message }) => {
			const resendApiKey =
				process.env.RESEND_API_KEY ?? import.meta.env.RESEND_API_KEY;

			if (!resendApiKey) {
				throw new ActionError({
					code: "BAD_REQUEST",
					message: "RESEND_API_KEY is not configured.",
				});
			}

			const resend = new Resend(resendApiKey);

			const { data, error } = await resend.emails.send({
				from: `Portfolio Contact <contact@ricardoguzdev.com>`,
				to: ["contact@ricardoguzdev.com"],
				subject: `Portfolio Email From ${name}`,
				html: `<h3>${name} - ${email}</h3><p>${message}</p>`,
			});

			if (error) {
				console.log(error);
				throw new ActionError({
					code: "BAD_REQUEST",
					message: error.message,
				});
			}

			return data;
		},
	}),
};
