import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { MovieModule } from './movie/movie.module.js';
import { ConfigModule } from '@nestjs/config';
import { ReviewModule } from './review/review.module.js';
import { PrismaModule } from './prisma/prisma.module.js';
import { ActorModule } from './actor/actor.module.js';

process.loadEnvFile?.();

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PrismaModule,
    MovieModule,
    ReviewModule,
    ActorModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
