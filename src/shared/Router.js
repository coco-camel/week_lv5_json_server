import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "../pages/Home";
import MyPage from '../pages/MyPage';
import Signup from '../pages/SignUp';
import TodoMain from '../pages/TodoMain';
import TodoDetali from '../pages/TodoDetali';

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/mypage" element={<MyPage />} />
                <Route path="/Todomain" element={<TodoMain />} />
                <Route path="/todo/:id" element={<TodoDetali />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;