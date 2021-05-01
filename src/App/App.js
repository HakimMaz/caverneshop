import React,{Component} from 'react';
import './App.css';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import Header from './layout/Header/Header';
class App extends Component {
  render() {
    const store=configureStore();

    return (
      <Provider store={store}>
       <Header/>
  
      </Provider>
    );
  }
}


export default App;


