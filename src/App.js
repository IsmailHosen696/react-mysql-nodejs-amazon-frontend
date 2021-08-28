import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './components/css/tailwind.css';
import PrivateRoute from './private/PrivateRoute';
import dotenv from 'dotenv';
dotenv.config();
const Admin = lazy(() => import('./components/pages/Admin'))
const Cart = lazy(() => import('./components/pages/Cart'))
const Order = lazy(() => import('./components/pages/Order'))
const Home = lazy(() => import('./components/pages/Home'))
const Signup = lazy(() => import('./components/pages/Signup'))
const Signin = lazy(() => import('./components/pages/Signin'))
function App() {
  return (
    <Router>
      <Switch>
        <Suspense fallback={<p>loading....</p>}>
          <Route exact path='/signin' component={Signin} />
          <Route exact path='/signup' component={Signup} />
          <PrivateRoute exact path='/admin' component={Admin} />
          <PrivateRoute exact path='/admin/orders' component={Order} />
          <Route exact path='/cart' component={Cart} />
          <Route exact path='/' component={Home} />
        </Suspense>
      </Switch>
    </Router>
  );
}

export default App;
