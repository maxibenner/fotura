import { animated, useSprings } from "@react-spring/web";
import Image from "next/image";
import { useState } from "react";
import { useDrag } from "react-use-gesture";
import {
  Cardboard,
  Club, GiveAMeal,
  Teeshot
} from "../customCards/CustomCards";
import s from "./CardStack.module.css";
const cards = require("../../cards.json");

export const CardStack = () => {
  // Utility function
  const wobble = (input) => {
    const randomModifier = Math.random() + 1;
    return input * randomModifier;
  };

  const [gone] = useState(() => new Set());

  const AnimatedGiveAMeal = animated(GiveAMeal);
  const AnimatedTeeshot = animated(Teeshot);
  const AnimatedCardboard = animated(Cardboard);
  const AnimatedClub = animated(Club);

  const cardArray = [
    AnimatedClub,
    AnimatedCardboard,
    AnimatedTeeshot,
    AnimatedGiveAMeal,
  ];

  // Beginning animation states
  const to = (i) => ({
    x: i * wobble(4),
    y: i * wobble(-8),
    scale: 1,
    rotate: -1 * wobble(7) + wobble(7),
    delay: i * 100,
  });
  const from = (_i) => ({ x: 0, rotate: 0, scale: 1, y: 1000 });

  // Create springs
  const [props, api] = useSprings(cardArray.length, (i) => ({
    ...to(i),
    from: from(i),
    config: {
      friction: 10,
      tension: 70,
      mass: 0.5,
    },
  }));

  // Update spring on drag
  const bindCardPos = useDrag(
    ({
      args: [index],
      movement: [mx, my],
      direction: [dx],
      offset,
      down,
      velocity,
    }) => {
      // Track velocity
      const trigger = velocity > 0.2;

      // Get direction the card has been flicked out
      const dir = dx < 0 ? -1 : 1;

      // Remove item if velocity is high enough upon release
      if (!down && trigger) {
        console.log("remove");
        gone.add(index);
      }

      api.start((i) => {
        // Limit effect to dragged card
        if (index !== i) return;

        const isGone = gone.has(index);
        const x = isGone ? window.innerWidth * dir : down ? mx : i * 4;
        // const y = down ? my : i * -8;
        const rotate = !down ? -1 * wobble(7) + wobble(7) : 0;

        return {
          x: x,
          // y: y,
          scale: down ? 1.05 : 1,
          rotate: rotate,
        };
      });

      // Reset cards
      if (!down && gone.size === cardArray.length)
        setTimeout(() => {
          gone.clear();
          api.start((i) => to(i));
        }, 600);
    }
  );

  return (
    <div className={s.wrapper}>
      <div className={s.card_container}>
        {cardArray.map((Card, i) => (
          <Card key={i} {...bindCardPos(i)} style={props[i]} />
        ))}
      </div>
      <div className={s.promt}>
        <Image src="/icons/hand.svg" width="20px" height="20px" />
        <p>Flick to explore</p>
      </div>
    </div>
  );
};
