import './OverviewBox.css';
import CallButton from "./CallButton";
import TopicItem from "./TopicItem";
function OverviewBox() {
    return (
            <div className={'overview-wrapper'}>
                <div className={'overview-header'}>
                    Missing a component? Let us know!
                </div>
                <div className={'overview-subheader'}>
                    Do you need a specific AI capability to automate your business process?Let us know and help shaping the future of AI in a Box®.
                </div>
                <CallButton light/>
                <div className={'overview-title'}>
                    We can cover other topics like:
                </div>
                <div className={'topic-group'}>
                    <TopicItem image={'predictive-modeling.png'} text={'Predictive Modeling'}/>
                    <TopicItem image={'sentiment-analysis.png'} text={'Sentiment Analysis'}/>
                    <TopicItem image={'topic-modeling.png'} text={'Topic Modeling'}/>
                    <TopicItem image={'data-analytics.png'} text={'Data Analytics'}/>
                    <TopicItem image={'recommender-system.png'} text={'Recommender System'}/>
                    <TopicItem image={'many-more.png'} text={'Many more'}/>
                </div>
            </div>
    )
}

export default OverviewBox;
