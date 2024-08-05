import { Link} from 'react-router-dom';
import './App.css'

const Home = () => {
    return (
        <div className='home'>
           <h1>Home page</h1>
           <nav>
           <Link to={'/page1'}>page1</Link>
           <Link to={'/page2'}>page2</Link>
           </nav>
        </div>
    );
}

export default Home;



