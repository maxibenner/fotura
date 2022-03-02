import React, { createContext, useEffect, useState } from "react";

import { langDe } from "../public/locales/de";
import { langEn } from "../public/locales/en";

export const I18nContext = createContext<any>(undefined);

export const I18nContextWrapper = ({ children }: { children: JSX.Element }) => {
  const [locale, setLocale] = useState<string | null>(null);

  // Set user location
  useEffect(() => {
    fetch("https://api.ipregistry.co/?key=9mbbr52gsds5xtyb")
      .then(function (response) {
        return response.json();
      })
      .then(function (payload) {
        const countryCode = payload.location.country.code;
        if (countryCode != "US" || countryCode != "DE") {
          setLocale("US");
        } else setLocale(payload.location.country.code);
      });
  }, []);

  const i18nText = (key: number) => {
    const keyString = JSON.stringify(key);
    if (locale) {
      if (locale === "DE") {
        return langDe[keyString];
      } else {
        return langEn[keyString];
      }
    } else return "";
  };

  return (
    <I18nContext.Provider value={{ setLocale, i18nText, locale }}>
      {children}
    </I18nContext.Provider>
  );
};
