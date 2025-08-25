import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import Problem from './Problem.entity';

@Entity('test_cases')
export default class TestCase {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ type: 'text', nullable: false })
  input!: string;

  @Column({ type: 'text', nullable: false })
  expected_output!: string;

  @Column({ type: 'boolean', default: false, nullable: false })
  is_sample!: boolean;

  @ManyToOne(() => Problem, (problem) => problem.test_cases, { onDelete: 'CASCADE' })
  problem!: Problem;

  @Column({ type: 'uuid', nullable: false })
  problem_id!: string;
}
