import './App.css';
import { useState } from 'react';
import MintMenu from './components/MintMenu';
import NavBar from './components/NavBar';

function App() {
  const [accounts, setAccounts] = useState([]);

  return (
    <div className="App">
      <NavBar accounts={accounts} setAccounts={setAccounts}/>
      <div className="clean-center">
        <div></div>
        <MintMenu accounts={accounts} setAccounts={setAccounts}/>
        <div></div>
      </div>
    </div>
  );
}

export default App;
