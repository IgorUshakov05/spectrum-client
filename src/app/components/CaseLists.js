"use client";
import style from "@/app/components/OutCases.module.css";
import Image from "next/image";
import axios from "axios";

import { useEffect, useState } from "react";

export default function CasesList() {
  const [page, setPage] = useState(0);
  const casesPerPage = 6;
  const [cases, setCases] = useState([]);

  useEffect(() => {
    async function getAllCases() {
      let response = await axios.get(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/case`
      );
      let data = response.data;
      await console.log(data.data.map((item) => console.log(item)));
      await setCases(data.data);
    }
    getAllCases();
  }, []);
  const totalPages = Math.ceil(cases.length / casesPerPage);
  const paginatedCases = cases.slice(
    page * casesPerPage,
    (page + 1) * casesPerPage
  );
  return (
    <>
      {cases.length ? (
        <>
          <ul className={style.casesList} role="list">
            {cases.map(({ id, title, description, photo }, index) => (
              <li key={index} className={style.caseItem}>
                <article className={style.caseCard}>
                  <div className={style.caseImageWrapper}>
                    {photo && (
                      <Image
                        src={`${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/image/${photo}`}
                        alt={title || "Case image"}
                        width={600}
                        height={400}
                        className={style.caseImage}
                        loading="lazy"
                      />
                    )}
                  </div>
                  <h3 className={style.caseTitle}>{title}</h3>
                  <p className={style.caseDescription}>{description}</p>
                </article>
              </li>
            ))}
          </ul>
          {cases?.length > casesPerPage && (
            <nav
              className={style.pagination}
              aria-label="Навигация по страницам кейсов"
            >
              {[...Array(Math.ceil(cases.length / casesPerPage))].map(
                (_, i) => (
                  <button
                    key={i}
                    onClick={() => setPage(i)}
                    className={`${style.pageButton} ${
                      page === i ? style.active : ""
                    }`}
                    aria-current={page === i ? "page" : undefined}
                  >
                    {i + 1}
                  </button>
                )
              )}
            </nav>
          )}
        </>
      ) : (
        <div className="loading">
          <div className="spinner"></div>
        </div>
      )}
    </>
  );
}
