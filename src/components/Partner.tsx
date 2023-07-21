import Image from "next/image";

import adobeImg from "@/assets/images/adobe_ico.png";
import appleImg from "@/assets/images/apple_ico.png";
import googleImg from "@/assets/images/google_ico.png";
import slackImg from "@/assets/images/slack_ico.png";
import spotifyImg from "@/assets/images/spotify_ico.png";

import styles from "@/styles/components/partner.module.scss";

export default function Partner() {
  return (
    <section className={styles.partner} id="partner">
      <div className={styles.row}>
        <div className={styles.partnerTitle}>
          <h3>
            Trusted by <span>Global Companies</span>
          </h3>
        </div>
        <div className={styles.partnerImg}>
          <Image src={appleImg} alt="Apple Icon" />
          <Image src={adobeImg} alt="Adobe Icon" />
          <Image src={slackImg} alt="Slack Icon" />
          <Image src={spotifyImg} alt="Spotify Icon" />
          <Image src={googleImg} alt="Google Icon" />
        </div>
      </div>
    </section>
  );
}
