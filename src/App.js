import './App.css';
import { useState } from 'react';
import MintMenu from './components/MintMenu';
import NavBar from './components/NavBar';

function App() {
  const [accounts, setAccounts] = useState([]);

  return (
    <div className="App">
      <div></div>
      <mark className="title">Projet de NFT en Test Projet de NFT en Test Projet de NFT en Test</mark>
      <div className="clean-center">
        <div></div>
        <MintMenu accounts={accounts} setAccounts={setAccounts}/>
        <NavBar accounts={accounts} setAccounts={setAccounts}/>
      </div>
      <mark className="title">Authorized Personnel only Authorized Personnel only</mark>
    </div>
  );
}

export default App;
