import nodemailer from 'nodemailer'

export const sendEmail = async({email, emailType, userId}: any) => {
    try {
        // TODO: configure mail for use

        const transporter = nodemailer.createTransport({
            host: "smtp.ethereal.email",
            port: 587,
            secure: false, // true for port 465, false for other ports
            auth: {
              user: "maddison53@ethereal.email",
              pass: "jn7jnAPss4f63QBp6D",
            },
          });

          const mailOptions = {
            from: 'example@gmail.com',              // sender address
            to: email,                              // list of receivers
            subject: emailType== "VERIFY" ? "Verify email" : "Reset password", // Subject line
            html: "<b>Hello world?</b>", // html body
          }

        const response = await transporter.sendMail(mailOptions)

    } catch (error: any) {
        throw new Error(error.message)
    }
}