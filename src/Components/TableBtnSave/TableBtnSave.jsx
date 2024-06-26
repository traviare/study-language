import styles from "./TableBtnSave.module.scss";

function TableBtnSave() {
  return (
    <button className={styles.button}>
      <img
        className={styles.button_img}
        src="/src/assets/images/check.svg"
        alt="save"
      />
      <p>Сохранить</p>
    </button>
  );
}

export default TableBtnSave;
