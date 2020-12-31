import axios from 'axios';

const URL = 'http://localhost:4000/';

let API_URL = 'http://localhost:4000';
   export default function callApi(endpoint, method = 'GET', body) {
       return axios({
           method,
           url: `${API_URL}/${endpoint}`,
           data: body
       }).catch(err => {
           console.log(err);
       });
}