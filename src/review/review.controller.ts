import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import { ReviewService } from './review.service.js';
import { CreateReviewDto } from './dto/create-review.dto.js';

@Controller('reviews')
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {}

  @Get()
  public findAll() {
    return this.reviewService.findAll();
  }

  @Get(':id')
  public findOne(@Param('id') id: string) {
    const found = this.reviewService.findOne(id);

    if (!found) {
      throw new NotFoundException('Отзыв не найден');
    }

    return found;
  }

  @Post()
  public create(@Body() dto: CreateReviewDto) {
    return this.reviewService.create(dto);
  }
}
