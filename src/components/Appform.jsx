
import React, { useState } from "react";
import "../components/Appform.css";
import { useTranslation } from "react-i18next";

const Appform = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const { t } = useTranslation();

 const BOT_TOKEN = "8401399403:AAEYv3xfW0VeKepB4nTAtzz_t7RhRY-Kklw"; // BotFather bergan token
  const CHAT_ID = "-1002930784916"; // o'zingiz yoki guruh ID
  const TELEGRAM_URL = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

  const handleSubmit = async () => {
    if (!name || !phone) {
      alert(t("formErrors.fillAll")); // xato xabarni ham i18n qilish mumkin
      return;
    }

    const message = `📩 ${t("appform.left.smallTitle")}:\n👤 ${t("appform.left.namePlaceholder")}: ${name}\n📞 ${t("appform.left.phonePlaceholder")}: ${phone}`;

    try {
      await fetch(TELEGRAM_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: message,
        }),
      });

      alert(t("formSuccess.sent"));
      setName("");
      setPhone("");
    } catch (error) {
      console.error("Xatolik:", error);
      alert(t("formErrors.sendError"));
    }
  };

  return (
    <div className="container">
      <div className="app-form">
        {/* Chap blok */}
        <div className="appform-left">
          <h5>{t("appform.left.smallTitle")}</h5>
          <h2>{t("appform.left.bigTitle")}</h2>
          <p>{t("appform.left.desc")}</p>

          <div className="appform-inputs">
            <input
              type="text"
              placeholder={t("appform.left.namePlaceholder")}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="tel"
              placeholder={t("appform.left.phonePlaceholder")}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <button className="appform-button" onClick={handleSubmit}>
            {t("appform.left.button")}
          </button>
        </div>

        {/* O‘ng blok */}
        <div className="appform-right">
          <h5>{t("appform.right.smallTitle")}</h5>
          <h2>{t("appform.right.bigTitle")}</h2>
          <p>{t("appform.right.addressLabel")}</p>
          <h3>{t("appform.right.address")}</h3>
          <div>
            <p>{t("appform.right.phone")}</p>
            <p>
              <i className="bx bxl-telegram"></i> {t("appform.right.telegram")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appform;
