import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('languages')
export default class Language {
  @PrimaryColumn('int')
  id!: number;

  @Column({ type: 'varchar', length: 255, nullable: false })
  name!: string;
}
