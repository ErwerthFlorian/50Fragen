import {Card, CardContent, CardMedia, Paper} from "@mui/material";
import {PropsWithChildren, useCallback} from "react";

interface CardWithPictureProps extends PropsWithChildren {
    paperClasses?: string;
    cardClasses?: string;
    cardImageClasses?: string;
    cardContentClasses?: string;
    image: string;
    onClickCard?: () => void;
}

export const CardWithPicture = ({paperClasses, cardClasses, cardImageClasses, cardContentClasses, onClickCard, image, children}: CardWithPictureProps) => {

    const handleClickCard = useCallback(() => {
        onClickCard?.();
    }, [onClickCard])

    return <Paper className={paperClasses} onClick={handleClickCard}  elevation={2}>
        <Card className={cardClasses}>
            <CardMedia className={cardImageClasses} image={image}></CardMedia>
            <CardContent className={cardContentClasses}>{children}</CardContent>
        </Card>
    </Paper>
}