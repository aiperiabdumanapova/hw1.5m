import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Page1 from './Page1';
import Page2 from './Page2';
import './App.css'

function App() {
  return (
  <div>
  <BrowserRouter>
    <header>
    <h1>Logo</h1>
      <div className="header"></div>
      <nav>
        <Link to={'/'}>home</Link>
        <Link to={'/page1'}>page1</Link>
        <Link to={'/page2'}>page2</Link>
      </nav>
    </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
      </Routes>
    
  </BrowserRouter>
</div>
  );
}

export default App;
