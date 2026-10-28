import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { CreateReviewDto } from './dto/create-review.dto.js';
import { MovieService } from '../movie/movie.service.js';
import { Review } from '@prisma/client';

@Injectable()
export class ReviewService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly movieService: MovieService,
  ) {}

  public async findAll(): Promise<Review[]> {
    return await this.prisma.review.findMany();
  }

  public async findOne(id: string): Promise<Review> {
    const found = await this.prisma.review.findUnique({
      where: { id },
    });

    if (!found) {
      throw new NotFoundException('Отзыв не найден');
    }

    return found;
  }

  public async create(dto: CreateReviewDto): Promise<Review> {
    const { movieId, rating, text } = dto;

    await this.movieService.findOne(movieId);

    return await this.prisma.review.create({
      data: {
        text,
        rating,
        movieId,
      },
    });
  }
}
