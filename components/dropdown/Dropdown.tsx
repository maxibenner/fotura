import s from "./Dropdown.module.css";
import React from "react";
import { MdArrowDropDown } from "react-icons/md";
import { useState } from "react";
import { useEffect } from "react";

/**
 * Dropdown component with active item display. Automatically adds onClick handlers to children
 *
 * @param
 * @returns
 */
export const Dropdown = ({ children }: { children: React.ReactNode[] }) => {
  const [isActive, setIsActive] = useState(false);
  const [activeItem, setActiveItem] = useState(children[0]); // Default is first child

  // Open / close dropdown
  const toggleDropdown = () => setIsActive((prev) => !prev);
  const closeDropdown = () => setIsActive(false);

  // Close dropdown on outside click
  useEffect(() => {
    // Check if dropdown is open
    if (isActive === false) return;

    // Add click listener to document
    isActive && document.addEventListener("click", closeDropdown);

    // Clean up listener
    return () => {
      document.removeEventListener("click", closeDropdown);
    };
  }, [isActive]);

  // Map onClick prop to all children
  const childrenWithProps = React.Children.map(children, (child) => {
    // Check isValidElement to play it safe and also avoid typescript error
    if (React.isValidElement(child)) {
      // Return augmented child
      return React.cloneElement(child, {
        onClick: () => setActiveItem(child),
      });
    }
    return child;
  });

  return (
    <div className={s.dropdown_container} onClick={toggleDropdown}>
      <div className={s.dropdown_header}>
        <div className={s.pointer_blocker}>
          {React.isValidElement(activeItem) &&
            getIconElement(activeItem.props.icon)}
        </div>
        <div
          className={s.arrow_container}
          style={{ transform: isActive ? "rotate(180deg)" : "rotate(0)" }}
        >
          <MdArrowDropDown />
        </div>
      </div>
      {/* Menu */}
      {isActive && <div className={s.dropdown_menu}>{childrenWithProps}</div>}
    </div>
  );
};

/**
 * Inner elements for dropdown
 * @param {string} text Element text
 * @param {string} iconSrc Src for element image
 * @param {JSX.Element} iconElement Element to be used as image instead of src
 * @returns An element to be used inside the dropdown component
 */
export const Item = ({
  text,
  icon,
  onClick,
}: {
  text?: string;
  icon?: string | JSX.Element | undefined;
  onClick?: any;
}) => {
  return (
    <div className={s.icon_container} onClick={onClick}>
      <div className={s.icon}>{getIconElement(icon)}</div>
      <p
        style={{ marginLeft: icon && "8px" }}
        className={s.icon_text}
        key="txt"
      >
        {text}
      </p>
    </div>
  );
};

// Convert icon input string or url or component into usable icon
const getIconElement = (icon: string | JSX.Element | undefined) => {
  // Set image element
  var imageEl;

  // Check if data is a string or a component
  if (typeof icon === "string") {
    // Check if string is a url
    if (icon.includes("/")) {
      // Create image element with url as src
      imageEl = (
        <img width="35px" height="35px" className={s.item_img} src={icon} />
      );
    } else {
      // Use raw string as icon (emojis)
      imageEl = icon;
    }
    // Don't show any icon
  } else if (!icon) imageEl = null;
  else {
    // Use passed component as icon
    imageEl = icon;
  }

  return imageEl;
};