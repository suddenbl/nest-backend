import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { MovieDto } from './dto/movie.dto.js';
import { Movie } from '@prisma/client';

@Injectable()
export class MovieService {
  constructor(private readonly prismaService: PrismaService) {}

  public async findAll() {
    return await this.prismaService.movie.findMany({
      where: {
        isAvailable: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
      select: {
        id: true,
        title: true,
        actors: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });
  }

  public async findOne(id: string) {
    const found = await this.prismaService.movie.findUnique({
      where: { id },
    });

    if (!found) {
      throw new NotFoundException('Фильм не найден');
    }

    return found;
  }

  public async create(dto: MovieDto) {
    return await this.prismaService.movie.create({
      data: {
        title: dto.title,
        releaseYear: dto.releaseYear,
        isAvailable: dto.isAvailable ?? false,
      },
    });
  }

  public async update(id: string, dto: MovieDto) {
    await this.findOne(id);
    return await this.prismaService.movie.update({
      where: { id },
      data: {
        title: dto.title,
        releaseYear: dto.releaseYear,
        isAvailable: dto.isAvailable,
      },
    });
  }

  public async updateStatus(id: string, newValue: boolean) {
    await this.findOne(id);
    return await this.prismaService.movie.update({
      where: { id },
      data: {
        isAvailable: newValue,
      },
    });
  }

  public async delete(id: string) {
    await this.findOne(id);
    const deleted = await this.prismaService.movie.delete({
      where: { id },
    });
    return deleted.id;
  }
}
