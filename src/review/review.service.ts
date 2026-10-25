import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ReviewEntity } from './entities/review.entity.js';
import { Repository } from 'typeorm';
import { CreateReviewDto } from './dto/create-review.dto.js';
import { MovieService } from '../movie/movie.service.js';

@Injectable()
export class ReviewService {
  constructor(
    @InjectRepository(ReviewEntity)
    private readonly reviewRepository: Repository<ReviewEntity>,
    private readonly movieService: MovieService,
  ) {}

  public async findAll() {
    return await this.reviewRepository.find();
  }

  public async findOne(id: string) {
    return await this.reviewRepository.findOne({
      where: { id },
    });
  }

  public async create(dto: CreateReviewDto): Promise<ReviewEntity> {
    const { movieId, rating, text } = dto;

    await this.movieService.findOne(movieId);

    const review = this.reviewRepository.create({
      text,
      rating,
      movieId,
    });

    return await this.reviewRepository.save(review);
  }
}
