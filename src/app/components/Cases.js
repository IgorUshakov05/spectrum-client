import style from "@/app/components/Cases.module.css";
import Image from "next/image";
import Link from "next/link";
import CasesList from "./CasesList";

export default function Cases() {
  return (
    <section className={style.casesSection} aria-labelledby="cases-title">
      <div className={style.casesIntro}>
        <div className={style.low}>
          <h2 id="cases-title" className={style.casesHeading}>
            Это наши кейсы
          </h2>
          <div className={style.casesText}>
            <p className={style.one}>
              Наши кейсы — это не просто выполненные заказы, а истории успешного
              сотрудничества, где качество, сроки и внимание к деталям стоят на
              первом месте.
            </p>
            <p className={style.two}>
              Оставьте заявку — реализуем ваш проект от эскиза до установки!
            </p>
            <Link href="/case" className={style.casesLink}>
              Перейти в портфолио{" "}
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 9L9 1M9 1V9M9 1H1"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>

     <CasesList />
    </section>
  );
}
