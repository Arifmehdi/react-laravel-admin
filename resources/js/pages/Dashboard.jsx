import { useEffect, useState } from "react";
import { API_BASE_URL } from './Layouts/Configs/Configs';

function Dashboard() {
    const [dashboardData, setDashboardData] = useState({
        inventory: 0,
        dealer: 0,
        leads: 0,
        invoice: 0
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchDashboardData = async () => {
            try {
                const token = localStorage.getItem('token'); // Retrieve token
                const response = await fetch(`${API_BASE_URL}/api/dashboard`, {
                    headers: {
                    'Authorization': `Bearer ${token}`, // Attach token
                    'Content-Type': 'application/json',
                    },
                });
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setDashboardData(data);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };

        fetchDashboardData();
    }, []);

    // if (loading) {
    //     return <div className="content-wrapper">Loading...</div>;
    // }

    // if (error) {
    //     return <div className="content-wrapper">Error: {error}</div>;
    // }


    return (
        <div className="content-wrapper">
            <div className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1 className="m-0">Dashboard</h1>
                        </div>
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item"><a href="#">Home</a></li>
                                <li className="breadcrumb-item active">Dashboard</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
            <section className="content">
                <div className="container-fluid">
                    {/* Your dashboard content start here */}

                    <div className="row">
                        <div className="col-lg-3 col-6">
                            <div className="small-box bg-info">
                                <div className="inner">
                                    <h3>{dashboardData.inventory.toLocaleString()}</h3>
                                    <p>Inventories</p>
                                </div>
                                <div className="icon">
                                    <i className="ion ion-bag"></i>
                                </div>
                                <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right"></i></a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-6">
                            <div className="small-box bg-success">
                                <div className="inner">
                                    <h3>{dashboardData.leads.toLocaleString()}</h3>
                                    <p>Leads</p>
                                </div>
                                <div className="icon">
                                    <i className="ion ion-stats-bars"></i>
                                </div>
                                <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right"></i></a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-6">
                            <div className="small-box bg-warning">
                                <div className="inner">
                                    <h3>{dashboardData.dealer.toLocaleString()}</h3>
                                    <p>Dealer Registrations</p>
                                </div>
                                <div className="icon">
                                    <i className="ion ion-person-add"></i>
                                </div>
                                <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right"></i></a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-6">
                            <div className="small-box bg-danger">
                                <div className="inner">
                                    <h3>{dashboardData.invoice.toLocaleString()}</h3>
                                    <p>Invoices</p>
                                </div>
                                <div className="icon">
                                    <i className="ion ion-pie-graph"></i>
                                </div>
                                <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Your dashboard content end here */}
            </section>
        </div>
    );
}

export default Dashboard;



// import Layout from './Layouts/Layout';

// function Dashboard() {
//     return (
//         <Layout>
//             <main>
//                 <div className="content-wrapper">
//                     <div className="content-header">
//                         <div className="container-fluid">
//                             <div className="row mb-2">
//                                 <div className="col-sm-6">
//                                     <h1 className="m-0">Dashboard</h1>
//                                 </div>
//                                 <div className="col-sm-6">
//                                     <ol className="breadcrumb float-sm-right">
//                                         <li className="breadcrumb-item"><a href="#">Home</a></li>
//                                         <li className="breadcrumb-item active">Dashboard</li>
//                                     </ol>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <section className="content">
//                         <div className="container-fluid">
//                             <div className="row">
//                                 <div className="col-lg-3 col-6">
//                                     <div className="small-box bg-info">
//                                         <div className="inner">
//                                             <h3>150</h3>
//                                             <p>New Orders</p>
//                                         </div>
//                                         <div className="icon">
//                                             <i className="ion ion-bag"></i>
//                                         </div>
//                                         <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right"></i></a>
//                                     </div>
//                                 </div>
//                                 <div className="col-lg-3 col-6">
//                                     <div className="small-box bg-success">
//                                         <div className="inner">
//                                             <h3>53<sup style={{ fontSize: "20px"}}>%</sup></h3>
//                                             <p>Bounce Rate</p>
//                                         </div>
//                                         <div className="icon">
//                                             <i className="ion ion-stats-bars"></i>
//                                         </div>
//                                         <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right"></i></a>
//                                     </div>
//                                 </div>
//                                 <div className="col-lg-3 col-6">
//                                     <div className="small-box bg-warning">
//                                         <div className="inner">
//                                             <h3>44</h3>
//                                             <p>User Registrations</p>
//                                         </div>
//                                         <div className="icon">
//                                             <i className="ion ion-person-add"></i>
//                                         </div>
//                                         <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right"></i></a>
//                                     </div>
//                                 </div>
//                                 <div className="col-lg-3 col-6">
//                                     <div className="small-box bg-danger">
//                                         <div className="inner">
//                                             <h3>65</h3>
//                                             <p>Unique Visitors</p>
//                                         </div>
//                                         <div className="icon">
//                                             <i className="ion ion-pie-graph"></i>
//                                         </div>
//                                         <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right"></i></a>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </section>
//                 </div>
//             </main>
//         </Layout>

//     );
// }

// export default Dashboard;
