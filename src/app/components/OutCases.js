"use client";
import style from "@/app/components/OutCases.module.css";
import Image from "next/image";
import { useState } from "react";
export default function OutCases() {
  const [page, setPage] = useState(0);
  const casesPerPage = 6;
  const [data, _] = useState([
    {
      title: "Номер дома",
      desc: "За это время зарекомендовала себя как поставщик качественных товаров и услуг и надежный партнёр.",
      imgSrc: "/images/cases/Number.png",
      imgAlt: "Пример таблички с номером дома",
    },
    {
      title: "Фасад кофейни COFFEE LIKE",
      desc: "Повторная работа по другому объекту сети с расширенным оформлением.",
      imgSrc: "/images/cases/coffe.png",
      imgAlt: "Фасад кофейни COFFEE LIKE с логотипом",
    },
    {
      title: "Номер дома",
      desc: "Пример индивидуального подхода и работы с нестандартными материалами.",
      imgSrc: "/images/cases/Number.png",
      imgAlt: "Табличка с номером дома в современном стиле",
    },
    {
      title: "Фасад кофейни COFFEE LIKE",
      desc: "Повторная работа по другому объекту сети с расширенным оформлением.",
      imgSrc: "/images/cases/coffe.png",
      imgAlt: "Оформленный фасад кофейни COFFEE LIKE",
    },
    {
      title: "Номер дома",
      desc: "За это время зарекомендовала себя как поставщик качественных товаров и услуг и надежный партнёр.",
      imgSrc: "/images/cases/Number.png",
      imgAlt: "Пример таблички с номером дома",
    },
    {
      title: "Фасад кофейни COFFEE LIKE",
      desc: "Повторная работа по другому объекту сети с расширенным оформлением.",
      imgSrc: "/images/cases/coffe.png",
      imgAlt: "Фасад кофейни COFFEE LIKE с логотипом",
    },
    {
      title: "Номер дома",
      desc: "Пример индивидуального подхода и работы с нестандартными материалами.",
      imgSrc: "/images/cases/Number.png",
      imgAlt: "Табличка с номером дома в современном стиле",
    },
    {
      title: "Фасад кофейни COFFEE LIKE",
      desc: "Повторная работа по другому объекту сети с расширенным оформлением.",
      imgSrc: "/images/cases/coffe.png",
      imgAlt: "Оформленный фасад кофейни COFFEE LIKE",
    },
    {
      title: "Номер дома",
      desc: "За это время зарекомендовала себя как поставщик качественных товаров и услуг и надежный партнёр.",
      imgSrc: "/images/cases/Number.png",
      imgAlt: "Пример таблички с номером дома",
    },
    {
      title: "Фасад кофейни COFFEE LIKE",
      desc: "Повторная работа по другому объекту сети с расширенным оформлением.",
      imgSrc: "/images/cases/coffe.png",
      imgAlt: "Фасад кофейни COFFEE LIKE с логотипом",
    },
    {
      title: "Номер дома",
      desc: "Пример индивидуального подхода и работы с нестандартными материалами.",
      imgSrc: "/images/cases/Number.png",
      imgAlt: "Табличка с номером дома в современном стиле",
    },
    {
      title: "Фасад кофейни COFFEE LIKE",
      desc: "Повторная работа по другому объекту сети с расширенным оформлением.",
      imgSrc: "/images/cases/coffe.png",
      imgAlt: "Оформленный фасад кофейни COFFEE LIKE",
    },
    {
      title: "Номер дома",
      desc: "За это время зарекомендовала себя как поставщик качественных товаров и услуг и надежный партнёр.",
      imgSrc: "/images/cases/Number.png",
      imgAlt: "Пример таблички с номером дома",
    },
    {
      title: "Фасад кофейни COFFEE LIKE",
      desc: "Повторная работа по другому объекту сети с расширенным оформлением.",
      imgSrc: "/images/cases/coffe.png",
      imgAlt: "Фасад кофейни COFFEE LIKE с логотипом",
    },
    {
      title: "Номер дома",
      desc: "Пример индивидуального подхода и работы с нестандартными материалами.",
      imgSrc: "/images/cases/Number.png",
      imgAlt: "Табличка с номером дома в современном стиле",
    },
    {
      title: "Фасад кофейни COFFEE LIKE",
      desc: "Повторная работа по другому объекту сети с расширенным оформлением.",
      imgSrc: "/images/cases/coffe.png",
      imgAlt: "Оформленный фасад кофейни COFFEE LIKE",
    },
    {
      title: "Номер дома",
      desc: "За это время зарекомендовала себя как поставщик качественных товаров и услуг и надежный партнёр.",
      imgSrc: "/images/cases/Number.png",
      imgAlt: "Пример таблички с номером дома",
    },
    {
      title: "Фасад кофейни COFFEE LIKE",
      desc: "Повторная работа по другому объекту сети с расширенным оформлением.",
      imgSrc: "/images/cases/coffe.png",
      imgAlt: "Фасад кофейни COFFEE LIKE с логотипом",
    },
    {
      title: "Номер дома",
      desc: "Пример индивидуального подхода и работы с нестандартными материалами.",
      imgSrc: "/images/cases/Number.png",
      imgAlt: "Табличка с номером дома в современном стиле",
    },
    {
      title: "Фасад кофейни COFFEE LIKE",
      desc: "Повторная работа по другому объекту сети с расширенным оформлением.",
      imgSrc: "/images/cases/coffe.png",
      imgAlt: "Оформленный фасад кофейни COFFEE LIKE",
    },
    {
      title: "Номер дома",
      desc: "За это время зарекомендовала себя как поставщик качественных товаров и услуг и надежный партнёр.",
      imgSrc: "/images/cases/Number.png",
      imgAlt: "Пример таблички с номером дома",
    },
    {
      title: "Фасад кофейни COFFEE LIKE",
      desc: "Повторная работа по другому объекту сети с расширенным оформлением.",
      imgSrc: "/images/cases/coffe.png",
      imgAlt: "Фасад кофейни COFFEE LIKE с логотипом",
    },
    {
      title: "Номер дома",
      desc: "Пример индивидуального подхода и работы с нестандартными материалами.",
      imgSrc: "/images/cases/Number.png",
      imgAlt: "Табличка с номером дома в современном стиле",
    },
    {
      title: "Фасад кофейни COFFEE LIKE",
      desc: "Повторная работа по другому объекту сети с расширенным оформлением.",
      imgSrc: "/images/cases/coffe.png",
      imgAlt: "Оформленный фасад кофейни COFFEE LIKE",
    },
  ]);
  const totalPages = Math.ceil(data.length / casesPerPage);
  const paginatedCases = data.slice(
    page * casesPerPage,
    (page + 1) * casesPerPage
  );

  return (
    <article className={style.casesSection}>
      <h1 className={style.title}>Наши кейсы</h1>
      <h2 className={style.subtitle}>
        Это истории успешного сотрудничества, где качество, сроки и внимание к
        деталям всегда на первом месте. Мы реализовали более 3000 проектов для
        бизнеса и организаций в Абакане и Хакасии
      </h2>

      <ul className={style.casesList} role="list">
        {paginatedCases.map(({ title, desc, imgSrc, imgAlt }, index) => (
          <li key={index} className={style.caseItem}>
            <article className={style.caseCard}>
              <div className={style.caseImageWrapper}>
                <Image
                  src={imgSrc}
                  alt={imgAlt}
                  width={600}
                  height={400}
                  className={style.caseImage}
                  loading="lazy"
                />
              </div>
              <h3 className={style.caseTitle}>{title}</h3>
              <p className={style.caseDescription}>{desc}</p>
            </article>
          </li>
        ))}
      </ul>

      <nav
        className={style.pagination}
        aria-label="Навигация по страницам кейсов"
      >
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => setPage(i)}
            className={`${style.pageButton} ${page === i ? style.active : ""}`}
            aria-current={page === i ? "page" : undefined}
          >
            {i + 1}
          </button>
        ))}
      </nav>
    </article>
  );
}
