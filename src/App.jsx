import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ShopsPage from './pages/ShopsPage';
import AddShopPage from './pages/AddShopPage';
import './App.css';
import Header from './components/header/Header';
import ProtectedRoute from './components/ProtectedRoute';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <ProtectedRoute path="ourshops/add-shop">
          <AddShopPage />
        </ProtectedRoute>
        <ProtectedRoute path="ourshops/shops">
          <ShopsPage />
        </ProtectedRoute>
        <Route path="ourshops/register">
          <RegisterPage />
        </Route>
        <Route path="ourshops/login">
          <LoginPage />
        </Route>
        <Route path="ourshops/" exact>
          <HomePage />
        </Route>
      </Switch>
      <Toaster
        containerStyle={{
          top: 25,
          left: 20,
          bottom: 20,
          right: 20,
        }}
      />
    </div>
  );
}

export default App;
