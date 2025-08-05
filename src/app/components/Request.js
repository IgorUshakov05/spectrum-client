"use client";
import { useRef, useEffect, useState } from "react";
import style from "@/app/components/Request.module.css";
import Form from "./Form";

export default function Request({ topText, bottomText }) {
  const sectionRef = useRef(null);
  const buttonRef = useRef(null);
  const [isOpen, setOpen] = useState(false);
  const handleClick = (state) => {
    document.body.style.overflowY = state ? "hidden !important" : "visible";
    setOpen(state);
  };

  useEffect(() => {
    const section = sectionRef.current;
    const button = buttonRef.current;

    if (!section || !button) return;

    const handleMouseMove = (e) => {
      const rect = section.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const offsetX = e.clientX - centerX;
      const offsetY = e.clientY - centerY;

      button.style.transition = "transform 0.1s ease-out";
      button.style.transform = `translate(calc(-50% + ${offsetX}px), calc(-50% + ${offsetY}px))`;
    };

    const handleMouseLeave = () => {
      button.style.transition = "transform 0.4s ease";
      button.style.transform = "translate(-50%, -50%)";
    };

    section.addEventListener("mousemove", handleMouseMove);
    section.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      section.removeEventListener("mousemove", handleMouseMove);
      section.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <>
      {isOpen && <Form close={handleClick} />}

      <article className={style.requestSection} ref={sectionRef}>
        <h2 className={style.heading} id="request-form">
          {topText}{" "}
          <svg
            width="42"
            height="42"
            viewBox="0 0 42 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 2L39 39M39 39V2M39 39H2"
              stroke="black"
              strokeWidth="5"
            />
          </svg>
        </h2>
        <button
          ref={buttonRef}
          className={style.button}
          type="button"
          onClick={() => setOpen(true)}
          aria-labelledby="request-form"
        >
          Оставить заявку
        </button>
        <div className={style.subheading}>
          <h3 className={style.subheadigText}>{bottomText}</h3>
        </div>
      </article>
    </>
  );
}
