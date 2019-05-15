'use strict';
module.exports = function(email) {
    // send an email
  email.sendEmail = function(cb) {
    email.app.models.Email.send({
      to: 'ollie32@ethereal.email',
      from: 'you@gmail.com',
      subject: 'my subject',
      text: 'my text',
      html: 'my <em>html</em>',
    }, function(err, mail) {
      console.log('email sent!');
      cb(err);
    });
  };
};
