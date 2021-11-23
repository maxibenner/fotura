// import React, { createContext, useContext, useMemo, useCallback } from "react";

// const I18nContext = createContext("en");

// const useI18nContext = () => useContext(I18nContext);

// // The messages are passed to the Provider
// const I18nProvider: React.FC<any> = ({ children, locale, messages }) => {
//   // The user needs to only pass the messageKey
//   const getMessage = useCallback(
//     (messageKey: string) => {
//       return messages[locale][messageKey];
//     },
//     [locale, messages]
//   );

//   const value = useMemo(
//     () => ({
//       locale,
//       getMessage,
//     }),
//     [locale, getMessage]
//   );

//   return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
// };
