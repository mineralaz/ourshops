import LoginAuthForm from '../components/authentification/LoginAuthForm';
import css from './LoginPage.module.css';

function LoginPage(props) {
  return (
    <div className={`${css.loginPage}`}>
      <LoginAuthForm />
    </div>
  );
}
export default LoginPage;
