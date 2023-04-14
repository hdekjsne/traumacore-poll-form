import nodemailer from 'nodemailer';
import message from './form-parser.js';

const emailAdress = secrets.EMAIL_ADDRESS;
const password = secrets.PASSWORD;

const transporter = nodemailer.createTransport("SMTP",
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
  }
);

const mailOptions = {
  from: 'mamaeva.anastasiya@hexly.ru',
  to: 'hdekjsne@gmail.com',
  subject: 'Результат опроса',
};

transporter.sendmail({ ...mailOptions, text: message }, function(error) {
  if (error) {
    console.log(error);
  } else {
    console.log('success');
  }
});