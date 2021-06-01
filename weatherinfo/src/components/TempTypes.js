import { FormControlLabel, Radio, RadioGroup } from '@material-ui/core'
import React from 'react'

export default function TempTypes() {
    return (
        <RadioGroup aria-label="Temps" name="Temps" >
            <FormControlLabel value="Kelvin" control={<Radio />} label="Kelvin" />
            <FormControlLabel value="Celcius" control={<Radio />} label="Celcius" />
            <FormControlLabel value="Fehrenheight" control={<Radio />} label="Fehrenheight" />
        </RadioGroup>
    )
}
