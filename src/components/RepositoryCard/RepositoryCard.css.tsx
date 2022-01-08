import styled from "styled-components";
import { Typography } from '@mui/material';

const RepoContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    padding: 20px 40px;
`;

const RepoTitle = styled(Typography)`
    &:hover {
        text-decoration: underline;
        text-decoration-color: #58a6ff;
    }
`;

const RepoLink = styled.a`
    text-decoration: none;
    color: #58a6ff;
    font-size: 18px;
`;

const RepoDescription = styled.p`
    font-size: 14px;
    text-align: left;
`;

const RepoStar = styled.div`
    display: flex;
    align-items: center;
    font-size: 16px;
`;

export { RepoContent, RepoTitle, RepoLink, RepoDescription, RepoStar };