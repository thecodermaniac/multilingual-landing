import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Image from "../assets/bsnl_Logo-New.png";
// import "../css/login.css";

const Login = () => {
    const { t, i18n } = useTranslation();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [fontSize, setFontSize] = useState("16px");

    const handleLanguageChange = (lang) => {
        i18n.changeLanguage(lang);
        document.body.className = lang;
    };

    const handleFontResize = (size) => {
        setFontSize(size);
        document.documentElement.style.setProperty("--font-size", size);
    };

    const languages = [
        { code: "en", label: "EN" },
        { code: "hi", label: "हिं" },
        { code: "te", label: "తె" },
        { code: "ta", label: "த" },
        { code: "mr", label: "म" },
    ];

    const fontSizes = [
        { size: "14px", label: "A" },
        { size: "16px", label: "A" },
        { size: "18px", label: "A" },
        { size: "20px", label: "A" },
        { size: "22px", label: "A" },
    ];

    return (
        <div className="login-wrapper">
            <div className="left-side">
                <img src={Image} alt="BSNL" className="logo-large" />
            </div>
            <div className="right-side">
                <div className="language-toggle">
                    {languages.map((lang, index) => (
                        <React.Fragment key={lang.code}>
                            <span
                                className={`lang-option ${i18n.language === lang.code ? "active-lang" : ""}`}
                                onClick={() => handleLanguageChange(lang.code)}
                            >
                                {lang.label}
                            </span>
                            {index < languages.length - 1 && <span className="dot-separator">&nbsp;&middot;&nbsp;</span>}
                        </React.Fragment>
                    ))}
                </div>

                <div className="font-resize-toggle">
                    {fontSizes.map(({ size, label }) => (
                        <span
                            key={size}
                            className={`font-option ${fontSize === size ? "active-font" : ""}`}
                            onClick={() => handleFontResize(size)}
                            style={{ fontSize: size }}
                        >
                            {label}
                        </span>
                    ))}
                </div>

                <div className="login-form-container">
                    <h2>{t("login.title")}</h2>
                    <input
                        type="text"
                        placeholder={t("login.username")}
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder={t("login.password")}
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <button>{t("login.button")}</button>
                    <p className="auth-links">
                        <span>{t("login.signup")}</span> / <span>{t("login.forgot")}</span>
                    </p>

                </div>
            </div>
        </div>
    );
};

export default Login;
