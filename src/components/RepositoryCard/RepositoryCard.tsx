import { RepositoryCardProps } from "../../types";
import { RepoContent, RepoTitle, RepoLink, RepoDescription, RepoStar } from "./RepositoryCard.css";
import { Card } from '@mui/material';
import StarOutlineIcon from '@mui/icons-material/StarOutline';

const RepositoryCard = (props: RepositoryCardProps) => {
  const { name, description, stargazers_count, html_url } = props;
  return (
    <Card variant="outlined">
        <RepoContent>
            <RepoTitle>
               <RepoLink href={html_url}>{name}</RepoLink>
            </RepoTitle>
            <RepoDescription>
                {description}
            </RepoDescription>
            <RepoStar>
                <StarOutlineIcon />{stargazers_count}
            </RepoStar>
        </RepoContent>
    </Card>
  );
};

export default RepositoryCard;