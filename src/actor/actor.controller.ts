import { Body, Controller, Post } from '@nestjs/common';
import { ActorService } from './actor.service.js';
import { CreateActorDto } from './dto/create-actor.dto.js';

@Controller('actors')
export class ActorController {
  constructor(private readonly actorService: ActorService) {}

  @Post()
  public async create(@Body() dto: CreateActorDto) {
    return await this.actorService.create(dto);
  }
}
