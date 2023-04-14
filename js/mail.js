import nodemailer from 'nodemailer';
import message from './form-parser';

const transporter = nodemailer.createTransport("SMTP",
  {
    host: 'smtp.yandex.ru',
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_ADDRESS,
      pass: process.env.PASSWORD,
    },
    tls:{
      secureProtocol: "TLSv1_method",
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
