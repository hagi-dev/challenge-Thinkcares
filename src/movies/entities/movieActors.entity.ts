import { Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Actor } from './actor.entity';
import { Movie } from './movie.entity';

@Entity('movie_actors')
export class MovieActors {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Actor, (actor) => actor.id)
  actor: Actor;

  @ManyToOne(() => Movie, (movie) => movie.id)
  movie: Movie;
}
