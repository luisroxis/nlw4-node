import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateSurveysUsers1614099866581 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(new Table({
        name: "surveys_users",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "surveyId",
            type: "uuid",
          },
          {
            name: "userId",
            type: "uuid",
          },
          {
            name: "value",
            type: "number",
            isNullable: true
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "updated_at",
            type: "timestamp",
            default: "now()",
          },
        ],
          foreignKeys: [
            {
              name: "FkUserId",
              referencedTableName: "users",
              referencedColumnNames: ["id"],
              columnNames: ["userId"],
              onDelete: "CASCADE",
              onUpdate: "CASCADE"
            },
            {
              name: "FkSurveyId",
              referencedTableName: "surveys",
              referencedColumnNames: ["id"],
              columnNames: ["surveyId"],
              onDelete: "CASCADE",
              onUpdate: "CASCADE"
            },
          ],
        }
      ))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable("surveys_users")
    }

}
