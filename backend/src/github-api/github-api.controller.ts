import { Controller, Param } from '@nestjs/common';
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
  @Get('/get-repository/:repository')
  async getGithubRepository(@Param('repository') repository: string) {
    const response = await octokit.request(
      'GET /orgs/{org}/repos{?type,sort,direction,per_page,page}',
      {
        org: repository,
      },
    );
    return response.data;
  }
}
