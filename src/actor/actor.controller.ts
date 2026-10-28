<<<<<<< HEAD
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ActorService } from './actor.service.js';
import { CreateActorDto } from './dto/create-actor.dto.js';
import { UpdateActorDto } from './dto/update-actor.dto.js';

@Controller('actor')
=======
import { Body, Controller, Post } from '@nestjs/common';
import { ActorService } from './actor.service.js';
import { CreateActorDto } from './dto/create-actor.dto.js';

@Controller('actors')
>>>>>>> aba2dc3b85c239b248e29261ace82f97ce2ca001
export class ActorController {
  constructor(private readonly actorService: ActorService) {}

  @Post()
<<<<<<< HEAD
  create(@Body() createActorDto: CreateActorDto) {
    return this.actorService.create(createActorDto);
  }

  @Get()
  findAll() {
    return this.actorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.actorService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateActorDto: UpdateActorDto) {
    return this.actorService.update(+id, updateActorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.actorService.remove(+id);
=======
  public async create(@Body() dto: CreateActorDto) {
    return await this.actorService.create(dto);
>>>>>>> aba2dc3b85c239b248e29261ace82f97ce2ca001
  }
}
