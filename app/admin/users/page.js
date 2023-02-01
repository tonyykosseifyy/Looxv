"use client"
import {useState} from 'react'
import styles from "./styles.module.css";
import ResponsiveDialog from './Dialog';
import Row from "./Rows";

const users = [
  {
    "id": "ui2bdijq1jns1uoxs",
    "name" : "tony kosseify",
    "email": "tonykosseify@gmail.com",
    "password": "daksdnkjbiqjqdnamsd"
  },
  {
    "id": "ui2bdijq1jns1uoxs",
    "name" : "tony kosseify",
    "email": "tonykosseify@gmail.com",
    "password": "daksdnkjbiqjqdnamsd"
  },
  {
    "id": "ui2bdijq1jns1uoxs",
    "name" : "tony kosseify",
    "email": "tonykosseify@gmail.com",
    "password": "daksdnkjbiqjqdnamsd"
  },
  {
    "id": "ui2bdijq1jns1uoxs",
    "name" : "tony kosseify",
    "email": "tonykosseify@gmail.com",
    "password": "daksdnkjbiqjqdnamsd"
  },
  {
    "id": "ui2bdijq1jns1uoxs",
    "name" : "tony kosseify",
    "email": "tonykosseify@gmail.com",
    "password": "daksdnkjbiqjqdnamsd"
  },
  {
    "id": "ui2bdijq1jns1uoxs",
    "name" : "tony kosseify",
    "email": "tonykosseify@gmail.com",
    "password": "daksdnkjbiqjqdnamsd"
  },
  {
    "id": "ui2bdijq1jns1uoxs",
    "name" : "tony kosseify",
    "email": "tonykosseify@gmail.com",
    "password": "daksdnkjbiqjqdnamsd"
  },
  {
    "id": "ui2bdijq1jns1uoxs",
    "name" : "tony kosseify",
    "email": "tonykosseify@gmail.com",
    "password": "daksdnkjbiqjqdnamsd"
  },
  {
    "id": "ui2bdijq1jns1uoxs",
    "name" : "tony kosseify",
    "email": "tonykosseify@gmail.com",
    "password": "daksdnkjbiqjqdnamsd"
  },
  {
    "id": "ui2bdijq1jns1uoxs",
    "name" : "tony kosseify",
    "email": "tonykosseify@gmail.com",
    "password": "daksdnkjbiqjqdnamsd"
  },
  {
    "id": "ui2bdijq1jns1uoxs",
    "name" : "tony kosseify",
    "email": "tonykosseify@gmail.com",
    "password": "daksdnkjbiqjqdnamsd"
  },
  {
    "id": "ui2bdijq1jns1uoxs",
    "name" : "tony kosseify",
    "email": "tonykosseify@gmail.com",
    "password": "daksdnkjbiqjqdnamsd"
  },
  {
    "id": "ui2bdijq1jns1uoxs",
    "name" : "tony kosseify",
    "email": "tonykosseify@gmail.com",
    "password": "daksdnkjbiqjqdnamsd"
  }
]

function Users() {
  const [edit, setEdit] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [ user, setUser ] = useState({});
  const open = (user) => {
    setEdit(true);
    setUser(user)
  }
  const handleEdit = ( user ) => {
    open(user);
    setDeleting(false);
  }
  const handleDelete = ( user ) => {
    open(user);
    setDeleting(true);
  }
  return (
    <div className={styles.users_wrapper}>
        <div className={`${styles.users_header} ${styles.grid}`}>
          <div><p>#user_id</p></div>
          <div><p>full name</p></div>
          <div><p>email</p></div>
          <div><p>password</p></div>
          <div><p>provider</p></div>
        </div>

      <div className={styles.users_table}>
        {users.map((user) => (
          <Row 
            key={user} 
            user={user} 
            handleEdit={() => handleEdit(user)} 
            handleDelete={() => handleDelete(user)}
            setOpen={() => setEdit(true)} 
          />
        ))}
        <ResponsiveDialog open={edit} setOpen={setEdit} deleting={deleting} user={user} />
      </div>
    </div>
  )
}

export default Users