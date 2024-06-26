import styles from "./WordsTable.module.scss";
import TableRow from "../TableRow/TableRow";
import TableBtnSave from "../TableBtnSave/TableBtnSave";

function WordsTable({ arr }) {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>#</th>
          <th>Слово</th>
          <th>Транскрипция</th>
          <th>Перевод</th>
          <th>Категория</th>
          <th></th>
        </tr>
        <tr>
          <td></td>
          <td>
            <input type="text" />
          </td>
          <td>
            <input type="text" />
          </td>
          <td>
            <input type="text" />
          </td>
          <td>
            <input type="text" />
          </td>
          <td>
            <TableBtnSave></TableBtnSave>
          </td>
        </tr>
      </thead>
      <tbody>
        {arr.map((item) => (
          <TableRow
            key={item.id}
            english={item.english}
            transcription={item.transcription}
            russian={item.russian}
            tags={item.tags}
            boolean={item.boolean}
          ></TableRow>
        ))}
      </tbody>
    </table>
  );
}

export default WordsTable;
