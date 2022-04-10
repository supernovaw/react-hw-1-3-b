import React from 'react';
import './App.css';
import etsy from './etsy-json';
import Listing from './Listing';

export default function App() {
  return <div className="App"><Listing items={etsy} /></div>;
};
