import axios from "axios";

// should add endpoint url to .env file
const developerUrl: string = (process.env.REACT_APP_DEVELOPER_JSON_FILE_PATH as string);

/**
 * get developers
 */

const getDeveloperList = ()=>{
  
  return axios.get<[]>
    (developerUrl ,{
    headers: {
        "Content-Type": "application/json"
    },
    });
}

export default getDeveloperList;