import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ActivityLog {
  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'ID',
  })
  ID: number;

  @Column({
    nullable: false,
  })
  IDActivityLogType: number;

  @Column({
    nullable: false,
  })
  IDUser: number;

  @Column({})
  IDView: number;

  @Column({
    default: () => 'CURRENT_TIMESTAMP',
  })
  EntryDate: Date;

  @Column({
    default: '',
  })
  URL: string;

  @Column({
    default: false,
  })
  IsMobileDevice: boolean;

  @Column({
    default: '',
  })
  BrowserType: string;
}
