import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter } from 'react-router-dom';
import store, { persistor } from './store';

import Routes from './routes';
import Header from './components/Header';
import GlobalStyles from './styles/GlobalStyles';

import Footer from './components/Footer';

function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <BrowserRouter>
            <Header />
            <Routes />
            <Footer />
            <GlobalStyles />
            <ToastContainer autoClose={1700} className="toas-container" />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
