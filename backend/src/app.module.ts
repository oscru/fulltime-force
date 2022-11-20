import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GithubApiController } from './github-api/github-api.controller';
import { OctokitModule } from 'nestjs-octokit';

@Module({
  imports: [
    OctokitModule.forRoot({
      isGlobal: true,
      octokitOptions: {
        auth: process.env.GITHUB_API_ACCESS_TOKEN,
      },
    }),
  ],
  controllers: [AppController, GithubApiController],
  providers: [AppService],
})
export class AppModule {}
