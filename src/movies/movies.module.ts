import { Module } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { MoviesController } from './movies.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movie } from './entities/movie.entity';
import { Actor } from './entities/actor.entity';
import { MovieActors } from './entities/movieActors.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Movie]),
    TypeOrmModule.forFeature([Actor]),
    TypeOrmModule.forFeature([MovieActors]),
  ],
  controllers: [MoviesController],
  providers: [MoviesService],
})
export class MoviesModule {}
