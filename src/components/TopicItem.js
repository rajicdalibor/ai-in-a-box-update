import './TopicItem.css';
import {imageSrc} from "../services/utils";
function TopicItem({image, text}) {
    return(
        <div className={'topic-wrapper'}>
            <img src={imageSrc(image)} alt={image}/>
            <div className={'topic-text'}>{text}</div>
        </div>
    );
}

export default TopicItem;
