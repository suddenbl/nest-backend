import {
  IsNotEmpty,
  IsNumber,
  IsString,
  IsUUID,
  Max,
  Min,
} from 'class-validator';
import { Entity } from 'typeorm';

@Entity()
export class CreateReviewDto {
  @IsString()
  text: string;

  @IsNumber()
  @IsNotEmpty()
  @Min(0)
  @Max(10)
  rating: number;

  @IsUUID()
  @IsNotEmpty()
  movieId: string;
}
