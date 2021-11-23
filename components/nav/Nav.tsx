import s from "./Nav.module.css";
import { Dropdown, Item } from "../dropdown/Dropdown";

export const Nav = () => {
  return (
    <nav className={s.wrapper}>
      <h2 className={s.logo}>Fotura</h2>
      {/* <Dropdown>
        <Item icon="/icons/icon_usa.svg" text="English" />
        <Item icon="/icons/icon_de.svg" text="Deutsch" />
      </Dropdown> */}
    </nav>
  );
};
