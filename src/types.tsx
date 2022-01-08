export interface IGithubApiController {
    loadUsername(username: string): void;
    getSortedUserRepos(): Promise<Array<IRepositoryData>>;
}
export interface IGithubApiService {
    loadUsername(username: string): void;
    getUserRepos(): Promise<Array<IRepositoryData>>;
    getDataFromApi(username: string): Promise<Array<IRepositoryData>>;
    getSortedRepos(): Array<IRepositoryData>;
}

export interface IRepositoryData {
    name: string,
    description: string,
    stargazers_count: number,
    html_url: string
}

export interface RepositoryCardProps extends IRepositoryData { }

export interface RepositoryListProps {
    repositories: Array<RepositoryCardProps> | undefined;
}

export interface UsernameFormProps {
    submitFn: (username: string) => Promise<void>;
}