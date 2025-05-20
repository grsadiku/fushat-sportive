import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Sport } from './sport.entity';
import { User } from './user.entity';
import { State } from './states.entity';
import { City } from './city.entity';

@Entity()
export class Facilities {
  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'id',
  })
  ID: number;

  @Column({
    nullable: false,
    default: '',
  })
  Title: string;

  @Column({
    nullable: false,
    default: '',
  })
  Location: string;

  @Column({
    nullable: false,
    default: '',
  })
  Description: string;

  @Column({
    nullable: false,
    default: '',
  })
  ProfileImageUrl: string;

  @Column({
    nullable: false,
    default: true,
  })
  IsActive: boolean;

  @Column({
    nullable: false,
    name: 'SportID', // Specify the name of the foreign key column
  })
  SportID: number;

  @ManyToOne(() => Sport)
  @JoinColumn({ name: 'SportID', referencedColumnName: 'ID' })
  sport: Sport;

  @Column({
    nullable: false,
    name: 'IDManagingUser', // Specify the name of the foreign key column
  })
  IDManagingUser: number;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'IDManagingUser', referencedColumnName: 'ID' })
  user: User;

  @Column({
    nullable: false,
    name: 'IDState', // Specify the name of the foreign key column
  })
  IDState: number;

  @ManyToOne(() => State)
  @JoinColumn({ name: 'IDState', referencedColumnName: 'ID' })
  state: State;

  @Column({
    nullable: false,
    name: 'IDCity',
  })
  IDCity: number;

  @ManyToOne(() => City)
  @JoinColumn({ name: 'IDCity', referencedColumnName: 'ID' })
  city: City;

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
