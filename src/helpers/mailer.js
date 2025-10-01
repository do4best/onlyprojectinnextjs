import nodemailer from 'nodemailer'
export const sendEmail = async (email, subject, message) => {
    try{
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
