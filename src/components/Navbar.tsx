import cx from "classnames";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

import Logo from "@/assets/images/logo.png";

import styles from "@/styles/components/navbar.module.scss";

export default function Navbar() {
  const [isActive, setActive] = useState(false);

  const handleClick = () => setActive((state) => !state);

  return (
    <nav className={styles.navbar}>
      <Link href="#" className={styles.navbarLogo}>
        <Image src={Logo} alt="Payna Finance Logo" />
      </Link>

      <div className={cx(styles.navbarNav, isActive && styles.active)}>
        <Link href="#" className={styles.navLink}>
          Home
        </Link>
        <Link href="#" className={styles.navLink}>
          Features
        </Link>
        <Link href="#" className={styles.navLink}>
          Showcase
        </Link>
        <Link href="#" className={styles.navLink}>
          Pricing
        </Link>
      </div>

      <div className={styles.navbarExtra}>
        <Link href="#" className={styles.loginButton}>
          Sign In
        </Link>
        <Link href="#" id={styles.hamburgerMenu} onClick={handleClick}>
          <GiHamburgerMenu width={10} />
        </Link>
      </div>
    </nav>
  );
}
