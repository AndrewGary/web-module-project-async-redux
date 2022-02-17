import * as types from './action-types';
import axios from 'axios';

export const fetchAllMostWanted = () => dispatch => {
    axios.get('https://api.fbi.gov/wanted/v1/list')
    .then(resp => {
        console.log('resp: ', resp)
        dispatch({type: types.GET_ALL_MOST_WANTED, payload: resp.data.items})
    })
    .catch(error => {
        console.log(error);
    })
}

export const getRandomCriminal = (num) => dispatch => {
    dispatch({type: types.GET_RANDOM_CRIMINAL, payload: num})
}