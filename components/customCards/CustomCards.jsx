import { Card } from "../card/Card";
import s from "./CustomCards.module.css";
import { useContext, useEffect, useState } from "react";
import { I18nContext } from "../../context/i18n";

export const GiveAMeal = ({ ...props }) => {
  const { i18nText } = useContext(I18nContext);

  return (
    <Card
      {...props}
      linkText={i18nText(8)}
      className={s.giveAMeal}
      title="Give a Meal"
      body={i18nText(4)}
      href="https://www.give-a-meal.org"
    />
  );
};

export const Teeshot = ({ ...props }) => {
  const { i18nText } = useContext(I18nContext);

  return (
    <Card
      {...props}
      linkText={i18nText(8)}
      className={s.teeshot}
      title="Teeshot"
      body={i18nText(5)}
      href="https://www.teeshot.fotura.co"
    />
  );
};

export const Cardboard = ({ ...props }) => {
  const { i18nText } = useContext(I18nContext);

  return (
    <Card
      {...props}
      linkText={i18nText(8)}
      className={s.cardboard}
      title="Cardboard"
      body={i18nText(6)}
      href="https://www.cardboard.fotura.co"
    />
  );
};

export const Club = ({ ...props }) => {
  const { i18nText } = useContext(I18nContext);

  return (
    <Card
      {...props}
      linkText={i18nText(8)}
      className={s.club}
      title="Club"
      body={i18nText(7)}
      href="https://www.club.fotura.co"
    />
  );
};
