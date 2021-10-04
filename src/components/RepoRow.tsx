import {BsStar} from "react-icons/bs";
import { GoRepoForked , GoRepo} from "react-icons/go";
import React from "react";
import { Button } from "react-bootstrap";

interface IRepo{
    repo :{ 
      rank: number  
      repositoryName : string
      url : string
      description : string
      language : string
      totalStars: number
      forks: number
      builtBy:{
        username:string
        url : string
        avatar : string
      }[]
    }
  }

const RepoRow : React.FC<IRepo> = ({repo})=>{
    return(
        <div className="Row">
            <div className="Row-left">
                <div>
                    <span className="Row-repo"><GoRepo/></span>
                    <span className="Row-h2">{repo.repositoryName} </span>
                </div>
                <p className="text-font mrg-l-2"> {repo.description} </p> 
                <div>
                    <span className="text-font mrg-2">{repo.language}</span>
                    <span className="text-font mrg-2">
                        <BsStar/> {repo.totalStars}
                    </span>
                    <span className="text-font mrg-2">
                        <GoRepoForked/> {repo.forks}
                    </span>
                    <span className="text-font mrg-2">
                        builtBy {
                            repo.builtBy.map((user, idx) =>{
                                return(
                                    <img key={idx} className="row-built-by-img" src={user.avatar} alt={user.username}/> 
                                )   
                            })
                        }
                    </span>
                </div>
            </div>
            <div className="Row-right">
            <Button variant="outline-secondary" size="sm" className="mrg-r-10"> <BsStar/> Sponsor</Button>
            </div>
        </div>

    );
} 

export default RepoRow;