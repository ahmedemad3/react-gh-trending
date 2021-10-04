import axios from "axios";

const getDeveloperList = ()=>{
  return axios.get<[]>
    ("./developers.json",{
    headers: {
        "Content-Type": "application/json"
    },
    });
}

export default getDeveloperList;