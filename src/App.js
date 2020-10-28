import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

import StudentForm from './components/StudentForm';
import ErrorBoundary from './components/ErrorBoundary';
import Modal from './components/Modal';

class App extends Component {


handleClick = () => {
  console.log('I was clicked!');
}

  render() {

    return (
      <div className="App" onClick={this.handleClick}>

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        
        <ErrorBoundary>
          <StudentForm />

          <Modal>
            <div className="modal">
              This is the Modal Window!
              <button className="modal-button">Close X</button>
            </div>
          </Modal>
        </ErrorBoundary>

      </div>
    );
  }
}

export default App;
