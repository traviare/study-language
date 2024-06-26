import styles from "./Card.module.scss";

function Card({ english, transcription }) {
  return (
    <React.Fragment>
      <div>
        <p>{english}</p>
        <p>{transcription}</p>
        <button>Перевод</button>
      </div>
    </React.Fragment>
  );
}

export default Card;
