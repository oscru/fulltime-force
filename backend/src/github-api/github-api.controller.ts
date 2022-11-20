import { Controller } from '@nestjs/common';
import { Get } from '@nestjs/common';
import { Octokit } from '@octokit/core';

const octokit = new Octokit({ auth: process.env.GITHUB_API_ACCESS_TOKEN });

@Controller('github-api')
export class GithubApiController {
  @Get('/')
  async getGithubCommits() {
    const response = await octokit.request(
      'GET /repos/{owner}/{repo}/commits{?sha,path,author,since,until,per_page,page}',
      {
        owner: 'oscru',
        repo: 'fulltime-force',
      },
    );
    return response.data;
  }
}
