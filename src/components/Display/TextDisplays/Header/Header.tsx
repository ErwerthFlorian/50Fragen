import {WithChildren} from "../../../../types";
import React from "react";
import {css} from "@emotion/css";
import {useTheme} from "../../../../themes/useTheme";

export const HeaderStyles = {
      h1: "h1",
      h2: "h2",
      h3: "h3",
      h4: "h4",
}

interface HeaderProps extends WithChildren{
      headerStyle: keyof typeof HeaderStyles,

}

export const Header = ({ headerStyle, children }: HeaderProps) => {
      const {theme} = useTheme("Header");
      return React.createElement(headerStyle, {
            children, className: css({color: theme.color, backgroundColor: theme.backgroundColor})
      });
}