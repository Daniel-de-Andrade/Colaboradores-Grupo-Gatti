import {getRepository} from "typeorm";
import { Contributor } from "../entities/Contributor";

export class GetAllContributorsService {
    async execute() {
        const repo = getRepository(Contributor);

        const contributors = await repo.find({
            relations: ['departament'],
        });

        return contributors;
    }
}