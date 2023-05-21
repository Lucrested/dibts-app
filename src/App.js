import './App.css';
import './main.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Error from './pages/Error';
import Test from './pages/Test';
import Navbar from './components/Navbar';
import Cart from './pages/Cart';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes >
          <Route path="/login" element={<Login />} />   
          <Route
            path="/*"
            element={
              <>
                <Navbar />
                <Cart />
                <Routes>
                  <Route index element={<Home />} />
                  <Route path="/home" element={<Home />} />
                  <Route path="/menu" element={<Menu />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/test" element={<Test />} />
                  <Route path="*" element={<Error />} />
                </Routes>
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
