import { getRepository } from "typeorm";
import { Departament } from "../entities/Departament";

type DepartamentRequest = {
    name: string;
    description: string;
}

export class CreateDepartamentService {
    async execute ({name, description} : DepartamentRequest) : Promise <Departament | Error> {
        const repo = getRepository(Departament);

        // SELECT * FROM departaments WHERE name = "name" LIMIT 1
        if (await repo.findOne({name})) {
            return new Error ("Departament already exists")
        }

        const departament = repo.create({
            name,
            description
        })

        await repo.save(departament);
        return departament;
    }
}