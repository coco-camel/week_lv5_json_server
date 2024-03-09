import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "../pages/Home";
import Signup from '../pages/SignUp';
import TodoMain from '../pages/TodoMain';
import TodoDetailPage from '../pages/TodoDetailPage';
import TodoEditPage from '../pages/TodoEditPage';


function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/todomain" element={<TodoMain />} />
                <Route path="/todo/:id" element={<TodoDetailPage />} />
                <Route path="/todo/:id/edit" element={<TodoEditPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;