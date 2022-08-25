import { useEffect, useState, useMemo } from "react";
import MaterialReactTable from 'material-react-table';


export default function AdminProducts() {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async () => {
        const res = await fetch('http://localhost:5000/api/products');
        const data = await res.json();
        setUsers(data);
        setIsLoading(false);
    };
    const columns = useMemo(
        () => [
            {
                accessorKey: '_id', //access nested data with dot notation
                header: 'ID',
            },
            {
                accessorKey: 'title',
                header: 'Product Name',
            },
            {
                accessorKey: 'price', //normal accessorKey
                header: 'Price',
            },
            {
                accessorKey: 'createdAt', //normal accessorKey
                header: 'Created',
            }
        ],
        [],
    );
    return (
        <div className="mt-5 mx-5">
            {
                isLoading ?
                    <div className="spinner-border text-warning m-5" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div> :
                    (users.length < 1) ? "There is no user" :
                        <MaterialReactTable
                            columns={columns}
                            data={users}
                        />
            }

        </div>
    )
}