import './App.css';
import {
  Routes,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";
import Home from './pages/Home';
import Detail from './pages/Detail';
import Quotes from './pages/Quotes';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/">Characters</Link>
            </li>
            <li>
              <Link to="/quotes">Quotes</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/char/:char_id" element={<Detail />} />
          <Route path="quotes" element={<Quotes />} />
          <Route path="*" element={<div>Not Found</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
