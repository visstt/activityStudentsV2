import React from "react";
import styles from "./Grid.module.css";

export default function Grid() {
  return (
    <div className="container">
      <div className={styles.parent}>
        <div className={`${styles.div1} ${styles.div}`}>
          <img src="/chart.png" alt="" />
        </div>
        <div className={`${styles.div2} ${styles.div}`}>
          <h2>Список лучших студентов</h2>
          <ol>
            <li>Сергеев К. - 42 балла</li>
            <li>Иванов Р. - 34 баллов</li>
            <li>Констанов К. - 32 баллов</li>
            <li>Олежко А. - 30 баллов</li>
            <li>Кемров В. - 28 баллов</li>
            <li>Садиков Д. - 24 баллов</li>
            <li>Махаури О. - 12 балла</li>
          </ol>
        </div>
        <div className={`${styles.div3} ${styles.div}`}></div>
        <div className={`${styles.div4} ${styles.div}`}></div>
      </div>
    </div>
  );
}
