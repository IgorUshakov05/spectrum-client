import Footer from "../components/Footer";
import Header from "../components/Header";
import OutCases from "../components/OutCases";
import Request from "../components/Request";

export default function Case() {
  return (
    <div>
      <Header />
      <main>
        <OutCases />
        <Request
          bottomText={
            "Оставьте заявку и обсудите свой проект с нашей командой!"
          }
          topText={"Хотите такой же результат?"}
        />
      </main>
      <Footer />
    </div>
  );
}
