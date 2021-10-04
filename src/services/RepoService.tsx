import axios from "axios";

const getRepoList = ()=>{
  return axios.get<[]>
    ("./repositories.json",{
      headers: {
        "Content-Type": "application/json"
      },
    });
}

export default getRepoList;