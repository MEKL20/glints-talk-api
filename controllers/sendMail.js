const nodemailer = require("nodemailer")

module.exports = {
    sendMail : (req, res) => {
        const { name, email, subject, message } = req.body
        const transporter = nodemailer.createTransport({
            // service: "gmail",
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASS_EMAIL
            }
        })
        
        const mailOptions = {
            from: '"YOU HAVE NEW TALK PAPERLINE" GLINTS-TALK@gmail.com',
            to: process.env.RECEIVE_EMAIL,
            subject: subject,
            text: "",
            html: `<!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8" />
                    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <title>Document</title>
                
                    <style>
                    body {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                    }
                    .header {
                        text-align: center;
                    }
                
                    .body-message {
                        background-color: salmon;
                        display: flex;
                        justify-content: center;
                        width: fit-content;
                        padding: 24px 56px;
                    }
                    </style>
                </head>
                <body>
                    <div class="header">
                    <h1>Hello World!</h1>
                    </div>
                
                    <div class="body-message">
                    <h2>
                        Welcome
                        <br>
                        to Glints Talk!
                    </h2>
                    <br>
                    <h4>
                    Nama : ${name} <br>
                    Email : ${email} <br>
                    Message : ${message} <br>
                    </h4>
                    </div>
                </body>
                </html>`
        }
        
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                res.status(400).json(error)
            } else {
                res.status(200).json(info.response);
            }
        })

    }
}
