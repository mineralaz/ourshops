import Footer from '../components/footer/Footer';
import AllShops from '../components/shops/AllShops';
import PageTitle from '../components/UI/PageTitle';
import css from './ShopsPage.module.css';

function ShopsPage(props) {
  return (
    <div className={css.lightBg}>
      <div className="container vh90">
        <PageTitle dark>Our sponsored shops</PageTitle>
        <AllShops />
      </div>
      <Footer dark />
    </div>
  );
}
export default ShopsPage;
