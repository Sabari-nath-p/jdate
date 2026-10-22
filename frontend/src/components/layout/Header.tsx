import Link from "next/link";
import styles from "@/styles/Layout.module.css";
import { APP_NAME } from "@/utils/constants";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        {APP_NAME}
      </Link>
      <nav className={styles.nav}>
        <Link href="/login">Login</Link>
        <Link href="/register">Register</Link>
      </nav>
    </header>
  );
}
