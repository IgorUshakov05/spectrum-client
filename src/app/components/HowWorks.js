import style from "./HowWorks.module.css";
import Stages from "./Stages";

export default function HowWorks() {
  return (
    <section className={style.container} aria-labelledby="how-works-heading">
      <div className={style.header}>
        <div></div>
        <h2 id="how-works-heading" className={style.title}>
          Как мы работаем
        </h2>
      </div>

      <div className={style.stages}>
        <Stages />
      </div>
    </section>
  );
}
