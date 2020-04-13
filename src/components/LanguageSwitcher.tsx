import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import Select from "@material-ui/core/Select";

import { getCurrentLanguage } from "../utils/i18n";

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const [language, setLanguage] = useState(getCurrentLanguage());

  const languages = [
    {
      id: "en",
      name: "English",
    },
    {
      id: "fr",
      name: "Français",
    },
  ];

  const handleChangeLanguage = async (event: any) => {
    setLanguage(event.target.value);
    window.localStorage.setItem("language", event.target.value);
    await i18n.changeLanguage(event.target.value);
  };

  return (
    <Select
      value={language}
      native
      disableUnderline
      onChange={handleChangeLanguage}
    >
      {languages.map((language) => (
        <option key={language.id} value={language.id}>
          {language.name}
        </option>
      ))}
    </Select>
  );
}

export default LanguageSwitcher;
