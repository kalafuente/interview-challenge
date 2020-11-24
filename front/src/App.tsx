import React from 'react';
import logo from './logo.png';
import './App.css';
import GetExam from './modules/redux-example/get-exam/containers/GetExam';

const App: React.FunctionComponent<any> = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <GetExam id='pruebaID' />
      </header>
    </div>
  );
}

export default App;
