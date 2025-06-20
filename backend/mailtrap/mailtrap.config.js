import {MailtrapClient} from "mailtrap";
import dotenv from "dotenv";

dotenv.config();

const TOKEN = process.env.MAILTRAP_TOKEN;


export const mailTrapClient = new MailtrapClient({
    endpoint: process.env.MAILTRAP_ENDPOINT,
    token: TOKEN,
});

export const sender = {
  email: "hello@demomailtrap.co",
  name: "From Aakarsh",
};

