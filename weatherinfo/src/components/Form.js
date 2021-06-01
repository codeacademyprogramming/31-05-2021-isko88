import React from 'react'
import { FormControl, Input, InputLabel } from '@material-ui/core';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import getCityWeather from '../actions';
import { useDispatch, useSelector } from 'react-redux';

export default function Form() {

    const dispatch = useDispatch();
    const datalist = useSelector(state => state.weather);
    console.log(datalist, "datalist")
    const handleEnter = React.useCallback((evt) => {
        console.log(evt.target.value)
        if (evt.key === "Enter") {
            getCityWeather(evt.target.value, dispatch)
        }
    }, [getCityWeather, dispatch])

    return (
        <>
            <FormControl >
                <InputLabel htmlFor="city" >City</InputLabel>
                <Input id="city" onKeyUp={(evt) => handleEnter(evt)} aria-describedby="my-helper-text" />
            </FormControl>

            <List component="nav" aria-label="contacts">
                {datalist.data ? datalist.data.map(data => {
                    { console.log(data) }
                    <ListItem button>
                        <ListItemText primary="Chelsea Otakan" />
                    </ListItem>
                }) : "Loading"}
            </List>
        </>
    )
}
