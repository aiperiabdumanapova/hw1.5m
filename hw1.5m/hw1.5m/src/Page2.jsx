import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Page2 = () => {
    const [posts, setPosts] = useState([]);
    const navigate = useNavigate()
    
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => setPosts(data));
    }, []);
    
    return (
        <div className="page2">
            <h1>Page 2</h1>
            <button onClick={() => {
                navigate(-1);
            }}>back</button>
            {
                posts.map(item => {
                    return <h2 key={item.id}>{item.title}</h2>
                })
            }
        </div>
    );
}

export default Page2;

