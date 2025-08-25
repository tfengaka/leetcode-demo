import { ProblemDifficulty } from '@/enum/problem.enum';
import { Check, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import TestCase from './TestCase.entity';
import { UserSubmission } from './UserSubmission.entity';

@Entity('problems')
@Check(`"difficulty" IN ('easy', 'medium', 'hard')`)
export default class Problem {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  title!: string;

  @Column({ type: 'text', nullable: false })
  description!: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  code!: string;

  @Column({ type: 'varchar', length: 50, nullable: false })
  difficulty!: ProblemDifficulty;

  @CreateDateColumn({ type: 'time without time zone', default: () => 'CURRENT_TIMESTAMP' })
  created_at!: Date;

  @UpdateDateColumn({ type: 'time without time zone', default: () => 'CURRENT_TIMESTAMP' })
  updated_at!: Date;

  @OneToMany(() => TestCase, (testCase) => testCase.problem)
  test_cases!: TestCase[];

  @OneToMany(() => UserSubmission, (submission) => submission.problem)
  submissions!: UserSubmission[];
}
