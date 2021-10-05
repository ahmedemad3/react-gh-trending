import axios from "axios";

// should add endpoint url to .env file
const repositoriesUrl: string = (process.env.REACT_APP_REPOSITORIES_JSON_FILE_PATH as string);

/**
 * get repositories
 */
const getRepoList = ()=>{
  return axios.get<[]>
    (repositoriesUrl,{
      headers: {
        "Content-Type": "application/json"
      },
    });
}

export default getRepoList;