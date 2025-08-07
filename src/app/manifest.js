export default function manifest() {
  return {
    name: "Спектрум",
    short_name: "Спектрум",
    description: "Рекламное агентство в Абакане и Хакасии",
    lang: "ru",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png"
      },
      {
        src: "/android-chrome-270x270.png",
        sizes: "270x270",
        type: "image/png"
      },
      {
        src: "/favicon.ico",
        sizes: "32x32",
        type: "image/x-icon"
      }
    ]
  };
}
