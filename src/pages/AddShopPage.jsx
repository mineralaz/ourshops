import Footer from '../components/footer/Footer';
import AddShopForm from '../components/shops/AddShopForm';
import PageTitle from '../components/UI/PageTitle';
import css from './AddShopPage.module.css';

function AddShopPage(props) {
  return (
    <div className={css.addShopPage}>
      <div className="container vh90">
        <PageTitle>Add your shop to our list</PageTitle>
        <AddShopForm />
      </div>
      <Footer />
    </div>
  );
}
export default AddShopPage;
