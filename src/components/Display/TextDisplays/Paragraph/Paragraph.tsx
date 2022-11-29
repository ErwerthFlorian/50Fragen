import {WithChildren} from "../../../../types";
import {useTheme} from "../../../../themes/useTheme";
import {css} from "@emotion/css";

export const Paragraph = ({children}: WithChildren) => {
      const {theme} = useTheme("Paragraph");
      const classes = css({color: theme.color, backgroundColor: theme.backgroundColor});
      return <p className={classes}>{children}</p>
}