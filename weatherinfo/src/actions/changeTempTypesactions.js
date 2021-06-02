
import { WEATHER } from './consts'
export default function changeTempTypesactions(tempValue,dispatch) {
    dispatch({
        type: `${WEATHER.CHANGE_TO}_${tempValue.toUpperCase()}`,
        payload:tempValue
    })
}
