import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./Pages/Home";
import Contact from './Pages/Contact';
import About from './Pages/About';

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route index element={<Home/>}/>
            <Route path='/home' element={<Home/>}></Route>

            <Route path='/contact' element={<Contact/>}></Route>
            <Route path='/about' element={<About/>}></Route>

        </Routes>
    </BrowserRouter>
,document.getElementById("root"))
