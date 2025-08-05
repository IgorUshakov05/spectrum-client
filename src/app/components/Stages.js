"use client";
import { useState } from "react";
import style from "./HowWorks.module.css";
import Image from "next/image";

export default function Stages() {
  const [activeIndex, setActiveIndex] = useState(null);
  const stages = [
    {
      number: "01",
      title: "Брифинг",
      imgSrc: "/images/Stages/1.png",
      warning: true,
      imgAlt: "Иллюстрация этапа брифинга",
      description:
        "Вместе разрабатываем идеальное решение. На первом этапе наш менеджер обсуждает детали проекта и совместно разрабатывает техническое задание.",
      points: [
        "Анализируем ваши потребности и бюджет",
        "Подбираем оптимальные материалы (пластик, металл, дерево, композиты)",
        "Обсуждаем дизайн, размеры и особенности монтажа",
        "Составляем техническое задание с учетом всех пожеланий",
      ],
    },
    {
      number: "02",
      title: "Разработка дизайна",
      imgSrc: "/images/Stages/2.png",
      imgAlt: "Иллюстрация этапа разработки дизайна",
      description:
        "На этапе разработки дизайна наш опытный дизайнер создает макет на основе технического задания, составленного во время брифинга.",
      points: [
        "Разрабатываем макет на основе ТЗ",
        "Подбираем стиль и цветовую палитру",
        "Учитываем размеры, материалы и технические требования",
        "Готовим финальный макет для утверждения",
      ],
    },
    {
      number: "03",
      title: "Создание изделия",
      imgSrc: "/images/Stages/3.png",
      imgAlt: "Процесс создания изделия",
      description:
        "Наша команда приступает к производству проекта, опираясь на макет и техническое задание.",
      points: [
        "Начинаем производство по утвержденному макету",
        "Подготавливаем материалы согласно требованиям",
        "Режем, собираем и обрабатываем детали",
        "Проводим контроль качества на всех этапах",
      ],
    },
    {
      number: "04",
      title: "Установка",
      imgSrc: "/images/Stages/4.png",
      imgAlt: "Монтаж изделия",
      description:
        "Квалифицированные монтажники выезжают на объект для профессиональной установки проекта.",
      points: [
        "Организуем выезд монтажной бригады",
        "Оцениваем место установки",
        "Проводим монтаж с использованием надежных креплений",
        "Проверяем устойчивость и точность установки",
      ],
    },
  ];
  const toggleIndex = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <ol className={style.stageList}>
      {stages.map(
        (
          { number, title, imgSrc, imgAlt, description, points, warning },
          i
        ) => {
          const isOpen = activeIndex === i;
          return (
            <li key={i} className={style.stageItem}>
              <article
                className={style.stageCard}
                aria-expanded={isOpen}
                onClick={() => toggleIndex(i)}
              >
                <div className={style.stageNumber}>{number}</div>
                <h3 className={style.stageTitle}>{title}</h3>
                <div
                  className={
                    `${style.stageDetails} ` +
                    (isOpen ? style.show : style.hidden)
                  }
                >
                  <Image
                    src={imgSrc}
                    alt={imgAlt}
                    width={600}
                    height={400}
                    className={style.stageImage}
                    loading="lazy"
                  />
                  <p className={style.description}>{description}</p>
                  <ul className={style.stagePoints}>
                    {points.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                  {warning && (
                    <div className={style.warning}>
                      <p>Почему это важно?</p>
                      <span>
                        Грамотный брифинг - залог идеального результата. Мы
                        учитываем каждую деталь: от нагрузок на фасад до
                        видимости вывески в темное время суток.
                      </span>
                    </div>
                  )}
                </div>
              </article>
            </li>
          );
        }
      )}
    </ol>
  );
}
