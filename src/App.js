import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './components/css/tailwind.css';
import PrivateRoute from './private/PrivateRoute';
import dotenv from 'dotenv';
import UploadProvider from './context/uploadcontext';
dotenv.config();
const Admin = lazy(() => import('./components/pages/Admin'))
const Cart = lazy(() => import('./components/pages/Cart'))
const Order = lazy(() => import('./components/pages/Order'))
const AdminOrder = lazy(() => import('./components/pages/AdminOrder'))
const Home = lazy(() => import('./components/pages/Home'))
const Signup = lazy(() => import('./components/pages/Signup'))
const Allprodutcs = lazy(() => import('./components/pages/Allprodutcs'))
const Signin = lazy(() => import('./components/pages/Signin'))
const Additem = lazy(() => import('./components/pages/Additem'))
function App() {
  return (
    <Router>
      <Switch>
        <Suspense fallback={<p>loading....</p>}>
          <UploadProvider>
            <Route exact path='/signin' component={Signin} />
            <Route exact path='/signup' component={Signup} />
            <PrivateRoute exact path='/admin' component={Admin} />
            <PrivateRoute exact path='/admin/orders' component={AdminOrder} />
            <PrivateRoute exact path='/add/items' component={Additem} />
            <Route exact path='/cart' component={Cart} />
            <Route exact path='/orders' component={Order} />
            <Route exact path='/allproducts' component={Allprodutcs} />
            <Route exact path='/' component={Home} />
          </UploadProvider>
        </Suspense>
      </Switch>
    </Router>
  );
}

export default App;
