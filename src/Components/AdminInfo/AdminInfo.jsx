import React from "react";
import styles from "./AdminInfo.module.css";

export default function AdminInfo() {
  return (
    <div className={styles.info_wrapper}>
      <h2>Информация о пользователе</h2>
      <div className={styles.tralalero}>
        <div className={styles.blockInfo}>
          <h3>ФИО</h3>
          <p>Садиков Виталий Дмитиревич</p>
        </div>
        <div className={styles.blockInfo}>
          <h3>Логин</h3>
          <p>vitaly.sadikov</p>
        </div>
        <div className={styles.blockInfo}>
          <h3>Роль</h3>
          <p>Администратор</p>
        </div>
      </div>
    </div>
  );
}
