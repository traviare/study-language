import style from "./Card.module.scss";

function Card(props) {
  const { english, transcription } = this.props;
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
