import styled from "styled-components";
import { Stack } from '@mui/material';

const RepoListContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    margin-bottom: 20px;
    width: 100%;
`;

const RepoList = styled(Stack)`
    width: 600px;
`;

export { RepoList, RepoListContainer };