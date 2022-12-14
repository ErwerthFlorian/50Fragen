import {WithChildren} from "../../../../types";
import {useThemeWithCss} from "../../../../themes/useCurrentTheme";


export const Paragraph = ({children}: WithChildren) => {
      const {themeClasses} = useThemeWithCss("Paragraph");
      return <p className={themeClasses}>{children}</p>
}