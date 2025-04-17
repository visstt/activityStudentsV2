import React from "react";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header>
      <div className="container">
        <div className={styles.header}>
          <div className={styles.logo_section}>
            <img src="/logo.svg" alt="logo" />
            <h1>Эхо участия</h1>
          </div>
          <div className={styles.nav_section}>
            <ul>
              <li className={styles.active}>Основная таблица</li>
              <li>Оценка мероприятия</li>
            </ul>
          </div>
          <div className={styles.user_section}>
            <img src="/bell.svg" alt="bell" className={styles.bell} />
            <div className={styles.user_info}>
              <h2>Селиверстов С.А.</h2>
              <p>Директор</p>
            </div>
            <img
              src="/user_logo.svg"
              alt="user_logo"
              className={styles.user_logo}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
