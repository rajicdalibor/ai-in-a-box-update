import ContentHeader from "./ContentHeader";
import "./ContentBox.css";
import {goToLink, imageSrc} from "../services/utils";

function ContentBox({id, headerData, contentHeader, contentText, image, imageFirst, buttonText, contentLink, paddingTopLarge}) {
    return (
        <section className={`content-box-container ${paddingTopLarge ? 'padding-top-large' : ''}`} id={id}>
            {headerData && <div className={'content-box-header'}><ContentHeader headerData={headerData} /></div> }
            <div className={`content-details ${imageFirst ? "reverse-order" : ""}`}>
                <div className={'content-details-text'}>
                    {buttonText && <div className={'content-header-title'}>
                        {buttonText}
                    </div>}
                    <div className={'content-details-header'}>
                        {contentHeader}
                    </div>
                    <div>
                        {contentText.map((text, key) => <span key={key}>{text}</span> )}
                    </div>
                    {contentLink &&
                        <div className={'content-link'} onClick={() => goToLink(contentLink)}>
                            <div>Try Out Now</div>
                            <img src={imageSrc('arrow-right.svg')} alt={'arrow-right'}/>
                        </div>}
                </div>
                <img className={'content-image'} src={imageSrc(image)} alt={image}/>
            </div>
        </section>
    )
}

export default ContentBox;