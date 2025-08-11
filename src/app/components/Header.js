"use client";
import style from "@/app/components/Header.module.css";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Form from "./Form";
export default function Header() {
  const [isOpen, open] = useState(false);
  const [openModal, setOpen] = useState(false);
  const hundleOpen = () => {
    setOpen(false);
  };
  return (
    <>
      {openModal && <Form close={hundleOpen} />}
      <header className={style.header}>
        <div className={style.container}>
          <div className={style.logo}>
            <Link href="/" className={style.logoLink}>
              <Image
                width={229}
                className={style.logoip}
                height={37}
                src="/Images/logo.png"
                alt="Логотип Спектрум"
                priority
              />
            </Link>
          </div>

          <nav className={style.nav}>
            <ul className={style.navList}>
              <li className={`${style.navItem} ${style.cyan}`}>
                <Link href="/company" className={style.navLink}>
                  О компании
                </Link>
              </li>
              <li className={`${style.navItem} ${style.pink}`}>
                <a href="/case" className={style.navLink}>
                  Наши работы
                </a>
              </li>
              <li className={`${style.navItem} ${style.yellow}`}>
                <Link href="/price" className={style.navLink}>
                  Цены
                </Link>
              </li>
            </ul>
          </nav>

          <div className={style.phoneAndButton}>
            <button
              onClick={() => {
                navigator.clipboard.writeText("31-31-01");
              }}
              className={style.phone}
            >
              <svg
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_79_75)">
                  <path
                    d="M7.17708 11.6946C8.73708 14.7604 11.245 17.2683 14.3163 18.8283L16.6996 16.4396C16.9975 16.1417 17.4254 16.055 17.7992 16.1742C19.0125 16.575 20.3179 16.7917 21.6667 16.7917C22.2679 16.7917 22.75 17.2738 22.75 17.875V21.6667C22.75 22.2679 22.2679 22.75 21.6667 22.75C11.4942 22.75 3.25 14.5058 3.25 4.33333C3.25 3.73208 3.7375 3.25 4.33333 3.25H8.125C8.72625 3.25 9.20833 3.73208 9.20833 4.33333C9.20833 5.68208 9.425 6.9875 9.82583 8.20083C9.945 8.57458 9.85833 9.0025 9.56042 9.30042L7.17708 11.6946Z"
                    fill="#006FFF"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_79_75">
                    <rect width="26" height="26" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              31-31-01
            </button>
            <button className={style.button} onClick={() => setOpen(true)}>
              Оставить заявку
            </button>
          </div>
        </div>
        <div className={style.mobile}>
          <div className={style.phoneMob}>
            <button
              onClick={() => {
                navigator.clipboard.writeText("31-31-01");
              }}
              className={style.phoneToMob}
            >
              <svg
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_79_75)">
                  <path
                    d="M7.17708 11.6946C8.73708 14.7604 11.245 17.2683 14.3163 18.8283L16.6996 16.4396C16.9975 16.1417 17.4254 16.055 17.7992 16.1742C19.0125 16.575 20.3179 16.7917 21.6667 16.7917C22.2679 16.7917 22.75 17.2738 22.75 17.875V21.6667C22.75 22.2679 22.2679 22.75 21.6667 22.75C11.4942 22.75 3.25 14.5058 3.25 4.33333C3.25 3.73208 3.7375 3.25 4.33333 3.25H8.125C8.72625 3.25 9.20833 3.73208 9.20833 4.33333C9.20833 5.68208 9.425 6.9875 9.82583 8.20083C9.945 8.57458 9.85833 9.0025 9.56042 9.30042L7.17708 11.6946Z"
                    fill="#006FFF"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_79_75">
                    <rect width="26" height="26" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              31-31-01
            </button>
          </div>
          <div className={style.menu}>
            <div
              className={`${style.close} ${isOpen ? style.open : ""}`}
              onClick={() => open(!isOpen)}
            >
              <div className={style.line1}></div>
              <div className={style.line2}></div>
              <div className={style.line3}></div>
            </div>
            {isOpen && (
              <nav className={style.navMob}>
                <ul className={style.navListMob}>
                  <li className={`${style.navItemMob} ${style.cyanMob}`}>
                    <Link href="/company" className={style.navLinkMob}>
                      О компании
                    </Link>
                  </li>
                  <li className={`${style.navItemMob} ${style.pinkMob}`}>
                    <a href="/case" className={style.navLinkMob}>
                      Наши работы
                    </a>
                  </li>
                  <li className={`${style.navItemMob} ${style.yellowMob}`}>
                    <Link href="/price" className={style.navLinkMob}>
                      Цены
                    </Link>
                  </li>
                </ul>
              </nav>
            )}
          </div>
        </div>
      </header>
    </>
  );
}
