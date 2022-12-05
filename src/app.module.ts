import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MoviesModule } from './movies/movies.module';
import { Movie } from './movies/entities/movie.entity';

@Module({
  imports: [
    MoviesModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sql',
      autoLoadEntities: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
