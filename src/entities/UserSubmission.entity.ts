import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import Problem from './Problem.entity';
import User from './User.entity';

@Entity('user_submissions')
export class UserSubmission {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ type: 'int', nullable: false })
  submission_id!: number;

  @Column({ type: 'text', nullable: true })
  raw_submission!: string;

  @CreateDateColumn({ type: 'timestamp with time zone', default: () => 'CURRENT_TIMESTAMP' })
  submitted_at!: Date;

  @ManyToOne(() => User, (user) => user.submissions, { onDelete: 'CASCADE' })
  user!: User;

  @ManyToOne(() => Problem, (problem) => problem.submissions, { onDelete: 'CASCADE' })
  problem!: Problem;

  @Column({ type: 'uuid', nullable: false })
  user_id!: string;

  @Column({ type: 'uuid', nullable: false })
  problem_id!: string;
}
