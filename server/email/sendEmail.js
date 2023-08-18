const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp-relay.brevo.com",
  port: 587,
  secure: true,
  auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: 'Mal.Wares.Business@gmail.com',
    pass: '3pvLwO7qtgaHMcUE'
  }
});

// async..await is not allowed in global scope, must use a wrapper
async function sendEmail(body, callback) {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: 'Mal.Wares.Business@gmail.com', // sender address
    to: "damienkrock@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });
  callback()
}

  console.log("Message sent: %s", info.messageId);


  module.exports = {
    Post: sendEmail
}
