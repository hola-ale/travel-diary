import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import data from "./data";
import Card from './Components/Card/Card';

export default function App() {
  const items = data.map(item => {
    return ( <Card key={item.id} {...item} /> )
  })
  return (
    <div className="App">
      <Navbar />
      <div className="cards">
        { items }
      </div>
    </div>
  );
}
