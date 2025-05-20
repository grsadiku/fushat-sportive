import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Role } from './role.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'ID',
  })
  ID: number;

  @Column({
    nullable: false,
    default: '',
  })
  FirstName: string;

  @Column({
    nullable: false,
    default: '',
  })
  LastName: string;

  @Column({
    name: 'Email',
    nullable: false,
    default: '',
  })
  Email: string;

  @Column({
    nullable: false,
    default: '',
  })
  Password: string;

  @Column({
    nullable: false,
    default: '',
  })
  Salt: string;

  @Column({
    nullable: false,
    name: 'IDRole',
  })
  IDRole: number;

  @ManyToOne(() => Role)
  @JoinColumn({ name: 'IDRole', referencedColumnName: 'ID' })
  role: Role;

  @Column({
    nullable: true,
    name: 'IDEntryUser',
  })
  IDEntryUser: number;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'IDEntryUser', referencedColumnName: 'ID' })
  entryUser: User;

  @Column({
    nullable: false,
    default: () => 'CURRENT_TIMESTAMP',
  })
  EntryDate: Date;

  @Column({})
  Birthdate: Date;

  @Column({
    nullable: false,
    default: true,
  })
  IsActive: boolean;

  @Column({
    nullable: false,
    default: false,
  })
  IsDeleted: boolean;

  @Column({
    nullable: false,
  })
  PhoneNumber: string;
}
