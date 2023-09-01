import './Header.css';
import {imageSrc} from "../services/utils";
function Header() {
    return (
        <div className={'header-wrapper'}>
            <div className={'main-header'}>
                <div className={'main-title'}>AI in a Box<span className={'r-button'}>®</span></div>
            </div>
                <div className={'header-subtitle'}>We help make automation faster.</div>
                <p className={'header-content'}>
                    AI in a Box® is our cloud-based <span className={'content-highlighted'}>platform</span>, that hosts modular and scalable <span className={'content-highlighted'}>ML components</span>, on top of which we build <span className={'content-highlighted'}>tailored services.</span>
                </p>
            <div className={'header-subtext'}>Integrate the capabilities of AI in your business.</div>
            <img className={'header-image'} src={imageSrc('hero-illustration.svg')} alt={'computer'}/>
        </div>
    )
}

export default Header;
