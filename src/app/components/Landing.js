import style from "@/app/components/Landing.module.css";
import Image from "next/image";

export default function Landing() {
  return (
    <section
      className={style.landingSection}
      aria-label="Вступительный блок сайта"
    >
      <div className={style.container}>
        <h1 className={style.title}>
          Рекламное <span className={style.agent}>агентство</span>
        </h1> 

        <Image
          width={518}
          height={80}
          alt="Из Абакана — надпись на баннере"
          title="Из Абакана"
          src="/Images/fromAbakan.svg"
          className={style.image}
          priority
        />

        <p className={style.description}>
          Изготавливаем вывески, баннеры, световые конструкции и наружную
          рекламу с 2010 года. Более 3000 реализованных проектов для бизнеса в
          Хакасии. Работаем официально — гарантия качества!
        </p>

        <a href="/#request" className={style.ctaButton}>
          Оставить заявку{" "}
          <svg
            width="11"
            height="12"
            viewBox="0 0 11 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1 11L10 1M10 1V11M10 1H1" stroke="white" />
          </svg>
        </a>
      </div>
      <div className={style.colorTriangle}>
        <div className={style.marqueeWrapper}>
          <div className={style.marquee}>
            Световые короба&nbsp;&nbsp;вывески&nbsp;&nbsp;объемные
            буквы&nbsp;&nbsp;баннера&nbsp;&nbsp;брендирование
            авто&nbsp;&nbsp;стенды, таблички&nbsp;&nbsp;указатели,
            штендеры&nbsp;&nbsp;аппликация&nbsp;&nbsp; Световые
            короба&nbsp;&nbsp;вывески&nbsp;&nbsp;объемные
            буквы&nbsp;&nbsp;баннера&nbsp;&nbsp;брендирование
            авто&nbsp;&nbsp;стенды, таблички&nbsp;&nbsp;указатели,
            штендеры&nbsp;&nbsp;аппликация&nbsp;&nbsp;
          </div>
        </div>
      </div>
    </section>
  );
}
