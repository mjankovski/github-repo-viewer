import { IGithubApiController, IGithubApiService, IRepositoryData } from "../../types";
import GithubApiService from "./GithubApiService";

export default class GithubApiController implements IGithubApiController {
    private githubService: IGithubApiService;

    constructor() {
        this.githubService = new GithubApiService();
    }

    loadUsername = (username: string): void => {
        this.githubService.loadUsername(username);;
    }

    getSortedUserRepos = async (): Promise<Array<IRepositoryData>> => {
        return await this.githubService.getUserRepos();
    }
}