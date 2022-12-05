import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMovieDto } from './dto/create-movie.dto';
import { Actor } from './entities/actor.entity';
import { Movie } from './entities/movie.entity';
import { MovieActors } from './entities/movieActors.entity';
import { Between, Equal, ArrayContains } from 'typeorm';

@Injectable()
export class MoviesService {
  constructor(
    @InjectRepository(Movie)
    private moviesRepository: Repository<Movie>,
    @InjectRepository(MovieActors)
    private movieActorsRepository: Repository<MovieActors>,
    @InjectRepository(MovieActors)
    private ActorsRepository: Repository<Actor>,
  ) {}

  async create(createMovieDto: CreateMovieDto) {
    return await this.moviesRepository.save(createMovieDto);
  }

  async moviesService() {
    let movies: Movie[] = await this.moviesRepository.find();
    movies = movies.sort((a, b) => a.releaseYear - b.releaseYear);
    return movies.map((movie) => movie.title);
  }

  async findActorsByMovie(idMovie: number) {
    const actors = await this.movieActorsRepository.find({
      where: {
        movie: Equal(idMovie),
      },
    });
    console.log(actors);
    const actorsListIds = actors.map((actor) => actor.actor);
    const data = await this.ActorsRepository.find({
      where: {
        id: ArrayContains(actorsListIds),
      },
      order:{
        name: 'ASC'
      }
    });
    const actorsList: string[] = data.map((actor) => actor.name);
    return actorsList;
  }

  async findMoviesByReleseYear(start: number, end: number) {
    const movies = await this.moviesRepository.find({
      where: {
        releaseYear: Between(start, end),
      },
      order: {
        releaseYear: 'DESC',
      },
    });
    return movies;
  }
}

