import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Auth/Login';
import Dashboard from './Dashboard';
import ProtectedRoute from './ProtectedRoute';
import Layout from './Layouts/Layout';
import Blank from './Blank';
import Inventory from './Inventory';

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

