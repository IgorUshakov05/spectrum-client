import Link from "next/link";
import style from "./Footer.module.css";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.footerContainer}>
        <nav className={style.nav} aria-label="Навигация сайта">
          <h2 className={style.heading}>Навигация</h2>
          <ul className={`${style.footerList} ${style.w33}`}>
            <div className={style.footerColumn}>
              <li>
                <Link href="/">Главная</Link>
              </li>
              <li>
                <Link href="/company">О компании</Link>
              </li>
              <li>
                <Link href="/price">Услуги</Link>
              </li>
            </div>
            <div className={style.footerColumn}>
              <li>
                <Link href="/case">Портфолио</Link>
              </li>
              <li>
                <Link href="/price">Цены</Link>
              </li>
              
            </div>
            <div className={style.footerColumn}>
              <li>
                <Link href="/#request">Оставить заявку</Link>
              </li>
              <li>
                <Link href="/policy">
                  Политика обработки персональных данных
                </Link>
              </li>
            </div>
          </ul>
        </nav>

        <div className={style.logo}>{logoSVG()}</div>

        <address className={style.address} aria-label="Контактная информация">
          <h2 className={`${style.heading} ${style.center}`}>
            Контактная информация
          </h2>
          <div className={`${style.footerList} ${style.centera}`}>
            <div className={style.footerColumn}>
              <p className={style.text}>
                <svg
                  width="18"
                  height="19"
                  viewBox="0 0 18 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_305_1774)">
                    <path
                      d="M2 7.88462C2 11.1154 5.6 15.2436 8 16.5C9.92 15.2077 14 11.1154 14 7.88462C14 5.53709 12.32 2.5 8 2.5C3.2 2.5 2 4.65385 2 7.88462Z"
                      fill="#006EFF"
                    />
                    <circle cx="8" cy="8.5" r="3" fill="white" />
                  </g>
                  <defs>
                    <clipPath id="clip0_305_1774">
                      <rect
                        width="18"
                        height="18"
                        fill="white"
                        transform="translate(0 0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                г. Абакан, ул. Дружбы Народов, 63Б
              </p>
              <p className={style.text}>
                <Link className={style.link} href="tel:31-31-01">
                  <svg
                    width="18"
                    height="19"
                    viewBox="0 0 18 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_305_1780)">
                      <path
                        d="M4.96875 8.59625C6.04875 10.7188 7.785 12.455 9.91125 13.535L11.5612 11.8813C11.7675 11.675 12.0638 11.615 12.3225 11.6975C13.1625 11.975 14.0662 12.125 15 12.125C15.4163 12.125 15.75 12.4587 15.75 12.875V15.5C15.75 15.9163 15.4163 16.25 15 16.25C7.9575 16.25 2.25 10.5425 2.25 3.5C2.25 3.08375 2.5875 2.75 3 2.75H5.625C6.04125 2.75 6.375 3.08375 6.375 3.5C6.375 4.43375 6.525 5.3375 6.8025 6.1775C6.885 6.43625 6.825 6.7325 6.61875 6.93875L4.96875 8.59625Z"
                        fill="#006FFF"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_305_1780">
                        <rect
                          width="18"
                          height="18"
                          fill="white"
                          transform="translate(0 0.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  31-31-01
                </Link>
              </p>
            </div>
            <div className={style.footerColumn}>
              <p className={style.text}>
                {" "}
                <svg
                  width="18"
                  height="19"
                  viewBox="0 0 18 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_305_1785)">
                    <rect
                      x="2"
                      y="5.5"
                      width="14"
                      height="11"
                      rx="2"
                      fill="#006FFF"
                    />
                    <path
                      d="M7 3.5C7 2.94772 6.55228 2.5 6 2.5C5.44772 2.5 5 2.94772 5 3.5H7ZM6 3.5H5V9.5H6H7V3.5H6Z"
                      fill="#006FFF"
                    />
                    <path
                      d="M13 3.5C13 2.94772 12.5523 2.5 12 2.5C11.4477 2.5 11 2.94772 11 3.5H13ZM12 3.5H11V9.5H12H13V3.5H12Z"
                      fill="#006FFF"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_305_1785">
                      <rect
                        width="18"
                        height="18"
                        fill="white"
                        transform="translate(0 0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                Пн–Пт: 9:00–18:00, Сб–Вс: выходной
              </p>
              <p className={style.text}>
                Оставьте заявку на сайте или позвоните нам!
              </p>
            </div>
          </div>
        </address>
      </div>

      <div className={style.footerBottom}>
        <div className={style.footerContainer}>
          <div className={style.center}>
            <Link href="https://huntteam.ru">
              <Image
                src="/Images/HuntTeam.svg"
                width={217}
                height={24.47}
                alt="Веб-студия HuntTeam"
              />
            </Link>
          </div>
          <p className={style.text}>Рекламное агентство в Абакане и Хакасии</p>
          <ul className={style.socialLinks}>
            <li className={style.socialItem}>
              <img src="/Images/te.svg" alt="Телеграм канал" />
              <Link
                className={style.socialLink}
                href="https://t.me/spectrum_manager01"
                aria-label="Telegram"
              >
                spectrum_manager01
              </Link>
            </li>
            <li className={style.socialItem}>
              <img src="/Images/vk.svg" alt="Телеграм канал" />
              <Link
                className={style.socialLink}
                href="https://vk.com/spectrum360"
                aria-label="VK"
              >
                spectrum360
              </Link>
            </li>
            <li className={style.socialItem}>
              <img src="/Images/ma.svg" alt="Почта" />
              <Link
                className={style.socialLink}
                href="mailto:spectrum119@mail.ru"
                aria-label="Почта"
              >
                spectrum119@mail.ru
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

