import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Page1 = () => {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate()
    
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => setUsers(data));
    }, []);
    
    return (
        <div className="page1">
            <h1>Page 1</h1>
            <button onClick={() => {
                navigate(-1);
            }}>back</button>
            {
                users.map(item => {
                    return <h2 key={item.id}>{item.name}</h2>
                })
            }
        </div>
    );
}

export default Page1;

