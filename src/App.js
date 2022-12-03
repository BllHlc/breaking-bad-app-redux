import './App.css';
import {
  Routes,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";

function App() {

  function Home() {
    return (
      <div>
        <h2>Home</h2>
      </div>
    );
  }

  function About() {
    return (
      <div>
        <h2>About</h2>
      </div>
    );
  }

  function Users() {
    return (
      <div>
        <h2>Users</h2>
      </div>
    );
  }


  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link>
          <Link to="about">About</Link>
          <Link to="contact">Contact</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Users />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
