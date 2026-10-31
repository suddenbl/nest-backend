import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
  UsePipes,
} from '@nestjs/common';
import { AppService } from './app.service.js';
import { StringToLowerCasePipe } from './common/pipes/string-to-lowercase.pipe.js';
import { AuthGuard } from './common/guards/auth.guard.js';
import { UserAgent } from './common/decorators/user-agent.decorator.js';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  public getHello() {
    return this.appService.getHello();
  }

  @UsePipes(StringToLowerCasePipe)
  @Post()
  public create(@Body('title') title: string) {
    return `Movie ${title}`;
  }

  @UseGuards(AuthGuard)
  @Get('/me')
  public getProfile(@UserAgent() userAgent: string) {
    return {
      id: '1',
      username: 'dfdjf',
      email: 'ksdjs@mail.ru',
      userAgent,
    };
  }
}
