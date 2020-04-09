import { myAxios as axios, Route } from '../../helpers'

export const connectivityHandler = () => async (dispatch) => {
    axios.interceptors.request.use((config) => {
        console.log('POCEO FETCH RUTE ', Route + config.url);
        return config;
    }, (err) => {
        return Promise.reject(err)
    })
    axios.interceptors.response.use((res) => {
        return res;
    }, (err) => {
        if (!err.response) {
            alert('Connection error')
        }
        return Promise.reject(err)
    })
}