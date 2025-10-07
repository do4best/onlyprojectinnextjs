import User from "@/models/user.model";
import nodemailer from 'nodemailer'
import bcryptjs from "bcryptjs";
export const sendEmail = async ({email,emailType,userId}) => {
    try{

        const encrypt = await bcryptjs.hash(userId.toString() , 10);
        if (emailType === "verify") {
            await User.findByIdAndUpdate(userId, {verifyToken: encrypt, verifyExpires: Date.now() + 3600000})
        }else if (emailType === "forgotPassword") {
            await User.findByIdAndUpdate(userId, {verifyToken: encrypt, verifyExpires: Date.now() + 3600000})
        } else if (emailType === "resetPassword") {
            await User.findByIdAndUpdate(userId, {verifyToken: encrypt, verifyExpires: Date.now() + 3600000})
        }


        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: '',
                pass: ''
            }
        })
        const mailOptions={


                from: '"Maddison Foo Koch" <afzalshah319@gmail.email>',
                to: "anmolscientific@yahoo.com",
                subject: subject === undefined ? "Hello" : subject,
                text: "Hello world?", // plain‑text body
                html: "<b>Hello world?</b>", // HTML body

        }
      const mailResponse=  await transporter.sendMail(mailOptions)
        return mailResponse
    }catch (e) {
        console.log(e.message)
    }
}
