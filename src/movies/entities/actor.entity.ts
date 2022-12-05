import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('actors')
export class Actor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  gender: string;
}
