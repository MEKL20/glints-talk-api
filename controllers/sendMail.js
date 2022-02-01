const nodemailer = require("nodemailer")

module.exports = {
    sendMail : (req, res) => {
        const { name, email, subject, message } = req.body
        const transporter = nodemailer.createTransport({
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
                
                    <link
                    href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
                    rel="stylesheet"
                    integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
                    crossorigin="anonymous"
                    />
                </head>
                <body>
                    <div class="container d-flex justify-content-center">
                    <div class="card bg-warning my-5 w-100" style="max-width: 600px">
                        <div class="card-body">
                        <h5 class="card-title mb-3">Glints Talk</h5>
                        <h6 class="card-subtitle mb-2">from : ${name}</h6>
                        <h6 class="card-subtitle mb-5">email : ${email}</h6>
                        <p class="card-text">
                            ${message}
                        </p>
                        </div>
                    </div>
                    </div>
                
                    <script
                    src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
                    integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
                    crossorigin="anonymous"
                    ></script>
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
