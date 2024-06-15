import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Contact } from 'src/contacts/contact.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  phone: string;

  @Column()
  name: string;

  @Column({ nullable: true })
  email: string;

  @Column()
  password: string;

  @OneToMany(type => Contact, contact => contact.user)
  contacts: Contact[];
}
