
import "./App.css";
import React from "react";
import IndexPage from "./container/IndexPage.js";
// import Example from "./container/Example";
// import IndexPage from "./container/IndexPage.js";
import Offers from "./container/Offers";
import Testimonials from "./container/Testimonials.js";
import Team from "./container/Team";
import Footer from "./container/footer";






function App() {
  return (
    <div className="App">
      <IndexPage /> 
      <Offers />
      <Testimonials />
      <Team />
      <Footer />

      





    
    </div>
  );
}

export default App;
