import { Injectable } from '@nestjs/common';
import { Actor } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service.js';
import { CreateActorDto } from './dto/create-actor.dto.js';

@Injectable()
export class ActorService {
  constructor(private readonly prismaService: PrismaService) {}

  public async create(dto: CreateActorDto): Promise<Actor> {
    const { name } = dto;

    const actor = await this.prismaService.actor.create({
      data: {
        name,
      },
    });

    return actor;
  }
}
