import NotFound from "./components/NotFound";

export const metadata = {
  title: "Страница не найдена",
  description: "Такой страницы не существует!",
};

export default function GlobalNotFound() {
  return <NotFound />;
}
