import React from "react";
import { useState } from "react";
import Navbar from "./components/NavBar.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import CardGrid from "./components/Data.jsx";

// Function App which acts as the main body for all the components
function App() {
  const [cartItems, setCartItems] = useState(0);

  return (
    <div style={{ backgroundColor: "#f2f2f2" }}>
      <Navbar cartItems={cartItems} />
      <Header />
      <div>
        <div className="container">
          <div className="row">
            <CardGrid setCartItems={setCartItems} />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default App;
