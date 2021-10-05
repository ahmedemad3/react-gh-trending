import { GoVerified , GoHeart , GoRepo} from "react-icons/go";
import React from "react";
import { Button } from "react-bootstrap";

interface IDev{
    dev :{ 
        rank: number
        username : string
        name : string
        url : string
        avatar : string
        popularRepository :{
          repositoryName : string
          url : string
          description : string
        }
    }
  }

/**
 * display the details of developer row
 * @param dev 
 */
  const DevRow : React.FC<IDev> = ({dev})=>{
    return(
        <div className="Row">
            <div className="dev-left">
                
                    <span className="Row-repo mrg-r-2">{dev.rank}</span>
                    <img className="row-built-by-img" src={dev.avatar} alt={dev.username}/> 
                
                
                    <span className="Row-h2 mrg-l-4">{dev.username} </span>
                    <br></br>
                    <span className="text-font mrg-l-19">{dev.name} </span>
                
            </div>
            <div className="dev-middle">
                    <span className="Row-repo"><GoVerified className="repo-badge"/> POPULAR REPO</span>
                    <div>
                        <span className="Row-repo"> <GoRepo/> </span>
                        <span className="Row-h2"> {dev.popularRepository.repositoryName} </span>
                    </div>
                    <p className="text-font"> {dev.popularRepository.description} </p>
            </div>
            <div className="dev-right">
                    <Button variant="outline-secondary" size="sm" className="mrg-r-10"> <GoHeart className="heart"/> Sponsor </Button>
                    <Button variant="outline-secondary" size="sm"> Follow </Button>
            </div>
        </div>

    );
} 





  export default DevRow;