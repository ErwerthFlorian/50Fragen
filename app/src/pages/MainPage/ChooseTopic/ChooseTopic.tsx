import {useCallback, useMemo} from "react";
import {useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../../store";
import {getTopics} from "../../../store/selectors/topicSelectors";
import {GeneralTopicInfo, GeneralTopicName} from "../../../data";
import "./styles.css";
import {useFilter} from "../../../hooks/useFilter";
import {TextFieldWithAdornment} from "../../../components/TextFieldWithAdornment/TextFieldWithAdornment";
import {CardWithPicture} from "../../../components/CardWithPicture/CardWithPicture";
import {ClickableDelteIcon} from "../../../components/ClickableIcons/ClickableDeleteIcon";
import {setChosenGeneralTopic} from "../../../store/reducers/topics";

export const ChooseTopic = () => {
    const topics = useAppSelector(getTopics);
    const mappedTopics = useMemo(() => Object.entries(topics) as [GeneralTopicName, GeneralTopicInfo][], [topics]);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [filter,setFilter, filtered] = useFilter(mappedTopics);
    const sortedTopics = useMemo(() => filtered.length > 0 ? [...filtered, ...mappedTopics.filter((topic) => !filtered.includes(topic))]: mappedTopics, [mappedTopics, filtered]);

    const handleGeneralTopicSelection = useCallback(
        (topic: GeneralTopicName) => {
            dispatch(setChosenGeneralTopic(topic));
            navigate("/questionSet");
        },
        [dispatch, setChosenGeneralTopic],
    );

    return (
        <div className="wrapper">
            <div className="topic-filter"><TextFieldWithAdornment Icon={<ClickableDelteIcon onClick={() => setFilter("")} />} label="Kategorien filtern" variant="outlined" value={filter} setValue={setFilter} /></div>
            <div className="topic-wrapper">
            {sortedTopics.map(([generalTopicName, infos]) => {
                const isFiltered = filtered.some(([filteredTopicName]) => filteredTopicName === generalTopicName);
                const paperClassName = `paper ${!isFiltered ? "filtered" : "found"}`
                return <CardWithPicture onClickCard={() => handleGeneralTopicSelection(generalTopicName)} image={infos.titlePicture} cardClasses="topic" paperClasses={paperClassName} cardImageClasses="topic-image" cardContentClasses="topic-text">{generalTopicName}</CardWithPicture>
            })}
        </div></div>
    );
};
