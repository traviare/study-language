import styles from "./TableBtnEdit.module.scss";

function TableBtnEdit() {
  return (
    <button className={styles.button}>
      <img
        className={styles.button_img}
        src="/src/assets/images/pencil.svg"
        alt="edit"
      />
    </button>
  );
}

export default TableBtnEdit;
