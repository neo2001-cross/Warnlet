import './App.css';
import Sidebar from './component/Sidebar.js';
import Dashboard from './component/Dashboard.js'
import {BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
  <BrowserRouter>
    <div className="App">
      <Sidebar />
      <Routes>
        <Route exact path='/' element={<Dashboard/>}/>
        <Route path='/moneytransaction' component={Dashboard}/>
        <Route path='/history' component={Dashboard}/>
        <Route path='/transaction' component={Dashboard} />
      </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App;
