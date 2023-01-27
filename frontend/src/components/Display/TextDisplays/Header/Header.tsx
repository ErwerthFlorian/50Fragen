import React, {useMemo} from "react";
import {useTheme} from "../../../../themes/useCurrentTheme";
import {css, cx} from "@emotion/css";
import {useTranslation} from "../../../../translation/useTranslation";
import pietsmietController from "../../../../media/pictures/pietsmietController.png";
import {WithChildren} from "../../../../types";
import {getClasses} from "../../types";
import styles from "./styles";

export const HeaderStyles = {
      h1: "h1",
      h2: "h2",
      h3: "h3",
      h4: "h4",
}

interface HeaderProps extends Partial<WithChildren> {
      headerStyle: keyof typeof HeaderStyles,
}

const headerClass = getClasses(styles);
export const Header = ({ headerStyle, children }: HeaderProps) => {
      const theme = useTheme();
      const headerClasses = useMemo(() => cx(headerClass.header, css({color: theme.textColor})), [theme]);
      return React.createElement(headerStyle, {
            children: children, className: headerClasses
      });
}

export const MainHeader = ({headerStyle}: HeaderProps) => {
      const theme = useTheme();
      const translation = useTranslation("MainHeader");
      const mainHeaderClasses = useMemo(() => cx(css({fontSize: 60})), [theme]);
      const controllerClasses = useMemo(() => cx(css({position: "absolute", top: 0,right: -33, transform: "translateY(-34%) rotate(45deg)", width: 100})), []);
      const wrapperClasses = useMemo(() => cx(css({position: "relative"}), ), []);
      const Title = React.createElement(headerStyle, {
            children: translation, className: mainHeaderClasses
      })
      return <div className={wrapperClasses}>{Title}<img className={controllerClasses} src={pietsmietController} alt={"Pietsmiet Controller"}/></div>;
}