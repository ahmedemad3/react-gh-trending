import React from "react";
import RepoRow from './RepoRow';
import { IState as Props } from './../App';

interface IProps {
    repositories: Props["repositories"]
}

/**
 * create function comp. to list repositories
 * @param repositories
 */
const RepoList : React.FC<IProps> =  ({repositories})=>{
    const renderRepoList = (): JSX.Element[] => {
        return repositories.map((repo) => {
            return(
                <RepoRow repo={repo} key={repo.rank}/>
           )    
        })      
    }
    return(
        <div>
            {renderRepoList()} 
        </div>
    );
} 

export default RepoList;