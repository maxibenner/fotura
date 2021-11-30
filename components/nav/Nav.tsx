import s from "./Nav.module.css";
import { Dropdown, Item } from "../dropdown/Dropdown";
import { useContext } from "react";
import { I18nContext } from "../../context/i18n";

export const Nav = () => {
  const { locale, setLocale } = useContext(I18nContext);

  return (
    <nav className={s.wrapper}>
      <h2 className={s.logo}>Fotura</h2>
      <Dropdown activeIdentifier={locale}>
        <Item
          icon="/icons/icon_usa.svg"
          text="English"
          onClick={() => setLocale("US")}
          identifier="US"
        />
        <Item
          icon="/icons/icon_de.svg"
          text="Deutsch"
          onClick={() => setLocale("DE")}
          identifier="DE"
        />
      </Dropdown>
    </nav>
  );
};
