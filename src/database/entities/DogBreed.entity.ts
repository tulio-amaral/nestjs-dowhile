import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class DogBreed {
  @PrimaryGeneratedColumn('uuid')
  Id: string;

  @Column({ type: 'varchar', length: 300 })
  name: string;

  @Column({ type: 'varchar', length: 300 })
  PictureUrl: string;
}
