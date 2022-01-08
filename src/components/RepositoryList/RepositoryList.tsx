import { RepositoryListProps } from "../../types";
import { RepositoryCard }  from "../index";
import { Typography } from "@mui/material";
import { RepoListContainer, RepoList } from "./RepositoryList.css";

const RepositoryList = (props: RepositoryListProps) => {
    const { repositories } = props;

    return (
        <RepoListContainer>
            <RepoList spacing={2}>
                {
                    repositories && repositories.length > 0 
                    ?
                    repositories.map(({ name, description, stargazers_count, html_url }) => (
                        <RepositoryCard 
                            key={html_url}
                            name={name} 
                            description={description}
                            stargazers_count={stargazers_count}
                            html_url={html_url}    
                        ></RepositoryCard>
                    ))
                    :
                    repositories && <Typography>No results found.</Typography>
                }
            </RepoList>
        </RepoListContainer>
    );
};

export default RepositoryList;