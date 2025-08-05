import style from "@/app/components/SendRequest.module.css";
import Image from "next/image";

export default function SendRequest() {
  return (
    <section
      className={style.sendRequest}
      aria-labelledby="form-title"
      id="request"
    >
      <div className={style.container}>
        <form
          action="/api/send"
          method="post"
          encType="multipart/form-data"
          className={style.form}
        >
          {/* Контактная информация */}
          <fieldset className={`${style.fieldset} ${style.contactInfoArea}`}>
            <legend className={style.legend}>Контактная информация</legend>
            <p className={style.text}>
              Хотите быстро получить консультацию или оформить заказ? Заполните
              форму, и наш специалист перезвонит вам в ближайшие минуты!
              Гарантируем оперативную обратную связь, профессиональный подход и
              помощь в решении ваших задач. Оставьте заявку, и мы рассчитаем
              точную цену, а также ответим на все ваши вопросы
            </p>
            <div className={style.inputGroup}>
              <label htmlFor="message" className={style.label}>
                Сообщение
              </label>
              <input
                type="text"
                id="message"
                name="message"
                className={style.input}
                placeholder="Введите ваше сообщение"
              />
            </div>

            <div className={style.inputGroup}>
              <label htmlFor="file" className={style.label}>
                Файл
              </label>
              <div className={style.fileUpload}>
                <div className={style.fileInfo}>
                  <p>Скиньте сюда файл с техническим заданием, если оно есть</p>
                  <ul className={style.fileTypes}>
                    <li>txt</li>
                    <li>docx</li>
                    <li>png</li>
                    <li>jpeg</li>
                    <li>cdr</li>
                    <li>pdf</li>
                  </ul>
                </div>
                <input
                  type="file"
                  id="file"
                  name="file"
                  className={style.fileInput}
                  accept=".txt,.docx,.png,.jpeg,.jpg,.cdr,.pdf"
                />
              </div>
            </div>
            <ul className={style.contactInfo}>
              <li className={style.one}>
                <a
                  href="https://t.me/spectrum360"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={"/Images/te.svg"}
                    width={18}
                    height={100}
                    alt="Телеграм"
                  />
                  <span>spectrum360</span>
                </a>
              </li>
              <li className={style.two}>
                <a href="tel:+79999999999">
                  <Image
                    src={"/Images/vk.svg"}
                    width={18}
                    height={100}
                    alt="Телеграм"
                  />
                  <span>spectrum360</span>
                </a>
              </li>
              <li className={style.three}>
                <a href="mailto:spectrum360@gmail.com">
                  <Image
                    src={"/Images/ma.svg"}
                    width={18}
                    height={100}
                    alt="Телеграм"
                  />
                  <span>spectrum360@gmail.com</span>
                </a>
              </li>
            </ul>
          </fieldset>
          {/* Оставте заявку */}{" "}
          <h2
            id="form-title"
            className={`${style.header} ${style.formHeader} ${style.title}`}
          >
            <span>Оставить</span>
            <span>заявку</span>
          </h2>
          {/* Картинка */}
          <div className={style.mailIcon}>
            <Image
              alt="Иконка отправки почты"
              src={"/Images/mail.svg"}
              width={100}
              height={100}
              className={`${style.icon}`}
            />
          </div>
          {/* ФИО */}
          <fieldset className={`${style.fieldset} ${style.personalData}`}>
            <legend className={style.legend}>Согласия</legend>

            <div className={style.inputGroup}>
              <label htmlFor="name" className={style.label}>
                Имя <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.77665 12.3704L4.83249 7.77778L0 6.14815L0.781726 3.48149L5.68528 5.40741L5.54315 0H8.45685L8.31472 5.40741L13.2183 3.48149L14 6.14815L9.16751 7.77778L12.2944 12.3704L10.0203 14L7.03553 9.18519L3.9797 14L1.77665 12.3704Z" fill="#FFF200"/>
</svg>

              </label>
              <input
                type="text"
                id="name"
                name="name"
                className={style.input}
                placeholder="Ваше имя"
                required
              />
            </div>

            <div className={style.inputGroup}>
              <label htmlFor="phone" className={style.label}>
                Телефон <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.77665 12.3704L4.83249 7.77778L0 6.14815L0.781726 3.48149L5.68528 5.40741L5.54315 0H8.45685L8.31472 5.40741L13.2183 3.48149L14 6.14815L9.16751 7.77778L12.2944 12.3704L10.0203 14L7.03553 9.18519L3.9797 14L1.77665 12.3704Z" fill="#FFF200"/>
</svg>

              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className={style.input}
                placeholder="+7 (___) ___-__-__"
                required
              />
            </div>

            <div className={style.checkboxGroup}>
              <div className={style.check}>
                <input
                  type="checkbox"
                  id="agree"
                  name="agree"
                  className={style.checkbox}
                  required
                />
                <label htmlFor="agree" className={style.checkboxLabel}>
                  Я согласен на обработку{" "}
                  <a
                    href="/policy/#policy"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Персональных данных
                  </a>
                </label>
              </div>
              <div className={style.check}>
                <input
                  type="checkbox"
                  id="privacy"
                  name="privacy"
                  className={style.checkbox}
                  required
                />
                <label htmlFor="privacy" className={style.checkboxLabel}>
                  Я ознакомился с{" "}
                  <a
                    href="/policy/#policy-private"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Политикой конфиденциальности
                  </a>
                </label>
              </div>
            </div>
            <button type="submit" className={style.submitBtn}>
              Отправить
            </button>
          </fieldset>
        </form>
      </div>
    </section>
  );
}
