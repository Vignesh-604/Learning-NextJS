import User from '@/model/userModel';
import nodemailer from 'nodemailer'
import bcrypt from 'bcryptjs';

// connect() not required because function is being called from a file that already called connect() (ex. signup)
const sendEmail = async ({ email, emailType, userId }: any) => {
	try {
		const hashedToken = bcrypt.hash(userId.toString(), 10)			// creating a token for verification

		if (emailType === "VERIFY") {
			await User.findByIdAndUpdate(userId, {
				verifyToken: hashedToken, verifyTokenExpiry: Date.now() + 3600000		// valid for 1 hour from now
			})
		}
		else if (emailType === "RESET") {
			await User.findByIdAndUpdate(userId, {
				forgotPasswordToken: hashedToken, forgotPasswordTokenExpiry: Date.now() + 3600000
			})
		}

		// Copied from mailtrap.io node integration
		var transport = nodemailer.createTransport({
			host: process.env.HOST || "smtp.mailtrap.io",		// TS will throw error because type is not defined
			port: Number(process.env.PORT) || 2525,				// Declare each as variable with type or create an interface or give fallbacks
			auth: {
				user: process.env.USER || "",   // fallback to empty string to avoid undefined
				pass: process.env.PASS || ""
			}
		});

		const mailOptions = {
			from: 'example@gmail.com',              // sender address
			to: email,                              // list of receivers
			subject: emailType == "VERIFY" ? "Verify email" : "Reset password", // Subject line
			html: `<b>Click <a href='${process.env.DOMAIN}/${emailType == "VERIFY" ? "verifyemail" : "resetpassword"}?token=${hashedToken}'>here</a>
			to ${emailType == "VERIFY" ? "Verify email" : "Reset password"} 
			or copy paste the link in your browser <br/>
			${process.env.DOMAIN}/${emailType == "VERIFY" ? "verifyemail" : "resetpassword"}?token=${hashedToken}</b>`
		}

		const response = await transport.sendMail(mailOptions)

	} catch (error: any) {
		throw new Error(error.message)
	}
}

export default sendEmail