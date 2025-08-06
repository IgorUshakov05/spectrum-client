import { useState } from "react";
import styles from "./Form.module.css";

export default function Form({ close }) {
  const [value, setValue] = useState({
    client_name: "",
    phone: "",
    message: "",
    file: null,
    consent: false,
  });
  const [errorMessage, setError] = useState(null);
  const handleInput = (e) => {
    const { name, type, checked, value: inputValue, files } = e.target;
    setValue((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? checked : type === "file" ? files[0] : inputValue,
    }));
  };

  const isFormValid =
    value.client_name.trim() !== "" &&
    value.phone.trim() !== "" &&
    value.consent &&
    value.message.length <= 1000;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid) return;
    setError(null);
    const formData = new FormData();
    formData.append("client_name", value.client_name);
    formData.append("phone", value.phone);
    formData.append("message", value.message);
    if (value.file) {
      formData.append("file", value.file);
    }

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/request`,
        {
          method: "POST",
          body: formData,
        }
      );
      if (res.ok) {
        setValue({
          client_name: "",
          phone: "",
          message: "",
          file: null,
          consent: false,
        });
        close(false);
      }
      let data = await res.json();
      await console.log(data);
      setError(data.errors);
    } catch {
      alert("Ошибка отправки");
    }
  };

  return (
    <div className={styles.modal} role="dialog" aria-labelledby="form-title">
      <form
        action={`${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/request`}
        method="POST"
        className={styles.form}
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
        {errorMessage && (
          <div className={`${styles.formDescription} ${styles.error}`}>
            {errorMessage.map((error, index) => (
              <p key={index}>{error}</p>
            ))}
          </div>
        )}
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
              id="client_name"
              name="client_name"
              className={styles.formInput}
              placeholder="Ярослав"
              value={value.client_name.trim()}
              onChange={handleInput}
              required
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
              id="phone"
              name="phone"
              className={styles.formInput}
              placeholder="+7 (___) ___-__-__"
              value={value.phone.trim()}
              onChange={handleInput}
              required
            />
          </div>

          <div className={`${styles.formGroup} ${styles.message}`}>
            <label htmlFor="message" className={styles.formLabel}>
              Сообщение
            </label>
            <textarea
              id="message"
              name="message"
              className={styles.formTextarea}
              placeholder="Хочу заказать вывеску..."
              value={value.message}
              onChange={handleInput}
              maxLength={1000}
            />
          </div>

          <div className={`${styles.formGroup} ${styles.file}`}>
            <label htmlFor="file" className={styles.formLabel}>
              Файл
            </label>
            <div
              className={styles.formInput}
              style={{ borderColor: value.file ? "green" : "" }}
            >
              <span className={styles.drop}>
                {value.file
                  ? value.file.name
                  : "Скиньте сюда файл с техническим заданием, если оно есть"}
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
                id="file"
                name="file"
                onChange={handleInput}
                accept=".txt,.docs,.png,.jpeg,.cdr,.pdf"
              />
            </div>
          </div>

          <div className={`${styles.formGroup} ${styles.check}`}>
            <input
              type="checkbox"
              id="consent"
              name="consent"
              className={styles.formCheckboxInput}
              checked={value.consent}
              onChange={handleInput}
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

        <button
          type="submit"
          className={styles.formSubmit}
          onClick={handleSubmit}
          disabled={!isFormValid}
        >
          Отправить
        </button>
      </form>
    </div>
  );
}
