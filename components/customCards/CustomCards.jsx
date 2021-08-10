import { Card } from "../card/Card";
import s from "./CustomCards.module.css";

export const GiveAMeal = ({ ...props }) => {
  return (
    <Card
      {...props}
      className={s.giveAMeal}
      title="Give a Meal"
      body="A technology enabled, decentralised food pantry."
      href="https://www.give-a-meal.org"
    />
  );
};

export const Teeshot = ({ ...props }) => {
  return (
    <Card
      {...props}
      className={s.teeshot}
      title="Teeshot"
      body="CG t-shirt animations for POD sellers."
      href="https://www.teeshot.fotura.co"
    />
  );
};

export const Cardboard = ({ ...props }) => {
  return (
    <Card
      {...props}
      className={s.cardboard}
      title="Cardboard"
      body="Simple cloud storage for analog memories."
      href="https://www.cardboard.fotura.co"
    />
  );
};

export const Club = ({ ...props }) => {
  return (
    <Card
      {...props}
      className={s.club}
      title="Club"
      body="Voice-first platform for communities that stick together."
      href="https://www.club.fotura.co"
    />
  );
};
