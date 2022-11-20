import { Module } from '@nestjs/common';
import { GithubApiController } from './github-api.controller';
import { GithubApiService } from './github-api.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    HttpModule.registerAsync({
      useFactory: () => ({
        timeout: 5000,
        maxRedirects: 5,
      }),
    }),
  ],
  providers: [GithubApiService],
  controllers: [GithubApiController],
})
export class GithubApiModule {}
