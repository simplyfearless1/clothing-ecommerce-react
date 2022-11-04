import { Routes, Route } from 'react-router-dom';

import Home from './routes/home/home.route';
import Shop from './routes/shop/shop.route';

import { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from './utils/firebase/firebase.utils';

import Navigation from './routes/navigation/navigation.route';
import Authentification from './routes/authentification/authentification.route';
import Checkout from './routes/checkout/checkout.route';
import { setCurrentUser } from "./store/user/user.action";

const App = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });

    return unsubscribe;
  }, [dispatch]);

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />} /> 
          <Route path="/shop/*" element={ <Shop />} />
          <Route path="/authentification" element={ <Authentification />} />
          <Route path="/checkout" element={ <Checkout /> } />
        </Route>
      </Routes>
    </div>
  )
}

export default App;
