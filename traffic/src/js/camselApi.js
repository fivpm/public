import axios from 'axios';

const API_URL = 'http://tie.digitraffic.fi/api/v1/metadata/camera-stations';

//https://tie.digitraffic.fi/api/v1/data/camera-data
// https://tie.digitraffic.fi/api/v1/metadata/documentation/swagger-ui.html

export async function getCamera() {
    let result;
    await axios.get(`${API_URL}`)
        .then(res => {
           // console.log(res.data);
            result = res; 

        })
        .catch(err => { result = err; });
    return result;
}
