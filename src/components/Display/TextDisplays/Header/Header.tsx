import {WithChildren} from "../../../../types";
import React from "react";
import {useThemeWithCss} from "../../../../themes/useTheme";

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
      const {themeClasses} = useThemeWithCss("Header");
      return React.createElement(headerStyle, {
            children, className: themeClasses
      });
}