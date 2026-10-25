import { Module } from '@nestjs/common';
import { ReviewService } from './review.service.js';
import { ReviewController } from './review.controller.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReviewEntity } from './entities/review.entity.js';
import { MovieService } from '../movie/movie.service.js';
import { MovieEntity } from '../movie/entities/movie.entity.js';

@Module({
  imports: [TypeOrmModule.forFeature([ReviewEntity, MovieEntity])],
  controllers: [ReviewController],
  providers: [ReviewService, MovieService],
})
export class ReviewModule {}
