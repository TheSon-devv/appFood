import axios from 'axios';

// const URL = 'http://192.168.0.101:3000/';

let API_URL = 'http://192.168.0.101:3000';
   export default function callApi(endpoint, method = 'GET', body) {
       return axios({
           method,
           url: `${API_URL}/${endpoint}`,
           data: body
       }).catch(err => {
           console.log(err);
       });
}

// export const monAn = (url = URL + 'MonAn/') => {
//     return {
//         fetchAllMonAn: () => axios.get(url),
//         // fetchByIdMonAn: maMonAn => axios.get(url + maMonAn),
//         // createMonAn: newMonAn => axios.post(url, newMonAn),
//         // updateMonAn: (maMonAn, updateMonAn) => axios.put(url + maMonAn, updateMonAn),
//         // deleteMonAn: maMonAn => axios.delete(url + maMonAn)
//     }
// }