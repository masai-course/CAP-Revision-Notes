import React, { useState } from "react";
import styles from "./form.module.css";

const Form = () => {
   const [data, setData] = useState({
      email: "",
      password: "",
      gender: "",
   });
   const [token, setToken] = useState("");

   const handleChange = (e) => {
      const { value, name, type } = e.target;
      if (type === "radio") {
         setData({ ...data, gender: value });
      } else {
         if (name === "email") {
            setData({ ...data, email: value });
         } else {
            setData({ ...data, password: value });
         }
      }
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      fetch("https://reqres.in/api/login", {
         method: "POST",
         headers: {
            "content-type": "application/json",
         },
         body: JSON.stringify(data),
      })
         .then((res) => res.json())
         .then((data) => {
            console.log(data);
            if (data?.token) {
               setToken(data.token);
            } else {
               alert(data.error);
            }
         })
         .catch((err) => console.log("ERROR:", err));
   };
   return (
      <>
         <h2>{token === "" ? "User is not logged in" : `Token: ${token}`}</h2>
         <form onSubmit={handleSubmit} className={styles.form}>
            <h3 className={styles.heading}>Login</h3>
            <table className={styles.table}>
               <tbody>
                  <tr>
                     <td>
                        <label htmlFor="email">Email</label>
                     </td>
                     <td>
                        <input
                           id="email"
                           name="email"
                           onChange={handleChange}
                           value={data.email}
                           type="email"
                        />
                     </td>
                  </tr>
                  <tr>
                     <td>
                        <label htmlFor="password">Password</label>
                     </td>
                     <td>
                        <input
                           id="password"
                           name="password"
                           onChange={handleChange}
                           value={data.password}
                           type="password"
                        />
                     </td>
                  </tr>
                  <tr>
                     <td>Gender</td>
                     <td>
                        <input
                           id="a"
                           onChange={handleChange}
                           value="Male"
                           type="radio"
                           checked={data.gender === "Male"}
                        />
                        <label htmlFor="a">Male</label>
                        <input
                           id="b"
                           onChange={handleChange}
                           value="Female"
                           type="radio"
                           checked={data.gender === "Female"}
                        />
                        <label htmlFor="b">Female</label>
                     </td>
                  </tr>
               </tbody>
            </table>
            <input className={styles.submitBtn} type="submit" />
         </form>
      </>
   );
};

export default Form;
