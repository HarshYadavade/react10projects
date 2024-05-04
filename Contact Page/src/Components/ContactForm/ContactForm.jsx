import Button from "../Button/Button";
import styles from "./Contact.module.css";
import { MdCall } from "react-icons/md";
import { MdMessage } from "react-icons/md";
import { MdMail } from "react-icons/md";
import { useState } from "react";
const ContactForm = () => {
  const [name, setName] = useState("Harsh");
  const onSubmitHandle = (e) => {
    e.preventDefault();
    console.log("Submitted");
    setName(e.target[0].value);
  };

  return (
    <div className={`${styles.content} container`}>
      <div>
        <div className={styles.btn_grp}>
          <Button text="VIA SUPPORT CHAT" icon=<MdMessage fontSize={24} /> />
          <Button text="VIA CALL" icon=<MdCall fontSize={24} /> />
          <div className={styles.big}>
            <Button
              isSecondary={true}
              text="VIA EMAIL FORM"
              icon=<MdMail fontSize={24} />
            />
          </div>
        </div>
        <form onSubmit={onSubmitHandle}>
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="text">Text</label>
            <textarea name="text" rows="5" />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "end",
            }}
          >
            <Button text="SUBMIT" />
          </div>
        </form>
      </div>
      <div className={styles.img_container}>
        <img src="/images/main.svg" alt="" />
      </div>
    </div>
  );
};

export default ContactForm;
