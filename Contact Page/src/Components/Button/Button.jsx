import styles from "./Button.module.css";
const Button = ({ text, icon, isSecondary }) => {
  return (
    <div>
      <button
        className={isSecondary ? styles.btn_secondary : styles.btn_primary}
      >
        {icon}
        {text}
      </button>
    </div>
  );
};

export default Button;
