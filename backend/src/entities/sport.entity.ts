import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Sport {
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
    default: true,
  })
  IsActive: boolean;
}
