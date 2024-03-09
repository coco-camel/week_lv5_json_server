import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "../pages/Home";
import Signup from '../pages/SignUp';
import TodoMain from '../pages/TodoMain';
import TodoDetaliPage from '../pages/TodoDetaliPage';

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/todomain" element={<TodoMain />} />
                <Route path="/todo/:id" element={<TodoDetaliPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;