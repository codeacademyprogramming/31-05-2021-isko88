import { FormControlLabel, Radio, RadioGroup } from '@material-ui/core'
import React, { useState } from 'react'

export default function TempTypes({ setTemp ,setTmp}) {
    const [selectRadio, setSelectRadio] = useState("Kelvin");
    const handleChangeTemp = React.useCallback((evt) => {
        setSelectRadio(evt.target.value)
        // changeTempTypesactions(evt.target.value,dispatch)
        switch (evt.target.value) {
            case "Kelvin":
                setTmp("K")
                break;
            case "Celcius":
                setTmp("C")
                break;
            case "Fehrenheight":
                setTmp("F")
                break;
            default:
                break;
        }
    }, [setTmp])
    return (
        <RadioGroup aria-label="Temps" name="Temps" onChange={(evt) => handleChangeTemp(evt)} value={selectRadio} >
            <FormControlLabel aria-selected="true" value="Kelvin" control={<Radio />} label="Kelvin" />
            <FormControlLabel value="Celcius" control={<Radio />} label="Celcius" />
            <FormControlLabel value="Fehrenheight" control={<Radio />} label="Fehrenheight" />
        </RadioGroup>
    )
}
