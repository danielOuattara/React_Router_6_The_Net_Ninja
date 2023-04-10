import { BrowserRouter, Link, Route, Routes, Navigate } from "react-router-dom";
import { Home, About, Products, ProductDetails } from "./pages";
import { useState } from "react";

function App() {
  const [chartIsEmpty] = useState(true);

  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <h1>The Ninja Clothing Company</h1>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/products">Products</Link>
          <Link to="/test">Test</Link>
          <Link to="/checkout">Checkout</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about/*" element={<About />} />
          <Route path="/products/:id/*" element={<ProductDetails />} />
          <Route path="/products" element={<Products />} />
          <Route
            path="test"
            element={
              <div>
                <h2>Test Page</h2>
                <p>Hello !</p>
              </div>
            }
          />
          {/* Old !*/}
          {/* <Route path="/redirect" element={<Redirect to="/about" />} /> */}

          {/* New !*/}
          <Route path="/redirect" element={<Navigate to="/about" />} />

          {/*Navigate on condition: */}
          {/* <Route path="/checkout" element={chartIsEmpty ? <Products /> : <p>checkout page</p>} /> */}
          {/* OR */}
          <Route
            path="/checkout"
            element={
              chartIsEmpty ? <Navigate to="/products" /> : <p>checkout page</p>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
