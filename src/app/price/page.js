import Footer from "../components/Footer";
import Header from "../components/Header";
import PriceComponent from "../components/Price";
import Request from "../components/Request";
export default function Price() {
  return (
    <div>
      <Header />
      <main>
        <PriceComponent />
        <Request
          bottomText={
            "Оставьте заявку, и мы подготовим подробное коммерческое предложение!"
          }
          topText={"Точная стоимость рассчитывается после обсуждения проекта"}
        />
      </main>
      <Footer />
    </div>
  );
}
