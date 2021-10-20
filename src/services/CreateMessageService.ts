import { prismaClient } from "../prisma"
import { io } from "../app";

export class CreateMessageService {
   async execute(text: string, user_id: string){
    const message = await prismaClient.message.create({
       data:{
         text,
         user_id
       },
       include:{
          user:true
       }
    })

    console.log('chegou aqui')

    const infoWS = {
      text: message.text,
      user_id: message.user_id,
      createdAt: message.create_at,
      user: {
         name: message.user.name,
         avatar_url: message.user.avatar_url
      }
    }

    io.emit("new_message", infoWS)

    console.log('enviou o io', io)
    
    return message;
   }
}