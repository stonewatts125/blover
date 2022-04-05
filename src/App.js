import React, { useState, useEffect, useLayoutEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, HashRouter } from "react-router-dom";
import Home from './components/HOME/HOME.js';
import Login from './components/LOGIN/login.js';
import { StockContext } from './components/HOME/stockcontext'
import usePrevious from './hooks/usePrevious';
import Search from './components/SEARCH/search';
import Stock from './components/STOCK/stock';
import SignUp from './components/SIGNUP/signup';
import Account from './components/ACCOUNT/account';

function App() {

  var initial = 5 + ((new Date()).getDay()).toString() + 125
  const [stock, setStock] = useState(initial)
  const oldstock = usePrevious(stock)
  var amount = Math.ceil(Math.random() * 500)
  const [percent, setPercent] = useState(1)
  useLayoutEffect(() => {
    function Stock() {
      setStock(51205 + amount)
    }
    setTimeout(Stock, 60000)
    setPercent(Math.round((((stock - oldstock) * 100) / oldstock) * 100) / 100)

    return clearTimeout(Stock, 60000)

  }, [stock])

  const [menu, setMenu] = useState(false)
  

  return (
    <div className="Blover">
      <StockContext.Provider value={{ contextmenu: [menu, setMenu], contextstock: [stock, setStock], contextoldstock: oldstock, contextpercent: [percent, setPercent] }}>
        <HashRouter>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/login" element={<Login />}></Route>
            <Route exact path="/search" element={<Search />}></Route>
            <Route exact path="/stock" element={<Stock />}></Route>
            <Route exact path="/signup" element={<SignUp />}></Route>
            <Route exact path="/account" element={<Account />}></Route>
          </Routes>
        </HashRouter>
      </StockContext.Provider>
    </div>
  );
}

export default App;
