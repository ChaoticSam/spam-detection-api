import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Spam {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  phone: string;

  @Column()
  count: number;
}
