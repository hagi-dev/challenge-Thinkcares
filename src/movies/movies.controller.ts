import { Controller, Post, Body, Get, Query } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { CreateMovieDto } from './dto/create-movie.dto';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Post()
  create(@Body() createMovieDto: CreateMovieDto) {
    return this.moviesService.create(createMovieDto);
  }

  @Get('/')
  getMovies() {
    return this.moviesService.moviesService();
  }

  @Get('/actors')
  getActorsByMovie(@Query('idMovie') idMovie: number) {
    return this.moviesService.findActorsByMovie(idMovie);
  }

  @Get('/years')
  getMoviesByReleseYear(
    @Query('start') start: number,
    @Query('end') end: number,
  ) {
    return this.moviesService.findMoviesByReleseYear(start, end);
  }
}
