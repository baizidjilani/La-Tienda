// export default function AdminOrders() {
//     const [users, setUsers] = useState([]);
//     const [isLoading, setIsLoading] = useState(true);
//     useEffect(() => {
//         fetchData();
//     }, []);
//     const fetchData = async () => {
//         const res = await fetch('http://localhost:5000/api/userorders/');
//         const data = await res.json();
//         setUsers(data);
//         setIsLoading(false);
//     };
//     const columns = useMemo(
//         () => [
//             {
//                 accessorKey: '_id', //access nested data with dot notation
//                 header: 'ID',
//             },
//             {
//                 accessorKey: 'title',
//                 header: 'Product Name',
//             },
//             {
//                 accessorKey: 'price', //normal accessorKey
//                 header: 'Price',
//             },
//             {
//                 accessorKey: 'createdAt', //normal accessorKey
//                 header: 'Created',
//             }
//         ],
//         [],
//     );
//     return(
//         <>
//         Orders
//         </>
//     )
// }