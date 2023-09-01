import "./Navigation.css";
import { useEffect, useState } from "react";
import CallButton from "./CallButton";
import {goToLink, imageSrc} from "../services/utils";


const links = [
    {id: 'ai', label: 'AI in a Box®'},
    {id: 'components', label: 'Components'},
    {id: 'services', label: 'Services'},
    {id: 'aboutUs', label: 'About Us'},
]
function Navigation() {
    const [activeLink, setActiveLink] = useState('');
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const hash = window?.location?.hash;
        if(hash) {
            setActiveLink(hash.slice(1));
        }
    }, []);

    const onMenuClick = (id) => {
        setActiveLink(id);
        setMenuOpen(false);
    }

    const onSelect = (id) => {
        activeLink === id ?  setActiveLink('') : setActiveLink(id);
    }

    return (
        <div className={"sticky-header"}>
            <div className={"navigation-wrapper"}>
                <div className={"logo-icon"}><img src={imageSrc('logo.svg')} alt={'logo'}/></div>
                <div className={'navigation-links'}>
                    {links.map(link => {
                            if (link.subitems?.length) {
                                return <div key={link.id}>
                                    <div className={'item-with-submenu'} onClick={() => onSelect(link.id)}>
                                        <div className={`submenu-item ${activeLink === link.id ? 'link-active' : ''}`}>
                                            <div>{link.label}</div>
                                        </div>
                                        {activeLink === link.id ?
                                            <img src={imageSrc('arrow-up-blue.svg')} alt='accordion' className={activeLink === link.id ? 'accordion-active' : 'accordion-inactive'}/> :
                                            <img src={imageSrc('arrow-up-dark.svg')} alt='accordion' className={activeLink === link.id ? 'accordion-active' : 'accordion-inactive'}/>}
                                        {activeLink === link.id && <div className={'navigation-submenu'}>
                                            {link.subitems.map(item =>
                                                <div key={item.label} className={'subitems'} onClick={() => goToLink(item.link)}>
                                                    <div>{item.label}</div>
                                                    <img src={imageSrc('link.svg')} alt={'link'}/>
                                                </div>
                                            )}
                                        </div>}
                                    </div>
                                </div>
                            } else {
                                return (
                                    <a key={link.id}
                                       className={activeLink === link.id ? 'link-active' : ''}
                                       href={`#${link.id}`} onClick={() => onSelect(link.id)}>{link.label}
                                    </a>)
                            }
                        }
                    )}
                    <CallButton />
                </div>

                {!menuOpen &&
                    <div className={'burger-menu'}>
                        <img src={imageSrc('menu.svg')} alt={'menu'} onClick={() => setMenuOpen(true)}/>
                    </div>}
                {menuOpen && <div className={'burger-menu'}>
                    <img src={imageSrc('close.svg')} alt={'menu'} onClick={() => setMenuOpen(false)}/>
                </div>}
                <div className={`link-menu ${menuOpen ? 'show' : 'hide'}`}>
                    <div className={'menu-wrapper'}>
                        {links.map(link => {
                            if (link.subitems?.length) {
                                return <div key={link.id}>
                                    <div className={'item-with-submenu mobile-submenu-wrapper'} onClick={() => onSelect(link.id)}>
                                        <div className={`submenu-item ${activeLink === link.id ? 'link-active' : ''}`}>
                                            <div>{link.label}</div>
                                        {activeLink === link.id ?
                                            <img src={imageSrc('arrow-up-blue.svg')} alt='accordion' className={activeLink === link.id ? 'accordion-active' : 'accordion-inactive'}/> :
                                            <img src={imageSrc('arrow-up-dark.svg')} alt='accordion' className={activeLink === link.id ? 'accordion-active' : 'accordion-inactive'}/>}
                                        </div>
                                        {activeLink === link.id && <div className={"mobile-submenu-items"}>
                                            {link.subitems.map(item =>
                                                <div key={item.label} className={'subitems'} onClick={() => goToLink(item.link)}>
                                                    <div>{item.label}</div>
                                                    <img src={imageSrc('link-small.svg')} alt={'link'}/>
                                                </div>
                                            )}
                                        </div>}
                                    </div>
                                </div>
                            } else {
                                return (
                                    <a key={link.id} className={activeLink === link.id ? 'link-active' : ''}
                                       href={`#${link.id}`}
                                       onClick={() => onMenuClick(link.id)}>{link.label}</a>
                                )}
                        })}
                        <div className={'menu-footer'}>
                            <div><CallButton /></div></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navigation;
