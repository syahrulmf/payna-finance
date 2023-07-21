import Image from "next/image";

import heroImg from "@/assets/images/hero.png";

import styles from "@/styles/components/hero.module.scss";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.row}>
        <div className={styles.heroTitle}>
          <h1>Manage Payroll Like an Expert</h1>
          <p>
            Payna is helping you to setting up the payroll without required any
            finance skills or knowledge before
          </p>
          <button>Get Started</button>
        </div>
        <div className={styles.heroImg}>
          <Image src={heroImg} alt="Payna Finance Logo" />
        </div>
      </div>
    </section>
  );
}
