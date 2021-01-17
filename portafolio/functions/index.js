const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
const cors = require('cors')({origin: true});

admin.initializeApp();

/**
* Here we're using Gmail to send 
*/
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'enmanuelfeliz106@gmail.com',
        pass: 'elespinalnumber1'
    }
});

exports.sendMail = functions.https.onRequest((req, res) => {
    cors(req, res, () => {
      
        // getting dest email by query string
        // const dest = req.query.dest;

        const mailOptions = {
            from: 'Enmanuel Feliz <enmanuelfeliz106@gmail.com>', // Something like: Jane Doe <janedoe@gmail.com>
            to: 'enmanuelfeliz106@gmail.com',
            subject: 'Te han mandado un mensaje a tu portafolio', // email subject
            html: `<p></p>`// email content in HTML
        };
  
        // returning result
        return transporter.sendMail(mailOptions, (erro, info) => {
            if(erro){
                return res.send(erro.toString());
            }
            return res.send('Sended');
        });
    });    
});
