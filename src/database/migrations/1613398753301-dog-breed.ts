import { MigrationInterface, QueryRunner } from 'typeorm';

export class dogBreed1613398753301 implements MigrationInterface {
  name = 'dogBreed1613398753301';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "temporary_dog_breed" ("Id" varchar PRIMARY KEY NOT NULL, "name" varchar(300) NOT NULL, "PictureUrl" varchar(500) NOT NULL)`,
    );
    await queryRunner.query(
      `INSERT INTO "temporary_dog_breed"("Id", "name", "PictureUrl") SELECT "Id", "Name", "PictureUrl" FROM "dog_breed"`,
    );
    await queryRunner.query(`DROP TABLE "dog_breed"`);
    await queryRunner.query(
      `ALTER TABLE "temporary_dog_breed" RENAME TO "dog_breed"`,
    );
    await queryRunner.query(
      `CREATE TABLE "temporary_dog_breed" ("Id" varchar PRIMARY KEY NOT NULL, "name" varchar(300) NOT NULL, "PictureUrl" varchar(300) NOT NULL)`,
    );
    await queryRunner.query(
      `INSERT INTO "temporary_dog_breed"("Id", "name", "PictureUrl") SELECT "Id", "name", "PictureUrl" FROM "dog_breed"`,
    );
    await queryRunner.query(`DROP TABLE "dog_breed"`);
    await queryRunner.query(
      `ALTER TABLE "temporary_dog_breed" RENAME TO "dog_breed"`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "dog_breed" RENAME TO "temporary_dog_breed"`,
    );
    await queryRunner.query(
      `CREATE TABLE "dog_breed" ("Id" varchar PRIMARY KEY NOT NULL, "name" varchar(300) NOT NULL, "PictureUrl" varchar(500) NOT NULL)`,
    );
    await queryRunner.query(
      `INSERT INTO "dog_breed"("Id", "name", "PictureUrl") SELECT "Id", "name", "PictureUrl" FROM "temporary_dog_breed"`,
    );
    await queryRunner.query(`DROP TABLE "temporary_dog_breed"`);
    await queryRunner.query(
      `ALTER TABLE "dog_breed" RENAME TO "temporary_dog_breed"`,
    );
    await queryRunner.query(
      `CREATE TABLE "dog_breed" ("Id" varchar PRIMARY KEY NOT NULL, "Name" varchar(300) NOT NULL, "PictureUrl" varchar(500) NOT NULL)`,
    );
    await queryRunner.query(
      `INSERT INTO "dog_breed"("Id", "Name", "PictureUrl") SELECT "Id", "name", "PictureUrl" FROM "temporary_dog_breed"`,
    );
    await queryRunner.query(`DROP TABLE "temporary_dog_breed"`);
  }
}
