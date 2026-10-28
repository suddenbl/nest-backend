import { Injectable } from '@nestjs/common';
<<<<<<< HEAD
import { CreateActorDto } from './dto/create-actor.dto.js';
import { UpdateActorDto } from './dto/update-actor.dto.js';

@Injectable()
export class ActorService {
  create(createActorDto: CreateActorDto) {
    return 'This action adds a new actor';
  }

  findAll() {
    return `This action returns all actor`;
  }

  findOne(id: number) {
    return `This action returns a #${id} actor`;
  }

  update(id: number, updateActorDto: UpdateActorDto) {
    return `This action updates a #${id} actor`;
  }

  remove(id: number) {
    return `This action removes a #${id} actor`;
=======
import { PrismaService } from '../prisma/prisma.service.js';
import { CreateActorDto } from './dto/create-actor.dto.js';
import { Actor } from '@prisma/client';

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
>>>>>>> aba2dc3b85c239b248e29261ace82f97ce2ca001
  }
}
