import { Response, Request } from "express";
import { UpdateDepartamentService } from "../services/UpdateDepartamentService";


export class UpdateDepartamentController {
    async handle(request: Request, response: Response) {
        const {id} = request.params;
        const { name, description } = request.body;

        const service = new UpdateDepartamentService();

        const result = await service.execute({id, name, description});

        if ( result instanceof Error) {
            return response.status(400).json(result.message);
        }

        return response.json(result);
    }
}