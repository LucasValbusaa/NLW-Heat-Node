import { prismaClient } from "../prisma";

export class GetLast3MessagesService{
   async execute(){
      const message = await prismaClient.message.findMany({
         take: 3,
         orderBy:{
            create_at: "desc"
         },
         include: {
            user: true
         }
      });

      return message;
   }
}