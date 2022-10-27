import {Departament} from "../entities/Departament";
import {getRepository} from "typeorm";


export class GetAllDepartamentsService {
    async execute() {
        const repo = getRepository(Departament);

        const departaments = await repo.find();

        return departaments;
    }
}