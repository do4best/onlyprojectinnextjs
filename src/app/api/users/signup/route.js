import {dbConfig} from "@/dbConfig/dbConfig";
import User from "@/models/user.model";
import bscryptjs from "bcryptjs";
import {NextResponse,NextRequest} from "next/server";
import {sendEmail} from "@/helpers/mailer";
dbConfig()
export async function POST(req,res){
try{
    const requestBody=await req.json()
    const {username,email,password}=requestBody;
    const user=await User.findOne({email})
    if(user){
        return NextResponse.json({message:"User already exists"},{status:400})
    }

    const salt=await bscryptjs.genSalt(10);
    const hashPassword=await bscryptjs.hash(password,salt);
new User({
    username,
    email,
    password: hashPassword
})
    const newUser=await user.save()
    console.log(newUser)
    //sendEmail(email,"Welcome to our app","Welcome to our app")
    await sendEmail({email,message:"Welcome to our app"})
}catch (e) {}

}