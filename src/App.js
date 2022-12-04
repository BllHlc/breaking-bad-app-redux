import './App.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {
  Routes,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";
import Home from './pages/Home';
import Detail from './pages/Detail';
import Quotes from './pages/Quotes';
import QuoteDetail from './pages/QuoteDetail';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar bg="dark" variant="dark" sticky="top">
        <Nav defaultActiveKey="/" className='p-2'>
          <Nav.Item>
            <Nav.Link as={Link} to="/" href="/" >Characters</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/quotes" href="/quotes">Quotes</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/char/:char_id" element={<Detail />} />
        <Route path="quotes" element={<Quotes />} />
        <Route path="/quotes/:quote_id" element={<QuoteDetail />} />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </BrowserRouter >
  );
}

export default App;
