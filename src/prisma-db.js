import { PrismaClient } from '@prisma/client'
import {useFlightStream} from "next/dist/server/app-render/use-flight-response";
const prisma = new PrismaClient()

const findUser = async () =>{
    const user = await prisma.user.findMany()
    console.log(user)
    if (user === 0){
        await prisma.user.create({
            data:{
                name:"Anmol",
                email:"anmolscientific@yahoo.com",
                age:20
            }
        })
    }
}
