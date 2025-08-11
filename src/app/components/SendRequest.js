"use client";
import style from "@/app/components/SendRequest.module.css";
import Image from "next/image";
import { useState } from "react";

export default function SendRequest() {
  const [value, setValue] = useState({
    client_name: "",
    phone: "",
    message: "",
    file: null,
    consent: false,
    consent2: false,
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
    value.consent2 &&
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
          consent2: false,
        });
      }
      let data = await res.json();
      await console.log(data);
      setError(data.errors);
    } catch {
      alert("Ошибка отправки");
    }
  };
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
                value={value.message}
                onChange={handleInput}
                maxLength={1000}
                placeholder="Сделаем пару плакатиков?)"
              />
            </div>

            <div className={style.inputGroup}>
              <label htmlFor="file" className={style.label}>
                Файл
              </label>
              <div
                className={style.fileUpload}
                style={{ border: value.file ? "1px solid white" : "" }}
              >
                <div className={style.fileInfo}>
                  <p>
                    {value.file
                      ? value.file.name
                      : "Скиньте сюда файл с техническим заданием, если оно есть"}
                  </p>
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
                  onChange={handleInput}
                  name="file"
                  className={style.fileInput}
                  accept=".txt,.docs,.png,.jpeg,.cdr,.pdf"
                />
              </div>
            </div>
            <ul className={style.contactInfo}>
              <li className={style.one}>
                <a
                  href="https://t.me/spectrum_manager01"
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
                <a href="tel:31-31-01">
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
                <a href="mailto:spectrum119@mail.ru">
                  <Image
                    src={"/Images/ma.svg"}
                    width={18}
                    height={100}
                    alt="Телеграм"
                  />
                  <span>spectrum119@mail.ru</span>
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
                    fill="#FFF200"
                  />
                </svg>
              </label>
              <input
                type="text"
                id="client_name"
                value={value.client_name.trim()}
                onChange={handleInput}
                name="client_name"
                className={style.input}
                placeholder="Ярослав"
                required
              />
            </div>

            <div className={style.inputGroup}>
              <label htmlFor="phone" className={style.label}>
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
                    fill="#FFF200"
                  />
                </svg>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="+7 (___) ___-__-__"
                value={value.phone.trim()}
                onChange={handleInput}
                className={style.input}
                required
              />
            </div>

            <div className={style.checkboxGroup}>
              <div className={style.check}>
                <input
                  type="checkbox"
                  id="consent"
                  name="consent"
                  checked={value.consent}
                  className={style.checkbox}
                  onChange={handleInput}
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
                  id="consent2"
                  name="consent2"
                  checked={value.consent2}
                  onChange={handleInput}
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
            <button
              type="submit"
              className={style.submitBtn}
              onClick={handleSubmit}
              disabled={!isFormValid}
            >
              Отправить
            </button>
          </fieldset>
        </form>
      </div>
    </section>
  );
}
