import './chunks/virtual_Dg4C-qTe.mjs';
import * as z from 'zod';
import { Resend } from 'resend';
import { d as defineAction } from './chunks/server_qCbGBXao.mjs';
import { A as ActionError } from './chunks/astro-designed-error-pages_BgioZicv.mjs';

const resendApiKey = "re_GWybawhq_6hJG3Ahyjbj7e3TmXekZGj9z";
const resend = new Resend(resendApiKey);
console.log(resend);
const server = {
  send: defineAction({
    accept: "form",
    input: z.object({
      name: z.string(),
      email: z.string().email(),
      message: z.string()
    }),
    handler: async ({ name, email, message }) => {
      const { data, error } = await resend.emails.send({
        from: `Portfolio Contact <contact@ricardoguzdev.com>`,
        to: ["contact@ricardoguzdev.com"],
        subject: `Portfolio Email From ${name}`,
        html: `<h3>${name} - ${email}</h3><p>${message}</p>`
      });
      if (error) {
        console.log(error);
        throw new ActionError({
          code: "BAD_REQUEST",
          message: error.message
        });
      }
      return data;
    }
  })
};

export { server };
