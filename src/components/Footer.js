import './Footer.css';
import {goToLink, imageSrc} from "../services/utils";
function Footer() {
    return (
        <div id={'aboutUs'} className={'footer-wrapper'}>
            <div className={'footer-content'}>
                <img src={imageSrc('logo.svg')} alt={'logo'} className={'footer-logo'}/>
                <div className={'footer-contact'}>
                    <div className={'footer-company'}>3ap AG</div>
                    <div className={'footer-address'}>Aargauerstrasse 250</div>
                    <div className={'footer-address'}>8048 Zürich Switzerland</div>
                    <a className={'footer-address'} href="tel:+41 44 798 28 33">+41 44 798 28 33</a>
                    <a className={'footer-address'} href = "mailto: sayhi@3ap.ch">Sayhi@3ap.ch</a>
                </div>
                <div className={'footer-links'}>
                    <div className={'footer-networks'}>
                        <img src={imageSrc('instagram.png')} alt={'instagram'} onClick={() => goToLink('https://www.instagram.com/3ap.ch/ ')}/>
                        <img src={imageSrc('linkedin.png')} alt={'linkedin'} onClick={() => goToLink(' https://www.linkedin.com/company/3ap---as-agile-as-possible')}/>
                        <img src={imageSrc('twitter.png')} alt={'twitter'} onClick={() => goToLink('https://twitter.com/3ap_inside ')}/>
                    </div>
                    <div className={'footer-policy'}>
                        <div onClick={() => goToLink('https://3ap.ch/en/info/data-policy')}>Privacy Policy</div>
                        <div onClick={() => goToLink('https://3ap.ch/en/info/impressum ')}>Imprint</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
