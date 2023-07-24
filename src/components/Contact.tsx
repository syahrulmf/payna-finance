import Image from "next/image";

import about from "@/assets/images/about.png";
import play from "@/assets/images/btn_play.svg";

import styles from "@/styles/components/contact.module.scss";

export default function Contact() {
  return (
    <section className={styles.contact}>
      <div className={styles.row}>
        <div className={styles.contactImg}>
          <Image priority src={about} alt="contact" className={styles.img} />
          <Image priority src={play} alt="play" className={styles.imgPlay} />
        </div>
        <div className={styles.contactText}>
          <p className={styles.textTag}>SAVE MORE TIME</p>
          <h3 className={styles.textTitle}>And Boost Productivity</h3>
          <p className={styles.textDesc}>
            Your employees can bring any success into your business, so we need
            to take care of them
          </p>
          <div className={styles.contactForm}>
            <input type="email" placeholder="Email Address" />
            <button>Get Started</button>
          </div>
        </div>
      </div>
    </section>
  );
}
