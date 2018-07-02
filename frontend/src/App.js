import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { Container } from 'reactstrap';
import AppNavbar from './components/AppNavbar'
import Shoppinglist from './components/Shoppinglist';
import ItemModal from './components/ItemModal';
import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
  render() {
    return (

      <Provider store={store}>
        <div className="App">
          <AppNavbar />
          <Container>
            <ItemModal />
            <Shoppinglist />
          </Container>
        </div>
      </Provider>
    );
  }
}

export default App;
