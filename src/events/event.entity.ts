import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Event {

  @PrimaryGeneratedColumn()
  userId: Number

  @Column()
  Description: String

  @Column()
  dateTime: Date

  @Column()
  createdAt: Date

  @Column()
  day: Number
}