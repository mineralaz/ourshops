import Footer from '../components/footer/Footer';
import HomePageCards from '../components/homePageCards/HomePageCards';
import Card from '../components/UI/Card';
import PageTitle from '../components/UI/PageTitle';
import css from './HomePage.module.css';

function HomePage(props) {
  return (
    <div className={css.homePage}>
      <div className="container vh90">
        <PageTitle>Welcome to our sponsored shops</PageTitle>
        <HomePageCards />
      </div>
      <Footer />
    </div>
  );
}
export default HomePage;
