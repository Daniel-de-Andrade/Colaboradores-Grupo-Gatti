import { Request, Response } from "express";
import { CreateContributorService } from "../services/CreateContributorService";


export class CreateContributorController {
    async handle(request: Request, response: Response) {
        const {first_name, last_name, email, ramal, admin, departament_id} = request.body;

        const service = new CreateContributorService();

        const result = await service.execute({first_name, last_name, email, ramal, admin, departament_id});

        if (result instanceof Error) {
            return response.status(400).json(result.message);
        }

        return response.json(result);
    }
}