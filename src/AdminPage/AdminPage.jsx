import React from "react";
import styles from "./AdminPage.module.css";
import Header from "../Components/Header/Header";
import AdminInfo from "../Components/AdminInfo/AdminInfo";
import EventTable from "../Components/EventTable/EventTable";

export default function AdminPage() {
  return (
    <div>
      <Header />
      <div className="container">
        <div className={styles.adminPage_wrapper}>
          <h1>Личный кабинет администратора</h1>
          <div className={styles.admins_tables}>
            <AdminInfo />
            <EventTable />
          </div>
        </div>
      </div>
    </div>
  );
}
