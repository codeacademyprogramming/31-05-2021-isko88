
import axios from 'axios'
import { WEATHER } from './consts'

export default function getCityWeather(city, dispatch) {

    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=16596fe956171a7376f2ba91213e3499`)
        .then(({ data }) => {
            dispatch({
                type: WEATHER.GET_WEATHER_BY_CITY,
                payload: data
            })
        })
        .catch(err => { console.log(err) })
}

export const deleteCityWeather = (idx, dispatch) => {

    dispatch({
        type: WEATHER.DELETE_WEATHER_FROM_LIST,
        payload: idx
    })
}
