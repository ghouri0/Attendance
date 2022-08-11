import React from "react";
import Home from "./pages/home/Home";
import Lists from "./pages/lists/Lists";
import Customer from "./pages/customers/Customer";
import Seller from "./pages/seller/Seller";
import Profile from "./pages/profile/Profile";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="customers" element={<Customer/>}/>
        <Route path="sellers" element={<Seller/>}/>
        <Route path="attend" element={<Lists/>}/>
        <Route path="profile" element={<Profile/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;