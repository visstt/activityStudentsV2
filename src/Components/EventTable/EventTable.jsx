import React from "react";
import styles from "./EventTable.module.css";

export default function EventTable() {
  return (
    <div className={styles.event_table}>
      <div className={styles.create_event}>
        <h2>Мероприятия</h2>
        <button className={styles.add_event_btn}>Добавить мероприятие</button>
      </div>
    </div>
  );
}
