import WordsTable from "../WordsTable/WordsTable";
import styles from "./Main.module.scss";
import { words } from "../Words";

function Main() {
  return <WordsTable arr={words}></WordsTable>;
}

export default Main;
