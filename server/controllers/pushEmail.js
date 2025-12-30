const nodemailer = require("nodemailer");

const pushEmail = (country, city) => {
  const transporter = nodemailer.createTransport({
    service: process.env.SMTP_HOST,
    auth: {
      user: process.env.SMTP_AUTH_USER,
      pass: process.env.SMTP_AUTH_PASS,
    },
  });

  // Send an email using async/await
  (async () => {
    const info = await transporter.sendMail({
      from: process.env.SMTP_SENDER,
      to: process.env.SMTP_RECEIVER,
      subject: "New Visitor ✔",
      text: `New visitor to portfolio website from ${city}, ${country}`,
      html: `<b>New visitor to portfolio website from ${city}, ${country}</b>`,
    });
    console.log("Message sent:", info.messageId, city, country);
  })();
};

module.exports = pushEmail;
