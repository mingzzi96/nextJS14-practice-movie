"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../styles/navigation.module.css";

export default function Navigation() {
  const path = usePathname();
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href="/">HOME</Link>
          {path === "/" ? "✨" : null}
        </li>
        <li>
          <Link href="/about-us">ABOUT US</Link>
          {path === "/about-us" ? "🙋‍♀️" : null}
        </li>
      </ul>
    </nav>
  );
}
