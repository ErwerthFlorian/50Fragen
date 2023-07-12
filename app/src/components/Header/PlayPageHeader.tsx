import "./styles.css";
import { useMemo } from "react";
import { useAppSelector } from "../../store";
import { getUserName } from "../../store/selectors/authSelectors";
import { UserMenu } from "./UserMenu/UserMenu";

export const PlayPageHeader = () => {
    const userName = useAppSelector(getUserName);
    const showName = useMemo(() => userName && userName.length > 0, [userName]);

    return (
        <div className="header">
            <div className="header-group">{showName && <UserMenu />}</div>
        </div>
    );
};
