import Footer from "../components/Footer";
import Header from "../components/Header";
import СompanyLanding from "@/app/components/СompanyLanding.js";
import Partners from "../components/Partners";
import Location from "../components/Location";
import Contacts from "../components/Contacts";
import Request from "../components/Request";
import metadata from "../components/Head/company";
export { metadata };
export default function Company() {
  return (
    <div>
      <Header />
      <main>
        <СompanyLanding />
        <Partners />
        <Location />
        <Contacts />
        <Request
          bottomText={"чтобы обсудить ваш проект с нашей командой!"}
          topText={"Оставьте заявку"}
        />
      </main>
      <Footer />
    </div>
  );
}
