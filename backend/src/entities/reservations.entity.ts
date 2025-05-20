import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Facilities } from './facilities.entity';
import { User } from './user.entity';

@Entity()
export class Reservations {
  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'ID',
  })
  ID: number;

  @Column({
    nullable: false,
    default: '',
  })
  Title: string;

  @Column({
    nullable: false,
    name: 'IDFacility', // Specify the name of the foreign key column
  })
  IDFacility: number;

  @ManyToOne(() => Facilities)
  @JoinColumn({ name: 'IDFacility', referencedColumnName: 'ID' })
  facility: Facilities;

  @Column({
    nullable: false,
  })
  ReservationDate: Date;

  @Column({
    nullable: false,
  })
  ReservationEndDate: Date;

  @Column({
    nullable: false,
    default: false,
  })
  IsRecurring: boolean;

  @Column({
    nullable: false,
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
}
