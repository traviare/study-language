import TableBtnEdit from "../TableBtnEdit/TableBtnEdit";
import TableBtnTrash from "../TableBtnTrash/TableBtnTrash";
import TableBtnSave from "../TableBtnSave/TableBtnSave";
import React from "react";
import styles from "./TableRow.module.scss";

function TableRow({ english, transcription, russian, tags, boolean }) {
  return (
    <tr className={styles.row}>
      <td></td>
      <td>
        {boolean ? (
          <input type="text" value={english} className={styles.rowEdit}></input>
        ) : (
          english
        )}
      </td>
      <td>
        {boolean ? (
          <input
            type="text"
            value={transcription}
            className={styles.rowEdit}
          ></input>
        ) : (
          transcription
        )}
      </td>
      <td>
        {boolean ? (
          <input type="text" value={russian} className={styles.rowEdit}></input>
        ) : (
          russian
        )}
      </td>
      <td>
        {boolean ? (
          <input type="text" value={tags} className={styles.rowEdit}></input>
        ) : (
          tags
        )}
      </td>
      <td className={styles.rowBtn}>
        {boolean ? (
          <TableBtnSave></TableBtnSave>
        ) : (
          <React.Fragment>
            <TableBtnEdit></TableBtnEdit>
            <TableBtnTrash></TableBtnTrash>
          </React.Fragment>
        )}
      </td>
    </tr>
  );
}

export default TableRow;