function logoSVG() {
  return (
    <div className={style.svg}>
      <svg
        width="325"
        height="39"
        viewBox="0 0 325 39"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_305_1755)">
          <path
            d="M325 33.1205V8.52555C325 6.93143 323.634 6.02051 321.812 6.02051C320.445 6.02051 319.762 6.47597 319.079 7.15916L304.049 26.9718L289.018 7.15916C288.335 6.24824 287.652 6.02051 286.286 6.02051C284.464 6.02051 283.097 6.7037 283.097 8.52555V33.1205H288.563V15.5852L301.544 32.4373C302.227 33.1205 302.91 33.576 304.049 33.576C305.187 33.576 306.098 33.1205 306.554 32.4373L319.534 15.5852V32.8928H325V33.1205Z"
            fill="#B5B5B5"
          />
          <path
            d="M199.748 33.1209V11.7142H210.907V6.7041H182.668V11.7142H193.827V33.1209H199.748Z"
            fill="#B5B5B5"
          />
          <path
            d="M181.757 33.1209L166.271 19.457L181.302 6.7041H173.331L158.984 19.2293V6.7041H153.063V33.1209H158.984V20.1402L173.787 33.1209H181.757Z"
            fill="#B5B5B5"
          />
          <path
            d="M149.419 33.1209V28.1108H130.973C127.557 28.1108 126.646 27.1999 126.646 24.0117V22.1898H149.192V17.4075H126.646V15.8133C126.646 12.8528 127.557 11.7142 130.973 11.7142H137.577V6.7041H130.973C123.23 6.7041 120.953 9.20914 120.953 15.8133V24.0117C120.953 30.6159 123.23 33.1209 130.973 33.1209H149.419Z"
            fill="#B5B5B5"
          />
          <path
            d="M82.4664 33.1209V28.1108H64.4756C60.8319 28.1108 59.921 27.1999 59.921 23.7839V16.0411C59.921 12.8528 60.8319 11.7142 64.4756 11.7142H82.4664V6.7041H64.0202C56.2773 6.7041 54 9.20914 54 15.8133V24.0117C54 30.6159 56.2773 33.1209 64.0202 33.1209H82.4664Z"
            fill="#B5B5B5"
          />
          <path
            d="M117.537 33.1209H112.527V17.1797C112.527 13.536 111.616 12.6251 108.2 12.6251H95.6749C92.4866 12.6251 91.348 13.536 91.348 17.1797V33.3486H86.3379V16.7243C86.3379 8.98141 88.8429 6.7041 95.4471 6.7041H108.428C115.032 6.7041 117.537 8.98141 117.537 16.7243V33.1209Z"
            fill="#B5B5B5"
          />
          <path
            d="M239.145 17.1795C239.145 19.9123 238.234 20.8232 235.046 20.8232H219.788V11.714H234.818C238.007 11.714 238.918 12.6249 238.918 15.3577V17.1795H239.145ZM235.046 25.6056C242.789 25.6056 245.066 23.7837 245.066 17.635V15.3577C245.066 9.20895 242.789 6.93164 235.046 6.93164H213.867V33.3484H219.788V25.8333H235.046V25.6056Z"
            fill="#B5B5B5"
          />
          <path
            d="M268.523 33.1209C276.266 33.1209 278.543 30.6159 278.543 24.0117V6.7041H272.622V18.0907C267.612 18.0907 262.602 18.0907 257.592 18.0907C255.77 18.0907 253.492 18.0907 253.265 15.5856C253.265 12.3974 253.265 9.66461 253.265 6.7041C251.443 6.7041 249.393 6.7041 247.571 6.7041C247.571 8.52595 247.571 10.5755 247.344 12.3974C247.344 13.536 247.344 13.9915 247.344 15.8133C247.344 17.8629 248.255 20.368 250.76 21.5066C251.898 22.1898 253.72 22.4175 256.681 22.6453H272.622V24.0117C272.622 27.1999 271.483 28.3386 267.84 28.3386H258.958C258.73 28.3386 252.809 28.3386 252.582 28.3386V33.3486H268.523V33.1209Z"
            fill="#B5B5B5"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M137.35 6.7041H148.964V11.7142H137.35V6.7041Z"
            fill="#565656"
          />
          <rect y="0.84375" width="19" height="19" fill="#C9C9C9" />
          <rect y="19.8438" width="19" height="19" fill="#EFEFEF" />
          <rect x="19" y="0.84375" width="19" height="19" fill="#565656" />
          <rect x="19" y="19.8438" width="19" height="19" fill="#B5B5B5" />
        </g>
        <defs>
          <clipPath id="clip0_305_1755">
            <rect
              width="325"
              height="38"
              fill="white"
              transform="translate(0 0.5)"
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}
