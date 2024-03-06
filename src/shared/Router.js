import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "../pages/Home";
import Mypage from '../pages/MyPage';
import Signup from '../pages/SignUp';

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/mypage" element={<Mypage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;