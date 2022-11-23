import {WithChildren} from "../../../types";

export const Form = ({children}: WithChildren) => {

   return <form>
      {children}
   </form>
}

export const FormHeader = ({children}: WithChildren) => {
   return <h2>{children}</h2>
}

export const FormText = ({children}: WithChildren) => {
   return <div>{children}</div>
}

export const FormSubmitButton = ({children}: WithChildren) => {
   return <button type={"submit"}>{children}</button>
}