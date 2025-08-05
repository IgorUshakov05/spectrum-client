import style from "@/app/components/Partners.module.css";
import Image from "next/image";

export default function Partners() {
  return (
    <section className={style.partnersSection}>
      <div className={style.container}>
        <h2 className={style.heading1}>Наши</h2>
        <h2 className={style.heading2}>партнеры</h2>
        <p className={style.one}>
          Мы гордимся многолетним сотрудничеством с крупнейшими компаниями и
          государственными организациями. Работа с такими клиентами — это не
          только показатель нашего профессионализма, но и постоянный стимул
          развиваться, предлагая инновационные решения в сфере производства
          вывесок, фасадов и рекламных конструкций.
        </p>
        <p className={style.two}>
          Эти партнерства — показатель нашего профессионализма и стимул для
          развития. Мы постоянно совершенствуем технологии и предлагаем
          инновационные решения в производстве вывесок, фасадов и рекламных
          конструкций.
        </p>

        <div className={style.stats}>
          <div className={style.statItem}>
            <span className={style.statLabel}>Выполненных заказов</span>
            <span className={style.statValue}>{`>3000`}</span>
          </div>
          <div className={style.statItem}>
            <span className={style.statLabel}>Постоянных клиентов</span>
            <span className={style.statValue}>{`>120`}</span>
          </div>
        </div>

        <div className={`${style.partnerItem} ${style.MTCItem}`}>
          <p className={style.MTC}>
            Для нас важен каждый проект - будь то крупная федеральная сеть или
            локальный бизнес. Мы с одинаковым вниманием относимся ко всем
            заказам, предлагая индивидуальные решения под любой бюджет и задачи
          </p>
          <Image
            src="/Images/МТС.png"
            width={100}
            alt="MTC"
            height={100}
            className={style.icon}
          />
        </div>
         <li className={`${style.partnerItem} ${style.partnerAtb}`}>
          <Image
            width={64}
            height={64}
            src="/Images/atb_ru 1.png"
            alt="АТБ — Азиатско-Тихоокеанский банк"
          />
          <p className={style.partnerName}>Азиатско-Тихоокеанский банк</p>
        </li>
        <li className={`${style.partnerItem} ${style.partnerBank}`}>
          <Image
            width={64}
            height={64}
            src="/Images/image 3.png"
            alt="Логотип Хакасский муниципальный банк"
          />
          <p className={style.partnerName}>Хакасский муниципальный банк</p>
        </li>
        <li className={`${style.partnerItem} ${style.partnerMts}`}>
          <Image
            width={64}
            height={64}
            src="/Images/image 2.png"
            alt="Логотип компании MTC"
          />
          <p className={style.partnerName}>телекоммуникационная компания МТС</p>
        </li>
        <li className={`${style.partnerItem} ${style.partnerGos}`}>
          <Image
            width={64}
            height={64}
            src="/Images/gos.png"
            alt="Государственная структура"
          />
          <p className={style.partnerName}>
            Управление федеральной налоговой службы по РХ
          </p>
        </li>
        <li className={`${style.partnerItem} ${style.partnerSuek}`}>
          <Image
            width={64}
            height={64}
            src="/Images/image 4.png"
            alt="Логотип СУЭК"
          />
          <p className={style.partnerName}>СУЭК</p>
        </li>
        <li className={`${style.partnerItem} ${style.partnerBear}`}>
          <Image
            width={64}
            height={64}
            src="/Images/bear.png"
            alt="Медведь-Абакан"
          />
          <p className={style.partnerName}>Медведь-Абакан</p>
        </li>
        <li className={`${style.partnerItem} ${style.partnerRus}`}>
          <Image width={64} height={64} src="/Images/rus.png" alt="РусГидро" />
          <p className={style.partnerName}>РусГидро</p>
        </li>
        <li className={`${style.partnerItem} ${style.partnerSport}`}>
          <Image
            width={64}
            height={64}
            src="/Images/sport.png"
            alt="сеть магазинов Супер спорт"
          />
          <p className={style.partnerName}>сеть магазинов Супер спорт</p>
        </li>  
      </div>
    </section>
  );
}
