import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({ reverse = false }) => {
    const token = localStorage.getItem('token');
                  localStorage.setItem('username', localStorage.getItem('name'));

    if (reverse) {
        // For login page - redirect to dashboard if already logged in
        if (token) {
            console.log('Redirecting to dashboard...');
            return <Navigate to="/dashboard" replace />;
        }
        return <Outlet />;
    }

    // For protected routes
    if (!token) {
        console.log('Redirecting to login...');
        return <Navigate to="/" replace />;
    }

    return <Outlet />;
};

export default ProtectedRoute;


// import { Navigate } from 'react-router-dom';

// const ProtectedRoute = ({ children }) => {
//     const token = localStorage.getItem('token');

//     if (!token) {
//         // Redirect to the root path where Login is located
//         return <Navigate to="/" replace />;
//     }

//     return children;
// };

// export default ProtectedRoute;
