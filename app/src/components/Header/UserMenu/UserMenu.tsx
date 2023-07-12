import { useCallback, useRef, useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useAppSelector } from "../../../store";
import { getUserName } from "../../../store/selectors/authSelectors";
import { IconButton } from "@mui/material";
import "./styles.css";

export const UserMenu = () => {
    const iconRef = useRef<HTMLDivElement>(null);
    const [open, setOpen] = useState(false);
    const userName = useAppSelector(getUserName);

    const handleClick = useCallback(() => {
        setOpen(!open);
    }, [open]);
    const handleClose = useCallback(() => setOpen(false), []);

    return (
        <div className="avatar-outer-wrapper">
            <IconButton id="basic-button" aria-controls={open ? "basic-menu" : undefined} aria-haspopup="true" aria-expanded={open ? "true" : undefined} onClick={handleClick}>
                <div className="avatar-wrapper">{userName}</div>
            </IconButton>
            <div className="anchor" ref={iconRef}></div>
            <Menu
                id="basic-menu"
                anchorEl={iconRef.current}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    "aria-labelledby": "basic-button",
                }}
            >
                <MenuItem className="menu-wrapper">Theme</MenuItem>
            </Menu>
        </div>
    );
};
