import './App.css';
import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Header'
import ToysList from './components/ToysList';
import NewToy from './components/NewToy';
import NoPageFound from './components/NoPageFound'
import Home from './components/Home'
import ToyDetail from './components/ToyDetail'

function App() {
  const [toys, setToys] = useState([]);

    useEffect (() => {
        fetch('http://localhost:3001/toys')
        .then(res => res.json())
        .then (json => {
            setToys(json)
        })
    }, [])



  return (
    <Router>
      <React.Fragment>
      <Header />
        <Routes>
          <Route exact path="/" element = {<Home />} />
          <Route exact path="/toys" element = {<ToysList toys = {toys}/>} />
          <Route path="/form" element = {<NewToy/>} />
          <Route path="/toys/:id" element = {<ToyDetail />} />
          <Route path="/*" element={<NoPageFound /> } />
        </Routes>
      </React.Fragment>
    </Router>
  );
}

export default App;
