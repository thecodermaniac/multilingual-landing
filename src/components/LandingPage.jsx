import React from 'react';
import { useTranslation } from 'react-i18next';
import illustration from '../assets/Illustration.png'
import client_logo from '../assets/Clients Logos.png'
import testi1 from '../assets/Frame 35.png'
import blog1 from '../assets/image 18.png'
import blog2 from '../assets/image 19.png'
import blog3 from '../assets/image 20.png'
import socials from '../assets/Social Links.png'
import logo from '../assets/Icon.png'
import feat1 from '../assets/Icon2.png'
import feat2 from '../assets/Icon3.png'
import feat3 from '../assets/Icon4.png'
// import './LandingPage.css';

const LandingPage = () => {
    const { t } = useTranslation();

    return (
        <>
            <header className="hero-section">
                <div className="hero-text">
                    <h1>{t("welcome")}</h1>
                    <p>{t("description")}</p>
                    <button>{t("cta")}</button>
                </div>
                <img className="hero-image" src={illustration} />
            </header>

            <section className="clients">
                <h2>{t("clients")}</h2>
                <div className='logo-parent'>
                    <img className="client-logos" src={client_logo} />
                </div>
            </section>

            <section className="features">
                <div className="feature">
                    <img src={feat1} />
                    <h3>{t("feature1.title")}</h3>
                    <p>{t("feature1.desc")}</p>
                </div>
                <div className="feature">
                    <img src={feat2} />
                    <h3>{t("feature2.title")}</h3>
                    <p>{t("feature2.desc")}</p>
                </div>
                <div className="feature">
                    <img src={feat3} />
                    <h3>{t("feature3.title")}</h3>
                    <p>{t("feature3.desc")}</p>
                </div>
            </section>

            <section className="stats">
                <div className="stat"><strong>2,245,341</strong><br />{t("stats.users")}</div>
                <div className="stat"><strong>46,328</strong><br />{t("stats.customers")}</div>
                <div className="stat"><strong>828,867</strong><br />{t("stats.downloads")}</div>
                <div className="stat"><strong>1,926,436</strong><br />{t("stats.revenue")}</div>
            </section>

            <section className="testimonial">
                <img className="testimonial-image" src={testi1} />
                <div className="testimonial-text">
                    <h2>{t("testimonial.quote")}</h2>
                    <h3>{t("testimonial.author")}</h3>
                </div>
            </section>

            <section className="blog">
                <h2>{t("blog.title")}</h2>
                <div className="blog-cards">
                    <div className="card"><img src={blog1} /><h3>{t("blog.card1")}</h3></div>
                    <div className="card"><img src={blog2} /><h3>{t("blog.card2")}</h3></div>
                    <div className="card"><img src={blog3} /><h3>{t("blog.card3")}</h3></div>
                </div>
            </section>

            <footer className="footer">
                <div className="footer-content">
                    <div className="footer-brand-social">
                        <div className="footer-brand"><img src={logo} /> Multi-Lang</div>
                        <p>{t("footer.copyright")}</p>
                        <img className="social-icons" src={socials} />
                    </div>
                    <div className="footer-columns">
                        <div>
                            <h4>{t("footer.company.title")}</h4>
                            <ul>
                                <li>{t("footer.company.about")}</li>
                                <li>{t("footer.company.blog")}</li>
                                <li>{t("footer.company.contact")}</li>
                                <li>{t("footer.company.pricing")}</li>
                                <li>{t("footer.company.testimonials")}</li>
                            </ul>
                        </div>
                        <div>
                            <h4>{t("footer.support.title")}</h4>
                            <ul>
                                <li>{t("footer.support.help")}</li>
                                <li>{t("footer.support.terms")}</li>
                                <li>{t("footer.support.legal")}</li>
                                <li>{t("footer.support.privacy")}</li>
                                <li>{t("footer.support.status")}</li>
                            </ul>
                        </div>
                        <div className="footer-subscribe">
                            <h4>{t("footer.subscribe.title")}</h4>
                            <div className="subscribe-box">
                                <input type="email" placeholder={t("footer.subscribe.placeholder")} />
                                <button className="subscribe-btn">📩</button>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default LandingPage;
