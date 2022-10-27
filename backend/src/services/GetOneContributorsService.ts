import {getRepository} from "typeorm";
import { Contributor } from "../entities/Contributor";

type ContributorGetOneRequest = {
    id: string;
    // first_name: string;
    // last_name: string;
    // email: string;
    // admin: boolean;
    // departament_id: string;
}

export class GetOneContributorsService {
    async execute({id}:ContributorGetOneRequest) {
        const repo = getRepository(Contributor);

        const contributor = await repo.findOne(id);

        return contributor;
    }
}