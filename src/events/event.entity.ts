import { IsTimeZone } from 'class-validator';
import { Entity, Column, CreateDateColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Event {

  @PrimaryGeneratedColumn('uuid')
  userId: string

  @Column()
  description: String

  @CreateDateColumn()
  dateTime: string

  @CreateDateColumn()
  createdAt: string
}