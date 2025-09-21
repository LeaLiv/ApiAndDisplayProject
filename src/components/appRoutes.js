import React from 'react'
import { AppContext } from '../context/context';
import { useState } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import About from './about';
import Home from './home';
import Counter from './counter';
import Counter2 from './counter2';
import Pixa from './pixa';
import AppAtlas from '../compAtlas/appAtlas';
import AppPixa from '../compPixa/pixaApp';
import AppVip from '../compVip/vipApp';

const AppRoutes = () => {
    const [number, setNumber] = useState(33);
    const [coins, setCoins] = useState(6);
    const [counter, setCounter] = useState(0);
    return (
        <BrowserRouter>
            <AppContext.Provider value={
                {
                    val: "koko6",
                    number, setNumber,
                    coins, setCoins,
                    counter, setCounter
                }
            }>
                <header className="p-2 container bg-info">
                    <Link to="/">Home</Link> | 
                    <Link to="/about">About</Link> | 
                    <Link to="/counter">Counter</Link> | 
                    <Link to="/counter2">Counter2</Link> | 
                    <Link to="/atlas">Atlas</Link> |
                    <Link to="/pixa/cats">Pixa</Link> |
                    <Link to="/vip">Vip</Link>
                </header>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/counter" element={<Counter />} />
                    <Route path="/counter2" element={<Counter2 />} />
                    <Route path="/atlas" element={<AppAtlas />} />
                    <Route path="/pixa/cats" element={<AppPixa />} />
                    <Route path="/vip" element={<AppVip />} />
                </Routes>
            </AppContext.Provider>
            <footer className="p-2 container bg-danger"></footer>
        </BrowserRouter>
    )
}

export default AppRoutes