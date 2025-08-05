import style from "@/app/components/Price.module.css";
import Image from "next/image";

export default function Price() {
  const services = [
    {
      src: "/images/works/spectrum.svg",
      alt: "Вывески",
      text: "Вывески",
      price: "10 000",
    },
    {
      src: "/images/works/corb.svg",
      alt: "Световые короба",
      text: "Световые короба",
      price: "10 000",
    },
    {
      src: "/images/works/baner1.svg",
      alt: "Баннеры",
      text: "Баннера",
      price: "10 000",
    },
    {
      src: "/images/works/baner2.svg",
      alt: "Объемные буквы",
      text: "Объемные буквы",
      price: "10 000",
    },
    {
      src: "/images/works/auto.svg",
      alt: "Брендирование авто",
      text: "Брендирование авто",
      price: "10 000",
    },
    {
      src: "/images/works/table.svg",
      alt: "Стенды и таблички",
      text: "Стенды, таблички",
      price: "10 000",
    },
    {
      src: "/images/works/Tender.svg",
      alt: "Указатели и штендеры",
      text: "Указатели, штендеры",
      price: "10 000",
    },
    {
      src: "/images/works/application.svg",
      alt: "Аппликация",
      text: "Аппликация",
      price: "10 000",
    },
  ];
  return (
    <article className={style.casesSection}>
      <header className={style.head}>
        <h1 className={style.title}>Цена</h1>
        <p className={style.subtitle}>
          Стоимость каждого проекта зависит от его сложности, материалов и
          индивидуальных требований. Мы предлагаем решения под любой бюджет,
          сохраняя высокое качество.
        </p>
      </header>

      <section className={style.body}>
        <ul className={`${style.bigContainer} ${style.priceList}`}>
          {services.map(({ src, alt, text, price }, index) => (
            <li key={index} id={index} className={style.priceItem}>
              <article className={style.priceCard}>
                <div className={style.imageWrapper}>
                  <Image
                    src={src}
                    alt={alt}
                    width={100}
                    height={100}
                    className={style.priceImage}
                    loading="lazy"
                  />
                </div>
                <div className={style.priceContent}>
                  <h3 className={style.priceTitle}>{text}</h3>
                  <p className={style.priceValue}>
                    от <span className={style.price}>{price}</span>
                    <span className={style.priceUnit}>руб/м²</span>
                  </p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
