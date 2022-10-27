import { Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryColumn, ManyToOne, JoinColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { Departament } from "./Departament";
// import { Exclude } from "class-transformer";

@Entity("contributors")
export class Contributor {
    @PrimaryColumn()
    id: string;

    @Column()
    first_name: string;

    @Column()
    last_name: string;

    @Column()
    email: string;

    @Column()
    ramal: number;

    @Column()
     admin: string;

    // @Exclude()
    // @Column()
    // password: string;

    @Column()
    departament_id: string;

    @ManyToOne(()=>Departament)
    @JoinColumn({name: "departament_id"})
    departament: Departament;

    @CreateDateColumn()
    created_at: Date;
    
    @UpdateDateColumn()
    updated_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}