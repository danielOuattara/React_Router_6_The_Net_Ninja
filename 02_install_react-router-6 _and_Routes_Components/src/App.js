import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Home, About, Products, ProductDetails } from "./pages";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <h1>The Ninja Clothing Company</h1>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/products">Products</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/products" element={<Products />} />
          <Route
            path="/test"
            element={
              <div>
                <h2>Test page</h2>
                <p>Lorem ipsum test page!</p>
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
