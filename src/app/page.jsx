import Image from "next/image";
import Hero from "public/hero.png";
import styles from "./page.module.css";
import Button from "@/components/Button/Button";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Better design for your digital products
        </h1>
        <p className={styles.description}>
          Turning your ideas into reality. We bring together the teams from
          global tech industry
        </p>
        <Button url="/portfolio" text="See Our Work" />
      </div>
      <div className={styles.item}></div>
      <Image src={Hero} alt="hero image" className={styles.img} />
    </div>
  );
}
