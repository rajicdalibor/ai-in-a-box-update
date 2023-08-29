import "./navigation.css";
import { useState } from "react";
import CallButton from "./CallButton";
import {goToLink} from "../services";


const links = [
    {id: 'ai', label: 'AI in a Box®'},
    {id: 'components', label: 'Components'},
    {id: 'services', label: 'Services'},
    {id: 'demos', label: 'Demos', subitems: [{label:'Document Classification', link: 'https://www.google.com'}, {label:'Field Extraction', link: 'https://www.google.com'}]},
    {id: 'aboutUs', label: 'About Us'},
]
function Navigation() {
    const hash = window?.location?.hash;

    const [activeLink, setActiveLink] = useState(hash);
    const [menuOpen, setMenuOpen] = useState(false);

    const onMenuClick = (id) => {
        setActiveLink(id);
        setMenuOpen(false);
    }

    return (
        <div className={"sticky-header"}>
            <div className={"navigation-wrapper"}>
                <div className={"logo-icon"}><img src={"/images/logo.svg"} alt={'logo'}/></div>
                <div className={'navigation-links'}>
                    {links.map(link => {
                            if (link.subitems?.length) {
                                return <div key={link.id}>
                                    <div className={'item-with-submenu'} onClick={() => setActiveLink(link.id)}>
                                        <div className={`submenu-item ${activeLink === link.id ? 'link-active' : ''}`}>
                                            <div>{link.label}</div>
                                        </div>
                                        {activeLink === link.id ?
                                            <img src={'/images/arrow-up-blue.svg'} alt='accordion' className={activeLink === link.id ? 'accordion-active' : 'accordion-inactive'}/> :
                                            <img src={'/images/arrow-up-dark.svg'} alt='accordion' className={activeLink === link.id ? 'accordion-active' : 'accordion-inactive'}/>}
                                        {activeLink === link.id && <div className={'navigation-submenu'}>
                                            {link.subitems.map(item =>
                                                <div key={item.label} className={'subitems'} onClick={() => goToLink(item.link)}>
                                                    <div>{item.label}</div>
                                                    <img src={'/images/link.svg'} alt={'link'}/>
                                                </div>
                                            )}
                                        </div>}
                                    </div>
                                </div>
                            } else {
                                return (
                                    <a key={link.id}
                                       className={activeLink === link.id ? 'link-active' : ''}
                                       href={`#${link.id}`} onClick={() => setActiveLink(link.id)}>{link.label}
                                    </a>)
                            }
                        }
                    )}
                    <CallButton />
                </div>

                {!menuOpen &&
                    <div className={'burger-menu'}>
                        <img src={'/images/menu.svg'} alt={'menu'} onClick={() => setMenuOpen(true)}/>
                    </div>}
                {menuOpen && <div className={'burger-menu'}>
                    <img src={'/images/close.svg'} alt={'menu'} onClick={() => setMenuOpen(false)}/>
                </div>}
                <div className={`link-menu ${menuOpen ? 'show' : 'hide'}`}>
                    <div className={'menu-wrapper'}>
                        {links.map(link => {
                            if (link.subitems?.length) {
                                return <div key={link.id}>
                                    <div className={'item-with-submenu mobile-submenu-wrapper'} onClick={() => setActiveLink(link.id)}>
                                        <div className={`submenu-item ${activeLink === link.id ? 'link-active' : ''}`}>
                                            <div>{link.label}</div>
                                        {activeLink === link.id ?
                                            <img src={'/images/arrow-up-blue.svg'} alt='accordion' className={activeLink === link.id ? 'accordion-active' : 'accordion-inactive'}/> :
                                            <img src={'/images/arrow-up-dark.svg'} alt='accordion' className={activeLink === link.id ? 'accordion-active' : 'accordion-inactive'}/>}
                                        </div>
                                        {activeLink === link.id && <div className={"mobile-submenu-items"}>
                                            {link.subitems.map(item =>
                                                <div key={item.label} className={'subitems'} onClick={() => goToLink(item.link)}>
                                                    <div>{item.label}</div>
                                                    <img src={'/images/link.svg'} alt={'link'}/>
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
