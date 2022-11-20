import { Controller } from '@nestjs/common';
import { Get } from '@nestjs/common';
import { OctokitService } from 'nestjs-octokit';

@Controller('github-api')
export class GithubApiController {
  constructor(private readonly octokitService: OctokitService) {}
  @Get('/')
  async getGithubCommits() {
    const response = await this.octokitService.rest.search.repos({
      q: 'oscru/fulltime-force',
    });

    return response.data.items;
  }
}
