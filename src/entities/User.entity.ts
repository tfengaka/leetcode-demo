import { AuthProvider, Role } from '@/enum/common.enum';
import { Check, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { UserSubmission } from './UserSubmission.entity';

@Entity('users')
@Check(`"role" IN ('student', 'teacher', 'admin')`)
export default class User {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  display_name!: string;

  @Column({ type: 'varchar', length: 255, unique: true, nullable: false })
  email!: string;

  @Column({ type: 'varchar', length: 50, nullable: false })
  role!: Role;

  @Column({ type: 'varchar', length: 50, nullable: false })
  provider!: AuthProvider;

  @CreateDateColumn({ type: 'timestamp with time zone', default: () => 'CURRENT_TIMESTAMP' })
  created_at!: Date;

  @UpdateDateColumn({ type: 'timestamp with time zone', default: () => 'CURRENT_TIMESTAMP' })
  updated_at!: Date;

  @OneToMany(() => UserSubmission, (submission) => submission.user)
  submissions!: UserSubmission[];
}
