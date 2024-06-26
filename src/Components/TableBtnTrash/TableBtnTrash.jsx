import styles from "./TableBtnTrash.module.scss";

function TableBtnTrash() {
  return (
    <button className={styles.button}>
      <img
        className={styles.button_img}
        src="/src/assets/images/trash.svg"
        alt="trash"
      />
    </button>
  );
}

export default TableBtnTrash;
