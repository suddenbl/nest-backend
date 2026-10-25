import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { MovieService } from './movie.service.js';
import { MovieDto } from './dto/movie.dto.js';
import { ChangeStatusDto } from './dto/change-status.dto.js';

@Controller('movies')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Get()
  public findAll() {
    return this.movieService.findAll();
  }

  @Get(':id')
  public findOne(@Param('id', ParseIntPipe) id: string) {
    return this.movieService.findOne(id);
  }

  @Post()
  public create(@Body() dto: MovieDto) {
    return this.movieService.create(dto);
  }

  @Put(':id')
  public update(@Param('id', ParseIntPipe) id: string, @Body() dto: MovieDto) {
    return this.movieService.update(id, dto);
  }

  @Patch(':id/change-status')
  public changeStatus(
    @Param('id', ParseIntPipe) id: string,
    @Body() dto: ChangeStatusDto,
  ) {
    return this.movieService.updateStatus(id, dto.isAvailable);
  }

  @Delete(':id')
  public delete(@Param('id', ParseIntPipe) id: string) {
    return this.movieService.delete(id);
  }
}
