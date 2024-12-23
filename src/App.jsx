import { useState } from 'react';
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
 

  return (
    <>
    <Header/>
       <Home/>
     {/* {getCorrectScreen(activeTab)}
     <Tab activeTab ={activeTab} setActiveTab = {setActiveTab}/> */}
     
     <Footer/>
    </>
  )
}

export default App;
