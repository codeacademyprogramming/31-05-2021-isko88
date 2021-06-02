import { WEATHER } from "../actions/consts";

const INITIAL_STATE = {
    status: false,
    data: []
}
export function weatherReducer(state = INITIAL_STATE, action) {

    switch (action.type) {
        case WEATHER.GET_WEATHER_BY_CITY:
            const newData = [...state.data];
            newData.push(action.payload)
            return {
                ...state,
                data: newData,
                status: true
            }
        case WEATHER.DELETE_WEATHER_FROM_LIST:
            const newData1 = [...state.data];
            newData1.splice(action.payload, 1);
            return {
                ...state,
                data: newData1,
                status: true
            }
        case `${WEATHER.CHANGE_TO}_CELCIUS`:
            
            const newData2 = [...state.data];
           
       
            const newData3  = newData2.map(d=> {
                d.main.temp = d.main.temp*2;
                return d;
            });
                
            return {
                ...state,
                data: newData3,
                status: true
            }
        default:
            return state;
    }

}