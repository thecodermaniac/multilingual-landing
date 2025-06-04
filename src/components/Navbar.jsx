import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import logo from '../assets/Icon-dark.png'

const Navbar = () => {
    const { t, i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);

    const changeLanguage = (e) => {
        const lang = e.target.value;
        i18n.changeLanguage(lang);
        document.body.className = lang;
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="logo"><img src={logo} />Multi-Lang</div>
            <ul className="nav-links-desk">
                <li>{t("navbar.home")}</li>
                <li>{t("navbar.features")}</li>
                <li>{t("navbar.pricing")}</li>
                <li>{t("navbar.about")}</li>
            </ul>

            <select onChange={changeLanguage} className="lang-select-desk">
                <option value="en">English</option>
                <option value="hi">हिन्दी</option>
                <option value="ta">தமிழ்</option>
                <option value="te">తెలుగు</option>
                <option value="mr">मराठी</option>
            </select>
            <button className="hamburger" onClick={toggleMenu}>
                ☰
            </button>

            <ul className={`nav-links ${isOpen ? "open" : ""}`}>
                <li>{t("navbar.home")}</li>
                <li>{t("navbar.features")}</li>
                <li>{t("navbar.pricing")}</li>
                <li>{t("navbar.about")}</li>
                <li>
                    <select onChange={changeLanguage} className="lang-select">
                        <option value="en">English</option>
                        <option value="hi">हिन्दी</option>
                        <option value="ta">தமிழ்</option>
                        <option value="te">తెలుగు</option>
                        <option value="mr">मराठी</option>
                    </select>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
