import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MovieEntity } from './entities/movie.entity.js';
import { MovieDto } from './dto/movie.dto.js';

@Injectable()
export class MovieService {
  constructor(
    @InjectRepository(MovieEntity)
    private readonly movieRepository: Repository<MovieEntity>,
  ) {}

  public async findAll(): Promise<MovieEntity[]> {
    return await this.movieRepository.find({
      where: {
        isAvailable: true,
      },
      order: {
        createdAt: 'desc',
      },
      select: {
        id: true,
        title: true,
        description: true,
        rating: true,
        releaseYear: true,
      },
    });
  }

  public async findOne(id: string): Promise<MovieEntity> {
    const found = await this.movieRepository.findOne({
      where: { id },
    });

    if (!found) {
      throw new NotFoundException('Фильм не найден');
    }

    return found;
  }

  public async create(dto: MovieDto): Promise<MovieEntity> {
    const movie = this.movieRepository.create(dto);
    return await this.movieRepository.save(movie);
  }

  public async update(id: string, dto: MovieDto): Promise<MovieEntity> {
    const found = await this.findOne(id);
    Object.assign(found, dto);
    return await this.movieRepository.save(found);
  }

  public async updateStatus(
    id: string,
    newValue: boolean,
  ): Promise<MovieEntity> {
    const found = await this.findOne(id);
    found.isAvailable = newValue;
    return await this.movieRepository.save(found);
  }

  public async delete(id: string): Promise<string> {
    const found = await this.findOne(id);
    await this.movieRepository.remove(found);
    return found.id;
  }
}
