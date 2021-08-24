import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './components/css/tailwind.css';
import { UserProvider } from './context/usercontext';
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
          <Route exact path='/admin' component={Admin} />
          <UserProvider>
            <Route exact path='/admin/orders' component={Order} />
            <Route exact path='/cart' component={Cart} />
            <Route exact path='/' component={Home} />
          </UserProvider>
        </Suspense>
      </Switch>
    </Router>
  );
}

export default App;
