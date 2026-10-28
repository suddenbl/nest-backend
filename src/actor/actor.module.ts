import { Module } from '@nestjs/common';
import { ActorService } from './actor.service.js';
import { ActorController } from './actor.controller.js';
<<<<<<< HEAD
import { ActorEntity } from './entities/actor.entity.js';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ActorEntity])],
=======

@Module({
>>>>>>> aba2dc3b85c239b248e29261ace82f97ce2ca001
  controllers: [ActorController],
  providers: [ActorService],
})
export class ActorModule {}
