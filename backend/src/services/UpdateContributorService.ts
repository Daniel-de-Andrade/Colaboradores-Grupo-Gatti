import { getRepository } from "typeorm";
import { Contributor } from "../entities/Contributor";

type ContributorUpdateRequest = {
    id: string;
    first_name: string;
    last_name: string;
    email: string;
    ramal: number;
    admin: string;
    departament_id: string;
}

export class UpdateContributorService {
    async execute({id, first_name, last_name, email, ramal, admin, departament_id}:ContributorUpdateRequest) {
        const repo = getRepository(Contributor);

        const contributor = await repo.findOne(id);

        if (!contributor) {
            return new Error("Contributor does not exists");
        }

        contributor.first_name = first_name ? first_name : contributor.first_name;
        contributor.last_name = last_name ? last_name : contributor.last_name;
        contributor.email = email ? email : contributor.email;
        contributor.ramal = ramal ? ramal : contributor.ramal;
        contributor.admin = admin ? admin : contributor.admin;
        contributor.departament_id = departament_id ? departament_id : contributor.departament_id;

       await repo.save(contributor);

       return contributor;

    }
}