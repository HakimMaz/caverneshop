import React,{Component} from 'react';
import './App.css';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { render } from '@testing-library/react';

class App extends Component {
  render() {
    const store=configureStore();

    return (
      <Provider store={store}>
      <div className="App">
        <p> hello everyone</p>
        
      </div>
  
      </Provider>
    );
  }
}


export default App;


