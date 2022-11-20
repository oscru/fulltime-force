import { Module } from '@nestjs/common';
import { GithubApiController } from './github-api.controller';
import { GithubApiService } from './github-api.service';

@Module({
  imports: [],
  providers: [GithubApiService],
  controllers: [GithubApiController],
})
export class GithubApiModule {}
