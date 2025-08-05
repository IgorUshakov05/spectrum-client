import styles from "./Form.module.css";

export default function Form({ close }) {
  return (
    <div className={styles.modal} role="dialog" aria-labelledby="form-title">
      <form
        action="/submit"
        method="POST"
        className={styles.form}
        noValidate
        encType="multipart/form-data"
      >
        <header className={styles.formHeader}>
          <h2 id="form-title" className={styles.formTitle}>
            Оставить заявку
          </h2>
          <button
            type="button"
            className={styles.formClose}
            onClick={() => close(false)}
            aria-label="Закрыть форму"
          >
            <svg
              width="40"
              height="41"
              viewBox="0 0 40 41"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L20 20.5M39 40L20 20.5M20 20.5L39 1L1 40"
                stroke="#B5B5B5"
                strokeWidth="2"
              />
            </svg>
          </button>
        </header>

        <div className={styles.formDescription}>
          <p>
            По всем интересующим вопросам вас проконсультируют наши менеджеры.
            Оставьте свои контактные данные, мы обязательно свяжемся с вами в
            ближайшее время.
          </p>
        </div>

        <div className={styles.formFields}>
          <div className={`${styles.formGroup} ${styles.name}`}>
            <label htmlFor="name" className={styles.formLabel}>
              Имя{" "}
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.77665 12.3704L4.83249 7.77778L0 6.14815L0.781726 3.48149L5.68528 5.40741L5.54315 0H8.45685L8.31472 5.40741L13.2183 3.48149L14 6.14815L9.16751 7.77778L12.2944 12.3704L10.0203 14L7.03553 9.18519L3.9797 14L1.77665 12.3704Z"
                  fill="#EB008B"
                />
              </svg>
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className={styles.formInput}
              required
              placeholder="Ярослав"
            />
          </div>

          <div className={`${styles.formGroup} ${styles.tel}`}>
            <label htmlFor="phone" className={styles.formLabel}>
              Телефон{" "}
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.77665 12.3704L4.83249 7.77778L0 6.14815L0.781726 3.48149L5.68528 5.40741L5.54315 0H8.45685L8.31472 5.40741L13.2183 3.48149L14 6.14815L9.16751 7.77778L12.2944 12.3704L10.0203 14L7.03553 9.18519L3.9797 14L1.77665 12.3704Z"
                  fill="#EB008B"
                />
              </svg>
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              className={styles.formInput}
              required
              placeholder="+7 (___) ___-__-__"
              pattern="\+?[1-9][0-9]{10,14}"
            />
          </div>

          <div className={`${styles.formGroup} ${styles.message}`}>
            <label htmlFor="message" className={styles.formLabel}>
              Сообщение
            </label>
            <textarea
              name="message"
              id="message"
              className={styles.formTextarea}
              placeholder="Хочу заказать вывеску..."
            />
          </div>

          <div className={`${styles.formGroup} ${styles.file}`}>
            <label htmlFor="file" className={styles.formLabel}>
              Файл
            </label>
            <div className={styles.formInput}>
              <span className={styles.drop}>
                Скиньте сюда файл с Техническим заданием, если оно есть
              </span>
              <ul className={styles.files}>
                <li>txt</li>
                <li>docs</li>
                <li>png</li>
                <li>jpeg</li>
                <li>cdr</li>
                <li>pfd</li>
              </ul>

              <input
                type="file"
                name="file"
                id="file"
                accept=".txt,.docs,.png,.jpeg,.cdr,.pfd"
              />
            </div>
          </div>

          <div className={`${styles.formGroup} ${styles.check}`}>
            <input
              type="checkbox"
              name="consent"
              id="consent"
              className={styles.formCheckboxInput}
              required
            />
            <label htmlFor="consent" className={styles.formCheckboxLabel}>
              Я согласен на обработку{" "}
              <a href="/policy" className={styles.formLink}>
                Персональных данных
              </a>
            </label>
          </div>
        </div>

        <button type="submit" className={styles.formSubmit}>
          Отправить
        </button>
      </form>
    </div>
  );
}
