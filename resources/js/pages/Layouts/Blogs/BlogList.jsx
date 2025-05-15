// BlogList.jsx
import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { API_BASE_URL } from '../Configs/Configs';

const BlogList = ({ categoryId, cusTitle  }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [pagination, setPagination] = useState({
        current_page: 1,
        per_page: 50,
        total: 0
    });
    const [search, setSearch] = useState('');
    const [sortConfig, setSortConfig] = useState({
        key: null,
        direction: 'asc'
    });

    const fetchData = async (page = 1) => {
        setLoading(true);
        try {
            const params = {
                page,
                per_page: pagination.per_page,
                search,
                sort_by: sortConfig.key,
                sort_dir: sortConfig.direction
            };

            const token = localStorage.getItem('token');
            if (!token) {
                window.location.href = '/login';
                return;
            }

            const url = new URL(`${API_BASE_URL}/api/blogs/${categoryId}`)
            Object.keys(params).forEach(key =>
                params[key] && url.searchParams.append(key, params[key])
            );

            const response = await fetch(url, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const responseData = await response.json();

            setData(responseData.data || responseData);
            setPagination({
                current_page: responseData.current_page || 1,
                per_page: responseData.per_page || pagination.per_page,
                total: responseData.total || 0
            });
        } catch (error) {
            console.error("Error fetching blogs:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleSort = (key) => {
        let direction = 'asc';
        if (sortConfig.key === key && sortConfig.direction === 'asc') {
            direction = 'desc';
        }
        setSortConfig({ key, direction });
    };

    const handleSearch = (e) => {
        e.preventDefault();
        fetchData(1);
    };

const handleStatusChange = async (id, currentStatus) => {
    if (window.confirm(`Are you sure you want to ${currentStatus === 1 ? 'deactivate' : 'activate'} this blog?`)) {
        try {
            const token = localStorage.getItem('token');
            const response = await fetch(`${API_BASE_URL}/api/blogs/${id}/status`, {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    status: currentStatus === 1 ? 0 : 1
                })
            });

            const data = await response.json(); // Parse the JSON response

            if (!response.ok) {
                throw new Error(data.message || 'Failed to update status');
            }

            // Show success message
            alert(data.message || 'Status updated successfully');

            // Refresh the data after status change
            fetchData(pagination.current_page);

        } catch (error) {
            console.error("Error updating blog status:", error);
            alert(error.message || 'An error occurred while updating status');
        }
    }
};

    const columns = [
        { key: 'id', label: 'ID' },
        { key: 'img', label: 'Image' },
        { key: 'title', label: 'Title' },
        { key: 'Date', label: 'Date' },
        { key: 'status', label: 'Status' },
        { key: 'actions', label: 'Actions' }
    ];

    useEffect(() => {
        fetchData();
    }, [sortConfig, categoryId]);

    return (
        <div className="content-wrapper">
            <section className="content">
                <div className="container-fluid">
                    <div className="card card-primary card-outline">
                        <div className="card-header">
                            <h5 className="m-0">{cusTitle} List</h5>
                            <div className="card-tools">
                                <form onSubmit={handleSearch} className="input-group input-group-sm">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Search blogs..."
                                        value={search}
                                        onChange={(e) => setSearch(e.target.value)}
                                    />
                                    <div className="input-group-append">
                                        <button type="submit" className="btn btn-primary">
                                            <i className="fas fa-search"></i>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className="card-body">
                            {loading ? (
                                <div className="text-center py-5">
                                    <div className="spinner-border text-primary" role="status">
                                        <span className="sr-only">Loading...</span>
                                    </div>
                                </div>
                            ) : (
                                <>
                                    <div className="table-responsive">
                                        <table className="table table-bordered table-hover table-striped">
                                            <thead>
                                                <tr>
                                                    {columns.map((column) => (
                                                        <th
                                                            key={column.key}
                                                            className={column.key === 'actions' ? 'text-center' : 'cursor-pointer'}
                                                            onClick={column.key !== 'actions' ? () => handleSort(column.key) : null}
                                                        >
                                                            {column.label}
                                                            {sortConfig.key === column.key && column.key !== 'actions' && (
                                                                <span className="ml-1">
                                                                    {sortConfig.direction === 'asc' ? '↑' : '↓'}
                                                                </span>
                                                            )}
                                                        </th>
                                                    ))}
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {data.map((item) => (
                                                    <tr key={item.id}>
                                                        <td>{item.id}</td>
                                                        <td>
                                                            <img
                                                                src={`https://bestdreamcar.com/frontend/assets/images/blog/${item.img}`}
                                                                alt={item.title || 'Blog image'}
                                                                style={{ width: '100px', height: 'auto' }}
                                                            />
                                                        </td>
                                                        <td>{item.title}</td>
                                                        <td>{item.created_at ? format(new Date(item.created_at), 'MM/dd/yyyy') : '-'}</td>
                                                        <td className={
                                                            item.status === 1 ? 'text-success' :
                                                            item.status === 0 ? 'text-danger' :
                                                            'text-secondary'
                                                        }>
                                                            {
                                                                item.status === 1 ? 'Active' :
                                                                item.status === 0 ? 'Inactive' :
                                                                'Unknown'
                                                            }
                                                        </td>
                                                        <td className="text-center">
                                                            <div className="btn-group btn-group-sm">
                                                                <button
                                                                    className="btn btn-info mr-1"
                                                                    onClick={() => handleView(item.id)}
                                                                    title="View"
                                                                >
                                                                    <i className="fas fa-eye"></i>
                                                                </button>
                                                                <button
                                                                    className="btn btn-primary mr-1"
                                                                    onClick={() => handleEdit(item.id)}
                                                                    title="Edit"
                                                                >
                                                                    <i className="fas fa-edit"></i>
                                                                </button>
                                                                <button
                                                                    className={`btn ${item.status === 1 ? 'btn-warning' : 'btn-success'} mr-1`}
                                                                    onClick={() => handleStatusChange(item.id, item.status)}
                                                                    title={item.status === 1 ? 'Deactivate' : 'Activate'}
                                                                >
                                                                    <i className={item.status === 1 ? 'fas fa-times' : 'fas fa-check'}></i>
                                                                </button>
                                                                <button
                                                                    className="btn btn-danger"
                                                                    onClick={() => handleDelete(item.id)}
                                                                    title="Delete"
                                                                >
                                                                    <i className="fas fa-trash"></i>
                                                                </button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>

                                    {/* Pagination remains the same */}
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BlogList;
