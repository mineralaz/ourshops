import RegisterAuthForm from '../components/authentification/RegisterAuthForm';
import css from './RegisterPage.module.css';

function RegisterPage(props) {
  return (
    <div className={css.registerPage}>
      <RegisterAuthForm />
    </div>
  );
}
export default RegisterPage;
