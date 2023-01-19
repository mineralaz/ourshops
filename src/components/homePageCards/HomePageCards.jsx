import Card from '../UI/Card';
import css from './HomePageCards.module.css';
function HomePageCards(props) {
  return (
    <div className={css.cards_section}>
      <h2 className={css.objective}>Sponsorhip.</h2>
      <h2 className={css.objective}>Consulting.</h2>
      <h2 className={css.objective}>Results.</h2>
      <div className={css.cards}>
        <Card
          iconName="user-o"
          cardName="about us"
          cardDesc="You will find everything about us later"
        />
        <Card
          iconName="building-o"
          cardName="company"
          cardDesc="Startup company"
        />
        <Card
          iconName="rocket"
          cardName="our mission"
          cardDesc="Our only mission is to help you"
        />
        <Card
          iconName="trophy"
          cardName="awards"
          cardDesc="100 awards for the best help"
        />
      </div>
    </div>
  );
}
export default HomePageCards;
