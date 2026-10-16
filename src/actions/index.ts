import { ActionError, defineAction } from "astro:actions";
import { z } from "astro/zod";
import { Resend } from "resend";

const MIN_FILL_TIME_MS = 3000;

// Phrases typical of unsolicited sales pitches (lowercase).
const PROMO_PATTERNS = [
	"seo",
	"backlink",
	"guest post",
	"first page of google",
	"rank higher",
	"web traffic",
	"increase your traffic",
	"lead generation",
	"generate leads",
	"marketing services",
	"digital marketing",
	"our services",
	"our agency",
	"free quote",
	"free consultation",
	"affordable price",
	"special offer",
	"discount",
	"redesign your website",
	"app development services",
	"outsourc",
	"crypto",
	"investment opportunity",
	"unsubscribe",
	"opt out",
	"posicionamiento",
	"servicios de marketing",
	"presupuesto sin compromiso",
	"oferta especial",
];

const escapeHtml = (value: string) =>
	value
		.replaceAll("&", "&amp;")
		.replaceAll("<", "&lt;")
		.replaceAll(">", "&gt;")
		.replaceAll('"', "&quot;")
		.replaceAll("'", "&#39;");

const isPromotional = (text: string) => {
	const lower = text.toLowerCase();
	const promoHits = PROMO_PATTERNS.filter((p) =>
		new RegExp(`\\b${p}`).test(lower),
	).length;
	const links = lower.match(/https?:\/\/|www\./g)?.length ?? 0;
	return promoHits >= 2 || links >= 2 || (promoHits >= 1 && links >= 1);
};

export const server = {
	send: defineAction({
		accept: "form",
		input: z.object({
			name: z.string(),
			email: z.string().email(),
			message: z.string(),
			website: z.string().optional(),
			renderedAt: z.coerce.number().optional(),
		}),
		handler: async ({ name, email, message, website, renderedAt }) => {
			const filledTooFast =
				!renderedAt || Date.now() - renderedAt < MIN_FILL_TIME_MS;

			// Pretend it worked so bots and spammers don't adapt.
			if (website || filledTooFast || isPromotional(`${name} ${message}`)) {
				return { id: null };
			}

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
				replyTo: email,
				html: `<h3>${escapeHtml(name)} - ${escapeHtml(email)}</h3><p>${escapeHtml(message).replaceAll("\n", "<br>")}</p>`,
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
