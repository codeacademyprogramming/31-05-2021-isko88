import React, { useState } from 'react'
import { Box, FormControl, Input, InputLabel, ListItemIcon } from '@material-ui/core';
import { List, ListItem, ListItemText } from '@material-ui/core'
import getCityWeather, { deleteCityWeather } from '../actions';
import { useDispatch, useSelector } from 'react-redux';
import DeleteIcon from '@material-ui/icons/Delete';
import TempTypes from './TempTypes';

export default function Form() {

    const dispatch = useDispatch();
    const datalist = useSelector(state => state.weather);
    const [tmp, setTmp] = useState("K")
    const handleEnter = React.useCallback((evt) => {
        if (evt.key === "Enter") {
            getCityWeather(evt.target.value, dispatch);
            evt.target.value = "";
        }

    }, [dispatch])

    const handleDeleteListItem = React.useCallback((data, idx) => {
        deleteCityWeather(idx, dispatch)
    }, [dispatch])

    return (
        <>
            <Box display="flex" justifyContent="space-around">
                <Box>
                    <FormControl >
                        <InputLabel htmlFor="city" >City</InputLabel>
                        <Input id="city" onKeyUp={(evt) => handleEnter(evt)} aria-describedby="city-name" />
                    </FormControl>
                    <Box display="flex" justifyContent="center">
                        <List component="nav" aria-label="cities">
                            {datalist.status ? datalist.data.map((d, idx) =>
                            (<ListItem key={d.coord.lon} button >
                                <ListItemIcon onClick={() => handleDeleteListItem(d, idx)}>
                                    <DeleteIcon />
                                </ListItemIcon>
                                    
                                {tmp === "K" ? (<ListItemText primary={`${d.name} ${Math.floor((d.main.temp))} ${tmp}`} />)
                                : tmp === "C" ? (<ListItemText primary={`${d.name} ${Math.floor((d.main.temp - 273.15))} ${tmp}`} />)
                                : tmp === "F" && (<ListItemText primary={`${d.name} ${Math.floor((d.main.temp -273.15) * 9/5 + 32)} ${tmp}`} />)
                                }
                            </ListItem>)
                            ) : (<ListItem button >
                                <ListItemText primary="" />
                            </ListItem>)}
                        </List>
                    </Box>
                </Box>


                <Box display="flex" justifyContent="flex-end">
                    <TempTypes setTmp={setTmp}/>
                </Box>
            </Box>




        </>
    )
}
