import {ChangeEvent, useCallback, useId, useMemo, useState} from "react";
import {getClasses} from "../Display/types";
import styles, {shiftLabel} from "./styles";
import {css, cx} from "@emotion/css";
import {useTheme} from "../../themes/useCurrentTheme";

interface Input {
   onValueChange: (e: React.FormEvent<HTMLInputElement>) => void;
   label: string,
}

const inputClass = getClasses(styles);

export const Input = ({label, onValueChange}: Input) => {
   const inputId = useId();
   const [value, setValue] = useState<string>("");
   const theme = useTheme();

   const inputWrapperClasses = useMemo(() => cx(inputClass.inputWrapper, value ? css(shiftLabel()) : {}, ), [value]);
   const inputClasses = useMemo(() => cx(inputClass.input, css({backgroundColor: theme.backgroundColor})), [theme])

   const handleInputChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
      setValue(e.currentTarget.value)
   }, [])

   return <div className={inputWrapperClasses}>
      <label className={inputClass.label} htmlFor={inputId}>{label}</label>
      <input onInput={onValueChange} onChange={handleInputChange} placeholder={" "} className={inputClasses}
             id={inputId}/>
   </div>
}