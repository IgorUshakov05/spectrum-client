"use client";
import style from "@/app/components/OutCases.module.css";
import Image from "next/image";
import { useState } from "react";
import CasesList from "./CaseLists";
export default function OutCases() {
  return (
    <article className={style.casesSection}>
      <h1 className={style.title}>Наши кейсы</h1>
      <h2 className={style.subtitle}>
        Это истории успешного сотрудничества, где качество, сроки и внимание к
        деталям всегда на первом месте. Мы реализовали более 3000 проектов для
        бизнеса и организаций в Абакане и Хакасии
      </h2>

      <CasesList />
    </article>
  );
}
