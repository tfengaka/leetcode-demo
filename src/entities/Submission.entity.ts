import { Column, Entity, OneToOne, PrimaryColumn } from 'typeorm';
import Language from './Language.entity';

@Entity('submissions')
export default class Submission {
  @PrimaryColumn('int')
  id!: number;

  @OneToOne(() => Language, (language) => language.id)
  language!: Language;

  @Column({ type: 'int', nullable: true })
  language_id!: Number;

  @Column({ type: 'int' })
  status_id!: Number;

  @Column({ type: 'int', nullable: true })
  time!: Number;

  @Column({ type: 'int', nullable: true })
  memory!: Number;

  @Column({ type: 'text', nullable: false })
  token!: string;
}
