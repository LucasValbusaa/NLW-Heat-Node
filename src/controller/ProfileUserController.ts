import { Request, Response } from "express";
import { ProfileUserService } from "../services/ProfileUserService";


export class ProfileUserController {
   async handle(request: Request, response: Response){
      const { user_id } = request;
      const service = new ProfileUserService();

      try{
         const result = await service.execute(user_id);
         return response.status(200).json(result)
       }
       catch(err){
         return response.status(400).json({ errorCode: err})
       }
   
   }
}