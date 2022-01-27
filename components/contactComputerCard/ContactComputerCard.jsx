import s from "./contactComputerCard.module.css";
import { useState, useEffect, useRef } from "react";
import { SpeechBubble } from "../speechBubble/SpeechBubble";

export const ContactComputerCard = ({
  title,
  body,
  imgSrc,
  children,
  className,
  linkText,
  href,
  ...props
}) => {
  // useEffect(() => {
  //   window.addEventListener("mousemove", handleMouseMove);
  //   return () => window.removeEventListener("mousemove", handleMouseMove);
  // }, []);

  const [isHovered, setIsHovered] = useState(false);

  const leftPupilRef = useRef();
  const rightPupilRef = useRef();

  // const [mousePos, setMousePos] = useState([0, 0]);
  const [leftEyePos, setLeftEyePos] = useState([1, 2]);
  const [rightEyePos, setRightEyePos] = useState([1, 2]);

  const handleMouseMove = ({ clientX, clientY }) => {
    // Get mouse percent distance compared to window
    const xPercent = (clientX / window.innerWidth) * 100;
    const yPercent = (clientY / window.innerHeight) * 100;

    // Get pupil position in window in percent
    const pupilLeftPosition = leftPupilRef.current.offsetTop
    console.log(pupilLeftPosition)

    // console.log(`w: ${xPercent.toFixed(0)}%, y: ${yPercent.toFixed(0)}%`);

    // Set eye pos
    setLeftEyePos([12 * xPercent, 13 * yPercent]);
    setRightEyePos([12 * xPercent, 13 * yPercent]);

    // setMousePos([clientX, clientY]);
  };

  // useEffect(() => {
  //   // Turn into percent
  //   const xPercent = mousePos[0] / window.innerWidth;
  //   const yPercent = mousePos[1] / window.innerHeight;

  //   // Set eye pos
  //   setLeftEyePos([12 * xPercent, 13 * yPercent]);
  //   setRightEyePos([12 * xPercent, 13 * yPercent]);
  // }, [mousePos]);
  return (
    <div className={`${s.wrapper} ${className && className}`} {...props}>
      {/* LOGO */}
      <div className={s.logoContainer}>
        <div
          className={s.eye}
          style={{ marginTop: "-5px", marginRight: "-5px", zIndex: 2 }}
        >
          <div
            ref={leftPupilRef}
            style={{
              transform: `translate(${leftEyePos[0]}px, ${leftEyePos[1]}px)`,
            }}
          />
        </div>
        <div className={s.eye}>
          <div
            ref={rightPupilRef}
            style={{
              transform: `translate(${rightEyePos[0]}px, ${rightEyePos[1]}px)`,
            }}
          />
        </div>
      </div>
      {/* LOGO END */}
      <SpeechBubble style={{ top: "90px", left: "10px" }} />
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
            <h3>{linkText}</h3>
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
