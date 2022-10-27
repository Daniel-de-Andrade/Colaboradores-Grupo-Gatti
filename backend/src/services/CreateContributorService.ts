import { getRepository } from "typeorm";
import { Contributor } from "../entities/Contributor";
import { Departament } from "../entities/Departament";

type ContributorRequest = {
    first_name: string;
    last_name: string;
    email: string;
    ramal: number;
    admin: string;
    departament_id: string;
}

export class CreateContributorService {
    async execute ({first_name, last_name, email, ramal, admin, departament_id} : ContributorRequest) : Promise <Contributor | Error> {
        const repo = getRepository(Contributor);
        const repoDepartament = getRepository(Departament)

        if (!(await repoDepartament.findOne(departament_id))) {
            return new Error ("Departament does not exists")
        }

        const contributor = repo.create({first_name, last_name, email, ramal, admin, departament_id});

        await repo.save(contributor);
        return contributor;
    }
}