import axios from "axios";
import { IGithubApiService, IRepositoryData } from "../../types";

export default class GithubApiService implements IGithubApiService {
    private baseApiUrl: string = "https://api.github.com/users/";
    private userRepoApiUrl: string = "";
    private repos: Array<IRepositoryData> = [];

    loadUsername(username: string) {
        this.userRepoApiUrl = this.baseApiUrl + `${username}/repos`;
        this.repos = [];
    }

    getUserRepos = async (): Promise<Array<IRepositoryData>> => {
        const reposDataFromApi: Array<IRepositoryData> = await this.getDataFromApi();

        if (!reposDataFromApi) {
            return this.repos;
        }

        for (const { name, description, stargazers_count, html_url } of reposDataFromApi) {
            this.repos.push({
                name,
                description,
                stargazers_count,
                html_url
            });
        }

        return this.getSortedRepos();
    };

    getDataFromApi = async (): Promise<Array<IRepositoryData>> => {
        let result: Array<IRepositoryData> = [];

        try {
            const response = await axios.get(this.userRepoApiUrl);
            result = response.data;
        } catch (e) {
            console.error(e);
        }

        return result;
    };

    getSortedRepos = (): Array<IRepositoryData> => {
        const sortedRepos: Array<IRepositoryData> = this.repos.sort(
            (firstRepo, secondRepo) => secondRepo.stargazers_count - firstRepo.stargazers_count
        );

        return sortedRepos;
    };
}