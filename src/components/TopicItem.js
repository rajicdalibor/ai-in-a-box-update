import './topicItem.css';
function TopicItem({image, text}) {
    return(
        <div className={'topic-wrapper'}>
            <img src={`/images/${image}`} alt={image}/>
            <div className={'topic-text'}>{text}</div>
        </div>
    );
}

export default TopicItem;
