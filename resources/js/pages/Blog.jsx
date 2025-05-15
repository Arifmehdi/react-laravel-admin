import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';

export default function Blog() {
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

            const url = new URL('http://localhost:8000/api/blogs/2');
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
            console.error("Error fetching inventory:", error);
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

    // Action handlers
    const handleEdit = (id) => {
        console.log('Edit item with ID:', id);
        // Add your edit logic here
        // Example: window.location.href = `/inventory/edit/${id}`;
    };

    const handleView = (id) => {
        console.log('View item with ID:', id);
        // Add your view logic here
        // Example: window.location.href = `/inventory/view/${id}`;
    };

    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this item?')) {
            console.log('Delete item with ID:', id);
            // Add your delete logic here
            // Example:
            // axios.delete(`/api/inventory/${id}`)
            //   .then(() => fetchData())
            //   .catch(error => console.error(error));
        }
    };

    useEffect(() => {
        fetchData();
    }, [sortConfig]);

    const columns = [
        { key: 'id', label: 'ID' },
        { key: 'img', label: 'Image' },
        // { key: 'user_id', label: 'Author' },
        // { key: 'category_id', label: 'Category' },
        // { key: 'sub_category_id', label: 'Sub Category' },
        { key: 'title', label: 'Title' },
        { key: 'Date', label: 'Date' },
        { key: 'status', label: 'Status' },
        { key: 'actions', label: 'Actions' } // Added actions column
    ];

    return (
        <div className="content-wrapper">
            <section className="content">
                <div className="container-fluid">
                    <div className="card card-primary card-outline">
                        <div className="card-header">
                            <h5 className="m-0">Blog List</h5>
                            <div className="card-tools">
                                <form onSubmit={handleSearch} className="input-group input-group-sm">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Search VIN, Stock, Make, Model..."
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
                                                        {/* <td>{item.owner_name}</td> */}
                                                        {/* <td>{item.category_id}</td>
                                                        <td>{item.sub_category_id}</td> */}
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
                                                            'text-secondary'
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

                                    <div className="row mt-3">
                                        <div className="col-sm-12 col-md-5">
                                            <div className="dataTables_info">
                                                Showing {(pagination.current_page - 1) * pagination.per_page + 1} to{' '}
                                                {Math.min(pagination.current_page * pagination.per_page, pagination.total)} of{' '}
                                                {pagination.total} entries
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-7">
                                            <div className="dataTables_paginate paging_simple_numbers float-right">
                                                <ul className="pagination">
                                                    <li className={`paginate_button page-item previous ${pagination.current_page === 1 ? 'disabled' : ''}`}>
                                                        <button
                                                            className="page-link"
                                                            onClick={() => fetchData(pagination.current_page - 1)}
                                                        >
                                                            Previous
                                                        </button>
                                                    </li>
                                                    <li className={`paginate_button page-item next ${pagination.current_page * pagination.per_page >= pagination.total ? 'disabled' : ''}`}>
                                                        <button
                                                            className="page-link"
                                                            onClick={() => fetchData(pagination.current_page + 1)}
                                                        >
                                                            Next
                                                        </button>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
