import style from "./Hero.module.scss";

export function Hero() {
  return (
    <div className={style.heroStyling}>
      <img src="../src/assets/hero.jpg" alt="" />
      <h1>NobleTime</h1>
      <h2>- "Elegance in Every Second"</h2>
    </div>
  );
}
