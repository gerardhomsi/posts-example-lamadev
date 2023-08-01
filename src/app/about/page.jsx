import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          fill={true}
          alt=""
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDesc}>
            Handcrafting award wining digital experience
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            quibusdam deleniti, ab architecto adipisci, illum unde culpa quod
            officia, corrupti molestias rerum sed et quia distinctio quasi modi
            vero porro minima cupiditate.
            <br />
            <br />
            Nisi exercitationem laborum in, dolores eligendi eius voluptatum
            ipsa veniam alias non dolore aliquam fugit at blanditiis error.
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What We Do?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            quibusdam deleniti, ab architecto adipisci, illum unde culpa quod
            officia, corrupti molestias rerum sed et quia distinctio quasi modi
            vero porro minima cupiditate.
            <br />
            <br />
            - Nisi exercitationem laborum.
            <br />
            <br />
            - Dolores eligendi eius voluptatum.
            <br />
            <br />- Ipsa veniam alias non dolore aliquam.
          </p>
          <Button url="/contact-us" text="Contact" />
        </div>
      </div>
    </div>
  );
};

export default About;
