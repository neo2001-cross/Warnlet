import './App.css';
import Sidebar from './component/Sidebar.js';
import Dashboard from './component/Dashboard.js'
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import MoneySource from './component/MoneySource';
import History from './component/History';
import Transaction from './component/Transaction';

function App() {

  const money = 200000
  
  return (
  <BrowserRouter>
    <div className="App">
      <Sidebar />
      <Routes>
        <Route exact path='/' element={<Dashboard money={money}/>}/>
        <Route path='/moneysource' element={<MoneySource />}/>
        <Route path='/history' element={<History />}/>
        <Route path='/transaction' element={<Transaction />} />
      </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App;
