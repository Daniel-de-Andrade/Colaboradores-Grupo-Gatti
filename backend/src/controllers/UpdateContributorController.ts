import { Response, Request } from "express";
import { UpdateContributorService } from "../services/UpdateContributorService";

export class UpdateContributorController {
    async handle(request: Request, response: Response) {
        const  { id } = request.params;
        const { first_name, last_name, email, ramal, admin, departament_id } = request.body;

        const service = new UpdateContributorService();

        const result = await service.execute({id, first_name, last_name, email, ramal, admin, departament_id});

        if ( result instanceof Error) {
            return response.status(400).json(result.message);
        }

        return response.json(result);
    }
}