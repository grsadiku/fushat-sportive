import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Constant {
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
    default: '',
  })
  Content: string;
}
