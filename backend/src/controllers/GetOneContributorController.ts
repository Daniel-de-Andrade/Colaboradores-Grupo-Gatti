import { Request, Response } from "express";
import { GetOneContributorsService } from "../services/GetOneContributorsService";


export class GetOneContributorController {
    async handle(request: Request, response: Response) {
        const  { id } = request.params;
        const service = new GetOneContributorsService();

        const contributor = await service.execute({id});

        return response.json(contributor);
    }
}