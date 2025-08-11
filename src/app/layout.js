import "./globals.css";

import localFont from "next/font/local";
import Script from "next/script";
export const inter = localFont({
  variable: "--font-inter",
  display: "swap",
  src: [
    {
      path: "../fonts/Inter/static/Inter_18pt-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../fonts/Inter/static/Inter_18pt-ThinItalic.ttf",
      weight: "100",
      style: "italic",
    },
    {
      path: "../fonts/Inter/static/Inter_18pt-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Inter/static/Inter_18pt-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../fonts/Inter/static/Inter_18pt-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/Inter/static/Inter_18pt-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../fonts/Inter/static/Inter_18pt-Black.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../fonts/Inter/static/Inter_18pt-BlackItalic.ttf",
      weight: "900",
      style: "italic",
    },
  ],
});
export const raleway = localFont({
  src: [
    {
      path: "../fonts/Raleway/Raleway-VariableFont_wght.ttf",
      weight: "100 900",
      style: "normal",
    },
    {
      path: "../fonts/Raleway/Raleway-Italic-VariableFont_wght.ttf",
      weight: "100 900",
      style: "italic",
    },
  ],
  variable: "--font-raleway",
  display: "swap",
});
export const gteesti = localFont({
  variable: "--font-gteesti",
  display: "swap",
  src: [
    {
      path: "../fonts/GT/gteestiprodisplay_thin.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../fonts/GT/gteestiprodisplay_light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/GT/gteestiprodisplay_regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/GT/gteestiprodisplay_medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/GT/gteestiprodisplay_bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/GT/gteestiprodisplay_ultrabold.otf",
      weight: "800",
      style: "normal",
    },
  ],
});
const involve = localFont({
  src: [
    {
      path: "../fonts/Involve/Involve-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Involve/Involve-Oblique.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../fonts/Involve/Involve-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/Involve/Involve-MediumOblique.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../fonts/Involve/Involve-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/Involve/Involve-SemiBoldOblique.ttf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../fonts/Involve/Involve-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/Involve/Involve-BoldOblique.ttf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-involve",
  display: "swap",
});

export const metadata = {
  title: "Спектрум — Наружная реклама и вывески в Абакане",
  description:
    "Рекламное агентство Спектрум — наружная реклама, вывески, световые конструкции и баннеры в Абакане. С 2010 года, более 3000 проектов. Гарантия, качество и сроки.",
  keywords: [
    "наружная реклама Абакан",
    "рекламное агентство",
    "вывески",
    "баннеры",
    "световые короба",
    "таблички",
    "брендирование авто",
    "Спектрум",
  ],
  openGraph: {
    title: "Спектрум — Наружная реклама в Абакане",
    description:
      "Изготавливаем вывески, баннеры и световые конструкции с 2010 года. Более 3000 реализованных проектов. Закажите наружную рекламу с гарантией!",
    url: "https://spectrum360.ru/",
    siteName: "Спектрум",
    images: [
      {
        url: "https://spectrum360.ru/preview.jpg",
        alt: "Спектрум наружная реклама",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Спектрум — Наружная реклама и вывески в Абакане",
    description:
      "Рекламное агентство полного цикла. Наружная реклама, баннеры, таблички, брендирование автомобилей — всё под ключ.",
    images: ["https://spectrum360.ru/preview.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <Script id="yandex-metrika" strategy="afterInteractive">
        {`
            (function(m,e,t,r,i,k,a){
        m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
        m[i].l=1*new Date();
        for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
        k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
    })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=103628101', 'ym');

    ym(103628101, 'init', {ssr:true, webvisor:true, clickmap:true, ecommerce:"dataLayer", accurateTrackBounce:true, trackLinks:true});
          `}
      </Script>

      <body
        className={`${inter.variable} ${gteesti.variable} ${raleway.variable} ${involve.variable}`}
      >
        <noscript>
          <div>
            <img
              src="https://mc.yandex.ru/watch/103628101"
              style={{ position: "absolute", left: "-9999px" }}
              alt=""
            />
          </div>
        </noscript>
        {children}
      </body>
    </html>
  );
}
