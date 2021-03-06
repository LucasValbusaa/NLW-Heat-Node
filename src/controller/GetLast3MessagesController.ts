import { Request, Response } from "express";
import { GetLast3MessagesService } from "../services/GetLast3MessagesService";

export class GetLast3MessagesController {
   async handle(request: Request, response: Response){
      const service = new GetLast3MessagesService();

      try{
         const result = await service.execute();
         return response.status(200).json(result)
       }
       catch(err){
         return response.status(400).json({ errorCode: err})
       }
   
   }
}