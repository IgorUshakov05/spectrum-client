import style from "@/app/components/Contacts.module.css";
import Image from "next/image";

export default function Contacts() {
  return (
    <section className={style.container} aria-labelledby="contactsTitle">
      <header className={style.headerBlock}>
        <h1 id="contactsTitle" className={style.header}>
          Контакты
        </h1>
      </header>

      <article
        className={`${style.media} ${style.contactMail}`}
        aria-label="Контакт по почте"
      >
        <Image
          src="/Images/Contacts/mail.svg"
          alt="Иконка почты"
          width={100}
          height={100}
          className={style.iconMail}
        />
        <a
          href="mailto:spectrum360@gmail.com"
          className={style.telegramLink}
          title="Написать на почту"
        >
          spectrum360 <span className={style.under}>@gmail.com</span>
        </a>
      </article>

      <article
        className={`${style.media} ${style.contactCustom1}`}
        aria-label="Дополнительная информация"
      >
        <p className={style.happy}>
          Мы всегда рады помочь вашему бизнесу выделиться! Свяжитесь с нами
          любым удобным способом.
        </p>
        <div className={style.warning}>
          <strong className={style.warn}>Внимание</strong>
          <p className={style.warnText}>
            Принимаем звонки только в рабочие часы. Если необходимо отправить
            сообщение в нерабочее время, используйте мессенджеры.
          </p>
        </div>
      </article>

      <article
        className={`${style.media} ${style.contactCustom2}`}
        aria-label="График работы"
      >
        <header className={style.workHeader}>
          <h2 className={style.workTitle}>Режим работы</h2>
        </header>
        <div className={style.schedule}>
          <div className={style.scheduleItem}>
            <p className={style.scheduleDay}>Пн–Пт</p>
            <time className={style.scheduleTime}>9:00–18:00</time>
          </div>
          <div className={style.scheduleItem}>
            <p className={style.scheduleDay}>Сб–Вс</p>
            <p className={style.scheduleTime}>Выходной</p>
          </div>
        </div>
        <div className={style.logoWrapper}>
          <Image
            src="/Images/logo.png"
            width={120}
            height={20}
            alt="Логотип компании"
            className={style.logo}
          />
        </div>
      </article>

      <article
        className={`${style.media} ${style.contactTelegram}`}
        aria-label="Telegram"
      >
        <Image
          src="/Images/Contacts/telegram.svg"
          alt="Иконка Telegram"
          width={100}
          height={100}
          className={style.iconTelegram}
        />
        <a
          href="https://t.me/spectrum_manager01"
          target="_blank"
          rel="noopener noreferrer"
          className={style.telegramLink}
          title="Написать в Telegram"
        >
          @spectrum_manager01
        </a>
      </article>

      <article className={`${style.media} ${style.contactVK}`} aria-label="VK">
        <Image
          src="/Images/Contacts/vk.svg"
          alt="Иконка ВКонтакте"
          width={100}
          height={100}
          className={style.iconVK}
        />
        <a
          href="https://vk.com/spectrum360"
          target="_blank"
          rel="noopener noreferrer"
          className={style.telegramLink}
          title="Перейти в ВКонтакте"
        >
          spectrum360
        </a>
      </article>

      <article
        className={`${style.media} ${style.contactPhone}`}
        aria-label="Телефон"
      >
        <Image
          src="/Images/Contacts/phone.svg"
          alt="Иконка телефона"
          width={100}
          height={100}
          className={style.iconPhone}
        />
        <a
          href="tel:+79134458013"
          className={style.telegramLink}
          title="Позвонить"
        >
          +7 (913) 445-80-13
        </a>
      </article>
    </section>
  );
}
