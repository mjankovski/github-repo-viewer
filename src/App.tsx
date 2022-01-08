import './App.css';
import { useState } from 'react';
import { AppHeader, UsernameForm, RepositoryList } from './components';
import { IRepositoryData } from "./types";
import { CircularProgress } from '@mui/material';
import GithubApiController from './api/github/GithubApiController';

function App() {
    const [repoItems, setRepoItems] = useState<Array<IRepositoryData>>();
    const [showSpinner, setShowSpinner] = useState(false);
    const controller = new GithubApiController();

    const handleSubmit = async (username: string) => {
        const isUsernameInputEmpty = username === "";

        if(isUsernameInputEmpty) {
            setRepoItems(undefined);
            return;
        }

        setShowSpinner(true);

        controller.loadUsername(username);
        const repos = await controller.getSortedUserRepos();
        setRepoItems(repos);
        
        setShowSpinner(false);
    };

    return (
        <div className="App">
            <AppHeader />
            <UsernameForm submitFn={handleSubmit} />
            {
                showSpinner ? 
                <CircularProgress /> 
                :
                <RepositoryList repositories={repoItems} />
            }
        </div>
    );
}

export default App;
