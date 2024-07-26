
import { useEffect, useState } from "react";
import axios from "axios";

function DataFetching() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchMyData = async () => {
            try {
                const res = await axios.get('https://fakestoreapi.com/users');
                setData(res.data);
                console.log(res.data);
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };

        fetchMyData();
    }, []);

    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Email</th>
                        <th scope="col">Username</th>
                        <th scope="col">Password</th>
                        <th scope="col">Address</th>
                        <th scope="col">Name</th>
                        <th scope="col">Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((dataItem) => (
                        <tr key={dataItem.id}>
                            <td>{dataItem.id}</td>
                            <td>{dataItem.email}</td>
                            <td>{dataItem.username}</td>
                            <td>{dataItem.password}</td>
                            <td>{`${dataItem.address.street}, ${dataItem.address.city}, ${dataItem.address.zipcode}`}</td>
                            <td>{`${dataItem.name.firstname} ${dataItem.name.lastname}`}</td>
                            <td>{dataItem.phone}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default DataFetching;
