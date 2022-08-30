
import { useEffect, useState, useMemo } from "react";
import MaterialReactTable from 'material-react-table';

export default function SellerProducts() {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async () => {
        const res = await fetch('http://localhost:5000/api/userorders/');
        const data = await res.json();
        setUsers(data);
        setIsLoading(false);
    };
    const columns = useMemo(
        () => [
            {
                accessorKey: 'userId', //access nested data with dot notation
                header: 'ID',
            },
            {
                accessorKey: 'amount',
                header: 'Amount',
            },
            {
                accessorKey: 'address', //normal accessorKey
                header: 'Address',
            },
            {
                accessorKey: 'status', //normal accessorKey
                header: 'Status',
            }
        ],
        [],
    );
    return(
        <>
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
        </>
    )
}