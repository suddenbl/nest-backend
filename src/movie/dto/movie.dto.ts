import {
  IsBoolean,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  Max,
  Min,
} from 'class-validator';

export class MovieDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  @IsInt()
  @Min(1888)
  @Max(new Date().getFullYear(), {
    message: 'Дата не должна превышать текущий год',
  })
  releaseYear: number;

  @IsOptional()
  @IsBoolean()
  isAvailable: boolean;
}
