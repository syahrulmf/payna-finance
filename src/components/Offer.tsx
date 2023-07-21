import Image from "next/image";

import briefcase from "@/assets/images/fi_briefcase.svg";
import gift from "@/assets/images/fi_gift.svg";
import globe from "@/assets/images/fi_globe.svg";
import send from "@/assets/images/fi_send.svg";
import trello from "@/assets/images/fi_trello.svg";
import wifi from "@/assets/images/fi_wifi-off.svg";

import styles from "@/styles/components/offer.module.scss";

export default function Offer() {
  const offerItems = [
    {
      name: "briefcase_ico",
      title: "Share Insight",
      description: "Working together with your team to make decisions",
      icon: briefcase,
      color: "#1F7CFF",
    },
    {
      name: "send_ico",
      title: "Track Leads",
      description: "See where your money goes and comes in business",
      icon: send,
      color: "#F75C4E",
    },
    {
      name: "wifi_ico",
      title: "Offline Mode",
      description: "Use the feature while off from internet? sure can",
      icon: wifi,
      color: "#191046",
    },
    {
      name: "trello_ico",
      title: "Kanban Mode",
      description: "Organize the report that easy to be understand",
      icon: trello,
      color: "#FF1FB3",
    },
    {
      name: "gift_ico",
      title: "Reward System",
      description: "Motivate your team working harder and receive a gift",
      icon: gift,
      color: "#5C4EF7",
    },
    {
      name: "briefcase_ico",
      title: "Share Insight",
      description: "Working together with your team to make decisions",
      icon: globe,
      color: "#F7954E",
    },
  ];
  return (
    <section className={styles.offer} id="offer">
      <div className={styles.row}>
        <div className={styles.offerTitle}>
          <p className={styles.titleTag}>WORK BETTER</p>
          <h2>For Your Bussiness</h2>
          <p className={styles.titleDesc}>
            We did research what your company needs and here we are providing
            all of them just for you
          </p>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.offerItems}>
          {offerItems.map((item, index) => (
            <div className={styles.item} key={index}>
              <div
                style={{ backgroundColor: item.color }}
                className={styles.itemIcon}
              >
                <Image priority src={item.icon} alt={item.name} />
              </div>
              <div className={styles.itemText}>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
