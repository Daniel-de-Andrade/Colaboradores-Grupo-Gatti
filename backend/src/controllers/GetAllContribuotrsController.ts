import { Request, Response } from "express";
import { GetAllContributorsService } from "../services/GetAllContributorsService";


export class GetAllContribuotrsController {
    async handle(request: Request, response: Response) {
        const service = new GetAllContributorsService();

        const contributors = await service.execute();

        return response.json(contributors);
    }
}