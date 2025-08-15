import Image from "next/image";
import Link from "next/link";
import styles from "./About.module.css";

export default function About() {
  return (
    <section className={styles.aboutSection} aria-labelledby="about-title">
      <header className={styles.featuresHeader}>
        <h2 id="about-title" className={styles.sectionTitle}>
          Наши преимущества
        </h2>
      </header>

      <div className={styles.features}>
        <article className={styles.featureItem}>
          <Image
            src="/Images/clock.svg"
            width={235}
            height={235}
            alt="Иконка — Часы"
          />
          <h3 className={styles.featureTitle}>Качество и сроки</h3>
          <p className={styles.featureText}>
            Используем современное оборудование и качественные материалы
          </p>
        </article>

        <article className={styles.featureItem}>
          <Image
            src="/Images/abakan.svg"
            width={235}
            height={235}
            alt="Иконка — Абакан"
          />
          <h3 className={styles.featureTitle}>Локальная экспертиза</h3>
          <p className={styles.featureText}>
            Знаем особенности рынка Абакана и Хакасии
          </p>
        </article>

        <article className={styles.featureItem}>
          <Image
            src="/Images/three.svg"
            width={235}
            height={235}
            alt="Иконка — Производственный цикл"
          />
          <h3 className={styles.featureTitle}>Полный цикл</h3>
          <p className={styles.featureText}>
            От эскиза до установки — все в одном месте
          </p>
        </article>

        <article className={styles.featureItem}>
          <Image
            src="/Images/fingers.svg"
            width={235}
            height={235}
            alt="Иконка — Индивидуальный подход"
          />
          <h3 className={styles.featureTitle}>Персональный подход</h3>
          <p className={styles.featureText}>
            Разрабатываем решения под ваш бюджет и задачи
          </p>
        </article>
      </div>

      {/* Описание компании */}
      <section className={styles.description}>
        <p className={styles.descriptionText}>
          Рекламно-производственная компания «Спектрум» зарекомендовала себя как
          поставщик качественных товаров и услуг и надежный партнёр.
        </p>
        <p className={styles.descriptionText}>
          Об этом свидетельствует список наших постоянных клиентов: Хакасский
          муниципальный банк, Азиатско-Тихоокеанский банк, УФНС по РХ,
          телекоммуникационная компания МТС, РусГидро, Медведь-Абакан, сеть
          магазинов «Супер спорт», СУЭК и другие.
        </p>
        <Link className={styles.aboutLink} href="/about">
          О компании{" "}
          <svg
            width="12"
            height="11"
            viewBox="0 0 12 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M1.5 10.075L10.5 1.07495M10.5 1.07495V10.075M10.5 1.07495H1.5"
              stroke="white"
              strokeWidth="2"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </section>

      {/* Логотипы партнёров */}
      <section className={styles.logosSection} aria-labelledby="logos-title">
        <h2 id="logos-title" className={styles.logosTitle}>
          Почему выбирают <span>нас?</span>
        </h2>
        <ul className={styles.logosGrid}>
          <li className={styles.logoItem}>
            <Image
              width={64}
              height={64}
              placeholder="blur"
              blurDataURL="/Images/placeholder-gray.png"
              src="/Images/atb_ru 1.png"
              alt="АТБ — Азиатско-Тихоокеанский банк"
            />
          </li>
          <li className={styles.logoItem}>
            <Image
              width={64}
              height={64}
              src="/Images/image 3.png"
              alt="Логотип партнёра"
            />
          </li>
          <li className={styles.logoItem}>
            <Image
              width={64}
              height={64}
              src="/Images/image 2.png"
              alt="Логотип компании"
            />
          </li>
          <li className={styles.logoItem}>
            <Image
              width={64}
              height={64}
              src="/Images/gos.png"
              alt="Государственная структура"
            />
          </li>
          <li className={styles.logoItem}>
            <Image
              width={64}
              height={64}
              src="/Images/image 4.png"
              alt="Логотип предприятия"
            />
          </li>
          <li className={styles.logoItem}>
            <Image
              width={64}
              height={64}
              src="/Images/bear.png"
              alt="Медведь-Абакан"
            />
          </li>
          <li className={styles.logoItem}>
            <Image
              width={64}
              height={64}
              src="/Images/rus.png"
              alt="РусГидро"
            />
          </li>
          <li className={styles.logoItem}>
            <Image
              width={64}
              height={64}
              src="/Images/sport.png"
              alt="Сеть магазинов Супер спорт"
            />
          </li>
        </ul>
      </section>
    </section>
  );
}
