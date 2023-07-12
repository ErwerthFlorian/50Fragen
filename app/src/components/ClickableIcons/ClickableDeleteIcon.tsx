import {IconButton} from "@mui/material";
import {Close} from "@mui/icons-material";

export interface ClickableDeleteIconProps {
    onClick: () => void;
}
export const ClickableDelteIcon = ({onClick}: ClickableDeleteIconProps) => {
    return <IconButton onClick={onClick}><Close/></IconButton>
}