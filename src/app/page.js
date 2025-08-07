import styles from "./page.module.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Langing from "./components/Landing";
import About from "./components/About";
import Make from "./components/Make";
import Cases from "./components/Cases";
import HowWorks from "./components/HowWorks";
import SendRequiest from "./components/SendRequest";
import metadata from "./components/Head";
export { metadata };

export default function Home() {
  return (
    <>
      <div className={styles.page}>
        <Header />
        <main>
          <Langing />
          <About />
          <Make />
          <Cases />
          <HowWorks />
          <SendRequiest />
        </main>
        <Footer />
      </div>
    </>
  );
}
