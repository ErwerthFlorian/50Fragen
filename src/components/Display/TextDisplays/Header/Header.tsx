import {WithChildren} from "../../../../types";
import React, {useMemo} from "react";
import {useThemeWithCss} from "../../../../themes/useTheme";
import {css, cx} from "@emotion/css";
import {useTranslation} from "../../../../translation/useTranslation";
import pietsmietController from "../../../../media/pictures/pietsmietController.png";

export const HeaderStyles = {
      h1: "h1",
      h2: "h2",
      h3: "h3",
      h4: "h4",
}

interface HeaderProps {
      headerStyle: keyof typeof HeaderStyles,
      children?: WithChildren
}

export const Header = ({ headerStyle, children }: HeaderProps) => {
      const {themeClasses} = useThemeWithCss("Header");
      return React.createElement(headerStyle, {
            children, className: themeClasses
      });
}

export const MainHeader = ({headerStyle}: HeaderProps) => {
      const {themeClasses} = useThemeWithCss("Header");
      const translation = useTranslation("MainHeader");
      const mainHeaderClasses = useMemo(() => cx(css({fontSize: 60, textAlign: "center"}), themeClasses), []);
      const controllerClasses = useMemo(() => cx(css({position: "absolute", top: 0,right: -40, transform: "translateY(-34%) rotate(45deg)", width: 100}), themeClasses), []);
      const wrapperClasses = useMemo(() => cx(css({position: "relative"}), themeClasses), []);
      const Title = React.createElement(headerStyle, {
            children: translation, className: mainHeaderClasses
      })
      return <div className={wrapperClasses}>{Title}<img className={controllerClasses} src={pietsmietController} alt={"Pietsmiet Controller"}/></div>;
}