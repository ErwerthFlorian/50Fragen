import "./styles.css";
import { useAppSelector } from "../../store";
import { getChosenGeneralTopic, getChosenPackName } from "../../store/selectors/topicSelectors.ts";

export const QuestionTracker = () => {
    const topic = useAppSelector(getChosenGeneralTopic);
    const packname = useAppSelector(getChosenPackName);
    return (
        <p className={"play-page-tracker"}>
            Frage 3 / 50 aus {topic}: {packname}
        </p>
    );
};
