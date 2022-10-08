import { Routes, Route } from 'react-router-dom';

import Home from './routes/home/home';
import Shop from './routes/shop/shop';

import Navigation from './routes/navigation/navigation';
import Authentification from './routes/authentification/authentification';
import Checkout from './routes/checkout/checkout';

const App = () => {
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
