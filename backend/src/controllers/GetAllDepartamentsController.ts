import { Request, Response } from "express";
import { GetAllDepartamentsService } from "../services/GetAllDepartamentsService";


export class GetAllDepartamentsController {
    async handle(request: Request, response: Response) {
        const service = new GetAllDepartamentsService();

        const departaments = await service.execute();

        return response.json(departaments);
    }
}