import React from "react";
import DevRow from './DevRow';
import { IState as Props } from './../App';
import { createBrowserHistory } from 'history';


interface IProps {
    developers: Props["developers"]
}
const DevList : React.FC<IProps> =  ({developers})=>{
    const history = createBrowserHistory();
    const renderDevList = (): JSX.Element[] => {
        if(developers == null) {
            history.push("/");
            return(
               []
            );
        }
        return developers.map((developer) => {
            return(
                <DevRow dev={developer} key={developer.rank}/>
           )    
        })      
    }
    return(
        
        <div>
            {renderDevList()} 
        </div>
    );
} 

export default DevList;