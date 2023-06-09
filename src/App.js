import React from "react";
import "./App.css";
import {Routes , Route} from 'react-router-dom'
import Editor from "./Componantes/Editor";
import Login from './Componantes/Login'
import Home from './Componantes/Home'
import Nav from "./Componantes/NavBar/NavBar";
import NavBar2 from "./Componantes/NavBar2/NavBar2";
import { app , database} from './Componantes/firebaseConfig';
export default function App() {
  return (
    // <>
    //   <Nav />
    //   <NavBar2 />
    // </>
    <div className= "app">
    {/* <h1>  Google Doc clone </h1> */}
    <Nav />
    <Routes>
    
      <Route path='/' element= {<Login />} />
      <Route path='/home' element= {<Home database={database} />} />
      <Route path='/editor/:id' element= {<Editor database={database} />} />
    


      </Routes>
    </div>
  );
};
