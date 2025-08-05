import style from "@/app/components/Location.module.css";

export default function Location() {
  return (
    <section className={style.container}>
      <h1 className={style.title}>Наше местоположение</h1>
      <div className={style.content}>
        <article className={style.mapContainer}>
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3Acc5f1b971303d28a37b3299bc3df58e5b78bfcf9ad80f32411baec0768064997&amp;source=constructor"
            className={style.map}
            referrerPolicy="no-referrer-when-downgrade"
            title="Карта местоположения Спектрум360"
            allowFullScreen
            loading="lazy"
            style={{ border: "0", height: "100%" }}
            frameBorder="0"
          ></iframe>
        </article>

        <article className={style.add}>
          <div className={style.textContent}>
            <p>
              Мы с радостью встретим вас, чтобы обсудить ваш проект и предложить
              лучшие решения для его реализации.
            </p>
            <p className={style.mt}>
              Наша команда готова подготовить проект любого уровня сложности,
              учитывая все ваши пожелания. Приходите к нам, и мы поможем
              воплотить ваши идеи в жизнь! Узнайте больше о наших услугах и
              запишитесь на консультацию уже сегодня.
            </p>
          </div>
          <article className={style.addres}>
            <p className={style.addr}>Адрес</p>
            <span className={style.abakan}>Абакан</span>
            <span className={style.friend}>Дружбы Народов</span>
            <span className={style.b}>63Б</span>
          </article>
        </article>
      </div>
    </section>
  );
}
