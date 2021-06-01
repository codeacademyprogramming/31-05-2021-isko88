import { WEATHER } from "../actions/consts";

const INITIAL_STATE = {
    status: false,
    data: []
}
export function weatherReducer(state = INITIAL_STATE, action) {
    console.log("reducer", action)
    switch (action.type) {
        case WEATHER.GET_WEATHER_BY_CITY:
            return {
                ...state,
                data: action.payload,
                status: true
            }
        default:
            return state;
    }

}