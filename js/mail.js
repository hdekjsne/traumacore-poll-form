import nodemailer from 'nodemailer';

const emailAdress = secrets.EMAIL_ADDRESS;
const password = secrets.PASSWORD;

export const transporter = nodemailer.createTransport("SMTP",
  {
    host: 'smtp.yandex.ru',
    port: 465,
    secure: true,
    auth: {
      user: emailAdress,
      pass: password,
    },
    tls: {
      rejectUnauthorized: true,
      minVersion: "TLSv1.2"
    },
  },
  {
    from: emailAdress,
    to: 'hdekjsne@gmail.com',
    subject: 'Результат опроса',
  }
);
