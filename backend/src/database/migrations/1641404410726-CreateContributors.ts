import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateContributors1641404410726 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "contributors",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "first_name",
                        type: "varchar"
                    },
                    {
                        name: "last_name",
                        type: "varchar"
                    },
                    {
                        name: "email",
                        type: "varchar",
                        isUnique: true
                    },
                    {
                        name: "ramal",
                        type: "integer",
                    },
                    {
                        name: "admin",
                        type: "boolean",
                        default: false
                    },
                    {
                        name: "departament_id",
                        type: "uuid"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ],
                foreignKeys:[
                    {
                        name: "fk_contributors_departaments",
                        columnNames: ["departament_id"],
                        referencedTableName: "departaments",
                        referencedColumnNames: ["id"]
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("contributors");
    }

}
