import react from 'react';
import Header from './Header';
import SideBar from './Sidebar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import { UserProvider } from '../Context/ContextApi';


const Layout = () => {
    return (
        <div className="hold-transition sidebar-mini layout-fixed">
            <div className="wrapper">
                    <Header />
                <UserProvider>
                    <SideBar />
                </UserProvider>
                    <Outlet />  {/* This will render the matched child route */}
                    <Footer />

            </div>
        </div>
    );
}

export default Layout;



// const Layout = ({ children }) => {
//     return (
//         <div className="hold-transition sidebar-mini layout-fixed">
//             <div className="wrapper">
//                 <Header />
//                 <SideBar />
//                 {children}
//                 <Footer />
//             </div>
//         </div>
//     );
// }

// export default Layout;
