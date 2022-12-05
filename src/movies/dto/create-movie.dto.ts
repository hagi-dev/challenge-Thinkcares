import { IsNotEmpty, IsNumber, IsPositive, MaxLength } from 'class-validator';

export class CreateMovieDto {
  @IsNotEmpty()
  @MaxLength(255)
  title: string;
  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  releaseYear: number;
}
