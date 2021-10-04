import React, { useEffect } from 'react';
import './App.css';
import RepoList from './components/RepoList';
import DevList from './components/DevList';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import getRepoList from './services/RepoService';
import getDeveloperList  from './services/DeveloperService'
import { Button, ButtonGroup, Dropdown } from 'react-bootstrap';
import { Router , Switch, Route} from 'react-router-dom';
import { createBrowserHistory } from 'history';



export interface IState{
  repositories :{ 
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
  }[],

  developers :{
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
  }[]
} 

function App() {
  const [repositories, setRepositories] = useState<IState["repositories"]>([]);
  const [developers, setDevelopers] = useState<IState["developers"]>([]);
  const [showRepo, setShowRepo] = React.useState(true);
  const [active, setActive] = useState(0);
  const history = createBrowserHistory();

  useEffect(() => {
    fetchRepoList();
  }, [])
  
  function fetchRepoList(){
    setShowRepo(true);
    setActive(1);
    getRepoList().then(res =>{
      console.log("app : repos : " + JSON.stringify(res.data));
      setRepositories(res.data) ;
      console.log("fetchRepoList : showRepo : " + showRepo)
      history.push("/")
      
    });
  }

  function fetchDeveloperList(){
    console.log("fetchDevelopers : ");
    setShowRepo(false);
    setActive(2);
    getDeveloperList().then(res =>{
      console.log("app : developers : " + JSON.stringify(res.data));
      setDevelopers(res.data) ;
      history.push('/developers')
    })
  }


  return (
    <div className="App">
      <header className="App-header">
          <h1>Trending</h1>
          <p className="App-p">
            See What the Github is the most excited about today
          </p>
      </header>

      <Router history={history}>
        <Switch>
          <Route exact path="/"/>
          <Route path="/repositories" component={RepoList}/>
          <Route path="/developers" component={DevList} />
        </Switch>
    </Router> 
      <div className="Header-list">
            <div className="button-group Header-list-left">
                <ButtonGroup>
                    <Button className={active === 1 ? "active" : undefined} variant="outline-secondary" size="sm" onClick={fetchRepoList}>Repositories</Button>
                    <Button className={active === 2 ? "active" : undefined} variant="outline-secondary" size="sm" onClick={fetchDeveloperList}> Developers </Button>
                </ButtonGroup>
            </div>
            <div className="Header-list-right">
                <Dropdown>
                    <Dropdown.Toggle variant="secondary" size="sm" id="dropdown-basic">
                        Language
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#">Any</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
            
        </div>
      { showRepo ? 
          <RepoList repositories={repositories}/> : 
          <DevList developers={developers}/> }
      
    </div>
  );
}

export default App;
