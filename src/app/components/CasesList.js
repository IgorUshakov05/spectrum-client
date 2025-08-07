"use client";
import style from "@/app/components/Cases.module.css";
import Image from "next/image";
import axios from "axios";
import { useEffect, useState } from "react";

export default function CasesList() {
  const [cases, setCases] = useState(null);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    async function getAllCases() {
      let response = await axios.get(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/case?limit=true`
      );
      let data = response.data;
      setCases(data.data);
    }
    getAllCases();

    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    // Устанавливаем ширину при монтировании
    handleResize();

    // Добавляем слушатель изменения окна
    window.addEventListener("resize", handleResize);

    // Чистим слушатель при размонтировании
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Если ширина >= 767 — показываем только первые 2 кейса
  const displayedCases =
    windowWidth <= 767 && cases ? cases.slice(0, 2) : cases;

  return (
    <ul className={style.casesList} role="list">
      {displayedCases ? (
        displayedCases.map(({ id, title, description, photo }, index) => (
          <li key={id} className={style.caseItem}>
            <article className={style.caseCard}>
              <div className={style.caseImageWrapper}>
                <Image
                  src={`${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/image/${photo}`}
                  alt={title}
                  width={600}
                  height={400}
                  className={style.caseImage}
                  loading="lazy"
                />
              </div>
              <h3 className={style.caseTitle}>{title}</h3>
              <p className={style.caseDescription}>{description}</p>
            </article>
          </li>
        ))
      ) : (
        <div className="loading">
          <div className="spinner"></div>
        </div>
      )}
    </ul>
  );
}
