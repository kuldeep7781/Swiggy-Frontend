import React from "react";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Category from "./Components/Category";
import TopResto from "./Components/TopResto";
import OnlineDelivery from "./Components/OnlineDelivery";
import Footer from "./Components/Footer";

function App() {
  return (
    <Router>
      <div className="">
        <Navbar />
        <Category />
        <TopResto />
        <OnlineDelivery />
        <Footer />
        <div className="">
          <Routes>
            {/* <Route path="/about" element={<About />} />
            <Route path="/blog/:id" element={<BlogDetails />} />
            <Route path="/create" element={<Create />} />
            <Route path="*" element={<NoPage />} /> */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
