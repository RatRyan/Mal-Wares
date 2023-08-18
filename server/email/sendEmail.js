const sendmail = require('sendmail')();

  sendEmail= (body, callback) => {
    sendmail({
        from: 'no-reply@Mal-Ware.com',
        to: 'damienkrock@gmail.com',
        subject: 'test sendmail',
        html: 'Mail of test sendmail ',
      }, function(err, reply) {
        console.log(err && err.stack);
        console.dir(reply);
      });
      callback()
    }

  module.exports = {
    Post: sendEmail
}
