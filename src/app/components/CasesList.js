"use client";
import style from "@/app/components/Cases.module.css";
import Image from "next/image";
import axios from "axios";
const { useEffect, useState } = require("react");
export default function CasesList() {
  const [cases, setCases] = useState(null);

  useEffect(() => {
    async function getAllCases() {
      let response = await axios.get(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/case?limit=6`
      );
      let data = response.data;
      await console.log(data.data.map((item) => console.log(item)));
      await setCases(data.data);
    }
    getAllCases();
  }, []);
  return (
    <ul className={style.casesList} role="list">
      {cases ? (
        cases.map(({ id, title, description, photo }, index) => (
          <li key={index} className={style.caseItem}>
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
