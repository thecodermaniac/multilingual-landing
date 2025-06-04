import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './Navbar.css';

const Navbar = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
        document.body.className = lang;
    };

    useEffect(() => {
        document.body.className = i18n.language;
    }, [i18n.language]);

    return (
        <nav className="navbar">
            <div className="logo">Multilingual</div>
            <div className="language-select">
                <label>{t('language')}:</label>
                <select onChange={(e) => changeLanguage(e.target.value)} value={i18n.language}>
                    <option value="en">English</option>
                    <option value="hi">हिन्दी</option>
                    <option value="ta">தமிழ்</option>
                    <option value="te">తెలుగు</option>
                    <option value="mr">मराठी</option>
                </select>
            </div>
        </nav>
    );
};

export default Navbar;
