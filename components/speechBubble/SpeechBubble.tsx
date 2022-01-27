import React, { useContext } from "react";
import styles from "./speechBubble.module.css";
import { I18nContext } from "../../context/i18n";

export const SpeechBubble = ({ style }: { style: React.CSSProperties }) => {
  const { i18nText } = useContext(I18nContext);
  return (
    <div className={styles.container} style={style}>
      <h3 className={styles.title}>{i18nText(10)}</h3>
      <p className={styles.description}>{i18nText(11)}</p>
    </div>
  );
};
