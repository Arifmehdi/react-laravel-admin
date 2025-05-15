import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { API_BASE_URL } from '../Layouts/Configs/Configs';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            // Make login request to your Laravel endpoint
            const response = await fetch(`${API_BASE_URL}/api/admin/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                credentials: 'include', // Required for cookies/Sanctum
                body: JSON.stringify({
                    email: email.trim(),
                    password: password.trim(),
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                // Handle validation errors from Laravel
                if (data.errors) {
                    const firstError = Object.values(data.errors)[0][0];
                    throw new Error(firstError);
                }
                throw new Error(data.message || 'Login failed');
            }

            // Store the token and admin data in localStorage
            localStorage.setItem('token', data.token);
            localStorage.setItem('admin', JSON.stringify(data.admin));

            // Redirect to dashboard
            navigate('/dashboard');
        } catch (err) {
            console.error('Login error:', err);
            setError(err.message || 'Login failed. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="ftco-section">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6 text-center mb-5">
                        <h2 className="heading-section">Best Dream Car</h2>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-7 col-lg-5">
                        <div className="login-wrap p-4 p-md-5">
                            <div className="icon d-flex align-items-center justify-content-center">
                                <span className="fa fa-user-o"></span>
                            </div>
                            <h3 className="text-center mb-4">Admin Sign In</h3>
                            <form onSubmit={handleSubmit} className="login-form">
                                {error && (
                                    <div className="alert alert-danger">
                                        {error}
                                    </div>
                                )}
                                <div className="form-group">
                                    <input
                                        type="email"
                                        className="form-control rounded-left"
                                        placeholder="Email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        disabled={loading}
                                    />
                                </div>
                                <div className="form-group d-flex">
                                    <input
                                        type="password"
                                        className="form-control rounded-left"
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                        disabled={loading}
                                    />
                                </div>
                                <div className="form-group">
                                    <button
                                        type="submit"
                                        className="form-control btn btn-primary rounded submit px-3"
                                        disabled={loading}
                                    >
                                        {loading ? (
                                            <span>Logging in... <i className="fa fa-spinner fa-spin"></i></span>
                                        ) : (
                                            'Login'
                                        )}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Login;



// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// function Login() {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState('');
//     const [loading, setLoading] = useState(false);
//     const navigate = useNavigate();

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setError('');
//         setLoading(true);

//         try {
//             // Step 1: Get CSRF cookie from Sanctum
//             const csrfResponse = await fetch('http://localhost:8000/sanctum/csrf-cookie', {
//                 credentials: 'include',
//             });

//             if (!csrfResponse.ok) {
//                 throw new Error('Failed to get CSRF token');
//             }

//             // Step 2: Attempt login
//             const loginResponse = await fetch('http://localhost:8000/api/admin/login', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                     'Accept': 'application/json',
//                 },
//                 credentials: 'include',
//                 body: JSON.stringify({
//                     email: email.trim(),
//                     password: password.trim(),
//                 }),
//             });

//             if (!loginResponse.ok) {
//                 const errorData = await loginResponse.json();
//                 throw new Error(errorData.message || 'Login failed');
//             }

//             // Step 3: Get authenticated user data
//             const userResponse = await fetch('http://localhost:8000/api/admin/user', {
//                 credentials: 'include',
//             });

//             if (!userResponse.ok) {
//                 throw new Error('Failed to fetch user data');
//             }

//             const userData = await userResponse.json();

//             // Store user data in localStorage
//             localStorage.setItem('auth', JSON.stringify(userData));

//             // Redirect to dashboard
//             navigate('/dashboard');
//         } catch (err) {
//             console.error('Login error:', err);
//             setError(err.message || 'Login failed. Please check your credentials and try again.');
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <section className="ftco-section">
//             <div className="container">
//                 <div className="row justify-content-center">
//                     <div className="col-md-6 text-center mb-5">
//                         <h2 className="heading-section">Best Dream Car</h2>
//                     </div>
//                 </div>
//                 <div className="row justify-content-center">
//                     <div className="col-md-7 col-lg-5">
//                         <div className="login-wrap p-4 p-md-5">
//                             <div className="icon d-flex align-items-center justify-content-center">
//                                 <span className="fa fa-user-o"></span>
//                             </div>
//                             <h3 className="text-center mb-4">Sign In</h3>
//                             <form onSubmit={handleSubmit} className="login-form">
//                                 {error && (
//                                     <div className="alert alert-danger">
//                                         {error}
//                                         <br />
//                                         {error.includes('CSRF') && (
//                                             <small>Please ensure cookies are enabled and try again.</small>
//                                         )}
//                                     </div>
//                                 )}
//                                 <div className="form-group">
//                                     <input
//                                         type="text"
//                                         className="form-control rounded-left"
//                                         placeholder="email"
//                                         value={email}
//                                         onChange={(e) => setEmail(e.target.value)}
//                                         required
//                                         disabled={loading}
//                                     />
//                                 </div>
//                                 <div className="form-group d-flex">
//                                     <input
//                                         type="password"
//                                         className="form-control rounded-left"
//                                         placeholder="Password"
//                                         value={password}
//                                         onChange={(e) => setPassword(e.target.value)}
//                                         required
//                                         disabled={loading}
//                                     />
//                                 </div>
//                                 <div className="form-group">
//                                     <button
//                                         type="submit"
//                                         className="form-control btn btn-primary rounded submit px-3"
//                                         disabled={loading}
//                                     >
//                                         {loading ? (
//                                             <span>Logging in... <i className="fa fa-spinner fa-spin"></i></span>
//                                         ) : (
//                                             'Login'
//                                         )}
//                                     </button>
//                                 </div>
//                                 <div className="form-group d-md-flex">
//                                     <div className="w-50">
//                                         <label className="checkbox-wrap checkbox-primary">
//                                             Remember Me
//                                             <input type="checkbox" disabled={loading} />
//                                             <span className="checkmark"></span>
//                                         </label>
//                                     </div>
//                                     <div className="w-50 text-md-right">
//                                         <a href="#">Forgot Password</a>
//                                     </div>
//                                 </div>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }

// export default Login;
