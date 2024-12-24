const nodemailer = require('nodemailer');
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'oo2377107@gmail.com',
        pass: 'cnee pzqq yafd wvha'
    }
});

var mailOptions = {
    from: 'oo2377107@gmail.com',
    to: 'omarskioui5@gmail.com',
    subject: 'test',
    text: 'hello'
};

transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});