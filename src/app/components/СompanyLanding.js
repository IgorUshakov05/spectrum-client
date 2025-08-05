import style from "@/app/components/СompanyLanding.module.css";
import Image from "next/image";
export default function СompanyLanding() {
  return (
    <section className={style.companySection} aria-labelledby="company-title">
      <div className={style.container}>
        <div className={style.visual}>
          <Image
            src={"/Images/king.svg"}
            alt="Корона — символ лидерства агентства"
            width={100}
            height={60}
            className={style.image}
          />
        </div>
        <div className={style.content}>
          <h1 id="company-title" className={style.heading}>
            О нашем агентстве
          </h1>
          <p className={style.description}>
            Мы — рекламное агентство из Абакана, работающее на рынке более 15
            лет. За это время мы зарекомендовали себя как надежный партнер,
            поставляющий качественные рекламные конструкции для бизнеса и
            государственных организаций. Для нас важен каждый проект — будь то
            вывеска для локального кафе или масштабная рекламная кампания для
            федеральной сети.
          </p>
          <blockquote className={style.mission}>
            <p>
              Мы создаем рекламу, которая работает: привлекает клиентов,
              повышает узнаваемость бренда и решает ваши бизнес-задачи. Мы
              предлагаем индивидуальные решения под любой бюджет, используя
              современные технологии и качественные материалы (пластик, металл,
              дерево, композиты).
            </p>
            <cite className={style.missionLabel}>Наша миссия</cite>
            <div className={style.star}>
              <Image
                src={"/Images/star.svg"}
                alt="Звезда"
                width={55}
                height={40}
              />
            </div>
          </blockquote>
        </div>
      </div>
    </section>
  );
}

function star() {
  return;
}
