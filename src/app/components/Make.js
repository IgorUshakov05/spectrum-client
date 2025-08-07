"use client";
import Image from "next/image";
import style from "@/app/components/Make.module.css";
import Link from "next/link";
import { useState } from "react";

export default function Make() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  function setState(state) {
    const style = document.createElement("style");
    if (!state) {
      style.innerHTML = `
      * {
        cursor: auto;
      }
      a, a:hover {
        cursor: pointer;
      }
    `;
    } else {
      style.innerHTML = `
      * {
        cursor: url('/Images/cursor.svg'), auto;
      }
      a, a:hover {
        cursor: url('/Images/cursor.svg'), auto;
      }
    `;
    }
    document.head.appendChild(style);
  }

  return (
    <section
      className={style.makeSection}
      onMouseEnter={() => setState(true)}
      onMouseLeave={() => setState(false)}
    >
      <div className={style.titleAndPic}>
        <Image
          src="/Images/hand.png"
          alt="Иконка руки слева от заголовка"
          width={100}
          height={100}
          className={style.hand}
        />
        <div className={style.container}>
          <h2 className={style.makeTitle}>
            <span className={style.start}>
              Делаем все{" "}
              <Image
                width={100}
                height={100}
                src="/Images/Arrow.svg"
                alt="Стрелка"
              />
            </span>
            <span className={style.okay}>Что можно</span>
            <span className={style.makemake}>сделать</span>
          </h2>
        </div>
        <Image
          src="/Images/iron.png"
          alt="Иконка железа справа от заголовка"
          width={100}
          height={100}
          className={style.iron}
        />
      </div>

      <div className={style.container}>
        <p className={style.makeDescription}>
          360° <span>Предоставляем</span>
          <span>полный спектр услуг</span>
        </p>
      </div>

      <div className={style.bigContainer}>
        <ul className={style.serviceList} role="list">
          {[
            {
              src: "/Images/Works/spectrum.svg",
              alt: "Вывески",
              text: "Вывески",
            },
            {
              src: "/Images/Works/corb.svg",
              alt: "Световые короба",
              text: "Световые короба",
            },
            {
              src: "/Images/Works/baner1.svg",
              alt: "Баннеры",
              text: "Баннера",
            },
            {
              src: "/Images/Works/baner2.svg",
              alt: "Объемные буквы",
              text: "Объемные буквы",
            },
            {
              src: "/Images/Works/auto.svg",
              alt: "Брендирование авто",
              text: "Брендирование авто",
            },
            {
              src: "/Images/Works/table.svg",
              alt: "Стенды и таблички",
              text: "Стенды, таблички",
            },
            {
              src: "/Images/Works/Tender.svg",
              alt: "Указатели и штендеры",
              text: "Указатели, штендеры",
            },
            {
              src: "/Images/Works/application.svg",
              alt: "Аппликация",
              text: "Аппликация",
            },
          ].map(({ href, src, alt, text }, index) => (
            <li
              key={index + 1}
              className={style.serviceItem}
              onMouseEnter={() => setHoveredIndex(index + 1)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Link href={`/price/#${index}`} title={text} className={style.serviceLink}>
                <Image
                  src={src}
                  alt={alt}
                  width={100}
                  height={100}
                  className={`${style.image}`}
                />
                <p>{text}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
