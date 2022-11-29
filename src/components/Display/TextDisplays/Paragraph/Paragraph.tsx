import {WithChildren} from "../../../../types";
import {useThemeWithCss} from "../../../../themes/useTheme";

export const Paragraph = ({children}: WithChildren) => {
      const {themeClasses} = useThemeWithCss("Paragraph");
      return <p className={themeClasses}>{children}</p>
}