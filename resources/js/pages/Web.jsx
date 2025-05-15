import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Auth/Login';
import Dashboard from './Dashboard';
import ProtectedRoute from './ProtectedRoute';
import Layout from './Layouts/Layout';
import Blank from './Blank';
import Inventory from './Inventory';
import Blog from './Blog';
import AutoNews from './Layouts/Blogs/AutoNews';
import Reviews from './Layouts/Blogs/Reviews';
import ToolsAndAdvice from './Layouts/Blogs/ToolsAndAdvice';
import CarBuyingAdvice from './Layouts/Blogs/CarBuyingAdvice,';
import CarTips from './Layouts/Blogs/CarTips';
import News from './Layouts/Blogs/News';
import Opinion from './Layouts/Blogs/Opinion';
import Financial from './Layouts/Blogs/Financial';
import Innovation from './Layouts/Blogs/Innovation';

function Router() {
    return (
        <BrowserRouter basename='/'>
            <Routes>
                {/* Public route */}
                {/* <Route path="/" element={<Login />} /> */}

                {/* Public route with reverse protection */}
                <Route element={<ProtectedRoute reverse />}>
                    <Route path="/" element={<Login />} />
                </Route>


                {/* Protected routes with layout */}
                <Route element={<ProtectedRoute />}>
                    <Route element={<Layout />}>
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/blank" element={<Blank/>} />
                        <Route path="/inventory" element={<Inventory/>} />
                        <Route path="/blogs" element={<Blog/>} />
                        <Route path="/blogs/auto-news" element={<AutoNews/>} />
                        <Route path="/blogs/reviews" element={<Reviews/>} />
                        <Route path="/blogs/tools-and-advice" element={<ToolsAndAdvice/>} />
                        <Route path="/blogs/car-buying-advice" element={<CarBuyingAdvice/>} />
                        <Route path="/blogs/car-tips" element={<CarTips/>} />
                        <Route path="/blogs/news" element={<News/>} />
                        <Route path="/blogs/Innovation" element={<Innovation/>} />
                        <Route path="/blogs/opinion" element={<Opinion/>} />
                        <Route path="/blogs/financial" element={<Financial/>} />

                        {/* Add more protected routes here as needed */}
                    </Route>
                </Route>

                {/* Catch-all redirect */}
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </BrowserRouter>
    );
}

ReactDOM.createRoot(document.getElementById('app')).render(<Router />);

// import react from 'react';
// import ReactDom from 'react-dom/client';
// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// import Login from './Auth/Login';
// import Dashboard from './Dashboard';
// import Header from './Layouts/Header';
// import SideBar from './Layouts/Sidebar';

// function Router(){
//     return (
//         <BrowserRouter basename='admin/public'>
//             <Routes>
//                 <Route path='/' element={<Login/>} />
//                 <Route path="/dashboard" element={<Dashboard/>} />
//             </Routes>
//         </BrowserRouter>
//     );
// }
// ReactDom.createRoot(document.getElementById('app')).render(<Router />);

