var nodemailer = require('nodemailer');
var transport = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
        user: 'kandwalabhyudaya@gmail.com',
        pass: 'Kandwal@1813#'
    }

});
var mailOptions = {
    from: 'kandwalabhyudaya@gmail.com',
    to: 'abhyudayakandwal001@gmail.com',
    subject: 'test node mail',
    text: 'Hello broo'
}
transport.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.warn(error);
    } else {
        console.log("Email has been sent", info.response);
    }
})