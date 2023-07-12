import {Dispatch, ReactElement, useCallback, useMemo} from "react";
import {TextField, TextFieldProps} from "@mui/material";
import "./styles.css";

interface TextFieldWithDeleteProps extends TextFieldProps<"outlined"> {
    setValue: Dispatch<React.SetStateAction<string>>
    Icon?: ReactElement;
}

export const TextFieldWithAdornment = (props: TextFieldWithDeleteProps) => {

    const Icon = useCallback(() => {
        return props.Icon;
    }, [props.Icon]);

    const InputProps: TextFieldProps<"outlined">["InputProps"] = useMemo(() => {
        if(Icon) {
            const config: TextFieldProps<"outlined">["InputProps"] = {
                // @ts-ignore
                endAdornment: <Icon />
            }
            return config;
        } else {
            return undefined
        }
    }, [Icon])

    return <TextField className="textfield" {...props} onChange={(e) => props.setValue(e.target.value)} InputProps={InputProps}></TextField>
}