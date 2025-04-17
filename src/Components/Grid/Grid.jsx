import React from "react";
import styles from "./Grid.module.css";

export default function Grid() {
  return (
    <div className="container">
      <div className={styles.parent}>
        <div className={`${styles.div1} ${styles.div}`}>
          <img src="/chart.png" alt="" />
        </div>
        <div className={styles.div2}>
          <h2>Список лучших студентов</h2>
          <ol>
            <li>
              <b>Сергеев К.</b> - 42 балла
            </li>
            <li>
              <b>Иванов Р</b> - 34 баллов
            </li>
            <li>
              <b>Констанов К.</b> - 32 баллов
            </li>
            <li>
              <b>Олежко А.</b> - 30 баллов
            </li>
            <li>
              <b>Кемров В.</b>- 28 баллов
            </li>
            <li>
              <b>Садиков Д.</b> - 24 баллов
            </li>
            <li>
              <b>Садиков Д.</b> - 12 балла
            </li>
          </ol>
        </div>
        <div className={styles.div3}>
          <h2>Список лучших организаторов</h2>
          <ol>
            <li>
              <b>Сергеев К.</b> - 10 мероприятий организовано
            </li>
            <li>
              <b>Иванов Р</b> - 7 мероприятий организовано
            </li>
            <li>
              <b>Констанов К.</b> - 6 мероприятий организовано
            </li>
            <li>
              <b>Олежко А.</b> - 5 мероприятий организовано
            </li>
            <li>
              <b>Кемров В.</b>- 3 мероприятий организовано
            </li>
          </ol>
        </div>
        <div className={styles.div4}>
          <div className={styles.filter_wrapper}>
            <div className={styles.name_section}>
              <p>Выбранный фильтр</p>
              <div className={styles.block}>
                <p>3пк1</p>
              </div>
            </div>
            <div className={styles.button_section}>
              <button className={styles.filter_btn}>Фильтры</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
