import React from 'react';
import { useTranslation } from 'react-i18next';
import './LandingPage.css';

const LandingPage = () => {
    const { t } = useTranslation();

    return (
        <section className="hero">
            <div className="hero-content">
                <h1>{t('welcome')}</h1>
                <p>{t('description')}</p>
                <button>{t('contact')}</button>
            </div>
        </section>
    );
};

export default LandingPage;
