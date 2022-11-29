import {WithChildren} from "../../../types";

export const Form = ({children}: WithChildren) => {
   return <form>
      {children}
   </form>
}

export const FormSubmitButton = ({children}: WithChildren) => {
   return <button type={"submit"}>{children}</button>
}