import s from "./Card.module.css";
import { useState } from "react";

export const Card = ({
  title,
  body,
  imgSrc,
  children,
  className,
  href,
  ...props
}) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className={`${s.wrapper} ${className && className}`} {...props}>
      <div className={s.container} style={{ background: `url(${imgSrc})` }}>
        <div className={s.body}>
          <h2>{title}</h2>
          <p>{body}</p>
          <a
            className={s.link}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            href={href}
            target="_empty"
          >
            <h3>Visit</h3>
            <h3
              style={{
                transform: isHovered ? "translateX(5px)" : "translateX(0)",
              }}
            >
              &rarr;
            </h3>
          </a>
        </div>
        {children}
      </div>
    </div>
  );
};
