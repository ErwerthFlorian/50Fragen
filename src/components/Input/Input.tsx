import {ChangeEvent, useCallback, useId, useMemo, useState} from "react";
import {getClasses} from "../Display/types";
import styles, {shiftLabel} from "./styles";
import {css, cx} from "@emotion/css";

interface Input {
   onNameChange: (e: React.FormEvent<HTMLInputElement>) => void;
   label: string,
}
const inputClass = getClasses(styles);
export const Input = ({label, onNameChange}:Input) => {
   const inputId = useId();

   const [value, setValue] = useState<string>("");
   const inputWrapperClasses = useMemo(() =>cx(inputClass.inputWrapper, value ? css(shiftLabel()) : css({})), [value]);

   const handleInputChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
      setValue(e.currentTarget.value)
   }, [])

   return <div className={inputWrapperClasses}>
      <label className={inputClass.label} htmlFor={inputId}>{label}</label>
      <input onInput={onNameChange} onChange={handleInputChange} placeholder={" "} className={inputClass.input} id={inputId} type={"text"} />
   </div>
}