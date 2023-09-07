import Head from "next/head";
import styles from "../styles/Home.module.css";
import FindUserForm from "../components/find-user-form";
import { useEffect, useState } from "react";
import UserList from "../components/user-list";
import axios from "axios";
import Cookie from "js-cookie";
import { v4 as uuidv4 } from "uuid";

export default function Home() {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    if (!Cookie.get("userId")) {
      Cookie.set("userId", uuidv4(), {
        expires: 365,
        path: "",
      });
    }
  }, []);

  const onSumbit = async ({ email, number }, event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("email", email);
    if (number) {
      formData.append("number", number);
    }
    let data = null;
    try {
      const response = await axios.post(
        `http://localhost:3001/users/list`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      data = response.data;
    } catch (error) {
      console.log(error);
    }
    setUsers(data);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Тестовое задание для 3205 team</h1>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>Найти пользователя</h3>
            <FindUserForm onSubmit={onSumbit} />
          </div>
        </div>
        <div className={styles.grid}>
          {users && Array.isArray(users) && users.length === 0 ? (
            <p>No users were found</p>
          ) : (
            users && <UserList users={users} />
          )}
        </div>
      </main>
    </div>
  );
}
