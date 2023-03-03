import { Entity, BeforeInsert, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';
import { hashSync } from 'bcrypt';

@Entity()
export class User {

  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  firstName: string

  @Column()
  lastName: string

  @CreateDateColumn()
  birthDate: string

  @Column()
  city: string

  @Column()
  country: string

  @Column()
  email: string

  @Column()
  password: string

  @Column()
  passwordConfirm: string

  @BeforeInsert()
  hashPassword() {
    this.password = hashSync(this.password, 10);
  }
}