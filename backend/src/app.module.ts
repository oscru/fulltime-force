import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GithubApiController } from './github-api/github-api.controller';

@Module({
  imports: [],
  controllers: [AppController, GithubApiController],
  providers: [AppService],
})
export class AppModule {}
