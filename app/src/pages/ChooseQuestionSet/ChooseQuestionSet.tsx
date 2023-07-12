import { useAppDispatch, useAppSelector } from "../../store";
import { getChosenGeneralTopic, getTopicInfos } from "../../store/selectors/topicSelectors";
import { useCallback, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { CardWithPicture } from "../../components/CardWithPicture/CardWithPicture";
import "./styles.css";
import { setChosenPackName } from "../../store/reducers/topics";
import { setRoomID } from "../../store/reducers/game.ts";

const generateRoomId = () => (Math.random() * 90000 + 10000).toFixed(0);

export const ChooseQuestionSet = () => {
    const chosenTopic = useAppSelector(getChosenGeneralTopic);
    const infos = useAppSelector(getTopicInfos);
    const navigate = useNavigate();
    const extractedInfos = useMemo(
        () =>
            Object.entries(infos?.packs ?? []).map(([packName, { id }]) => {
                return { packName, id };
            }),
        [infos]
    );
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!chosenTopic) {
            navigate("/");
        }
    }, []);

    const handleSelectQuestionPack = useCallback(
        (packName: string) => {
            const roomId = generateRoomId();
            dispatch(setChosenPackName(packName));
            dispatch(setRoomID(roomId));
            navigate(`/preroom/${roomId}`);
        },
        [dispatch, setChosenPackName]
    );

    const getYoutubePictureSrc = useCallback((id: string) => {
        return `https://img.youtube.com/vi/${id}/0.jpg`;
    }, []);

    return (
        <>
            {chosenTopic && <h2>Wähle ein Frageset zur Kategorie {chosenTopic}</h2>}
            {infos && (
                <div className="pack-wrapper">
                    {extractedInfos.map(({ packName, id }) => (
                        <CardWithPicture
                            cardClasses="pack"
                            cardImageClasses="pack-image"
                            onClickCard={() => handleSelectQuestionPack(packName)}
                            image={getYoutubePictureSrc(id)}
                        >
                            {packName}
                        </CardWithPicture>
                    ))}
                </div>
            )}
        </>
    );
};
