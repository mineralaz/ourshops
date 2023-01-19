import Icon from './Icon';
import css from './Card.module.css';

function Card(props) {
  return (
    <article className={css.card}>
      <Icon iconName={props.iconName} big grey />
      <h3 className={css.cardName}>{props.cardName}</h3>
      <p className={css.cardDesc}>{props.cardDesc}</p>
    </article>
  );
}
export default Card;
