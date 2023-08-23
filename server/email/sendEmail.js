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
async function sendEmail(recipient, subject, message) {
  // send mail with defined transport object
  try{
  const info = await transporter.sendMail({
    from: 'Mal.Wares.Business@gmail.com', // sender address
    to: body['Email'], // list of receivers
    subject: body['Subject'], // Subject line
    text: body['Message'] // plain text body
  });
  console.log("Message sent: %s", info.messageId);
}catch(error){console.log(error);}
}

function sendAccountMadeEmail(recipient) {
  Subject = "Welcome to Mal Wares!"
  Message = "Thank you for creating an account with Mal Wares! We hope you enjoy our products."
  sendEmail(recipient, Subject, Message);
}

function sendOrderMadeEmail(recipient) {
  Subject = "Your order has been placed!"
  Message = "Thank you for your order! We will send you an email when your order has been shipped."
  sendEmail(recipient, Subject, Message);
}


  module.exports = {
    sendAccountMadeEmail: sendAccountMadeEmail,
    sendOrderMadeEmail: sendOrderMadeEmail
}
