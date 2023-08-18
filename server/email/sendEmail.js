const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: 'smtp-relay.brevo.com', // SMTP server (e.g., smtp.gmail.com for Gmail)
  port: 587, // Port for secure SMTP
  secure: false, // true for 465, false for other ports
  auth: {
    user: 'Mal.Wares.Business@gmail.com', // Your email address
    pass: '3pvLwO7qtgaHMcUE' // Your email password or app-specific password
  }
});

// async..await is not allowed in global scope, must use a wrapper
async function sendEmail(body, callback) {
  // send mail with defined transport object
  try{
  const info = await transporter.sendMail({
    from: 'Mal.Wares.Business@gmail.com', // sender address
    to: "damienkrock@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?" // plain text body
  });
  console.log("Message sent: %s", info.messageId);
}catch(error){console.log(error);}
  callback()
}



  module.exports = {
    Post: sendEmail
}
