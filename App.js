import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ContactForm from "./components/ContactForm";
import Login from "./components/Login";
import EnterMobileNumber from "./components/EnterMobileNumber";
import ReceivedContact from "./components/ReceivedContact";
import ValidateOTP from "./components/ValidateOTP";
import StoreInformation from "./components/StoreInformation";
import StoreDocument from "./components/StoreDocument";
import PartnerAgreement from "./components/PartnerAgreement";
import Dashboard from "./components/Dashboard";
import ReceivedStore from "./components/ReceivedStore";
import Order from "./components/Order";
import ProtectedRoute from "./components/ProtectedRoute";
import Products from "./components/Products";
import AddProducts from "./components/AddProducts";
import Profile from "./components/Profile";
import EditPrices from "./components/EditPrices";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Simulate auth state

  console.log("isAuthenticated:", isAuthenticated); // Debug: Check auth state

  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Public Routes */}
          <Route
            path="/"
            element={<Login setIsAuthenticated={setIsAuthenticated} />}
          />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/enter-mobile-number" element={<EnterMobileNumber />} />
          <Route path="/validate-otp" element={<ValidateOTP />} />
          <Route path="/received-contact" element={<ReceivedContact />} />
          <Route path="/store-information" element={<StoreInformation />} />
          <Route path="/store-document" element={<StoreDocument />} />
          <Route path="/partner-agreement" element={<PartnerAgreement />} />
          <Route path="/received-store" element={<ReceivedStore />} />
          {/* Protected Routes */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/order"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <Order />
              </ProtectedRoute>
            }
          />
          <Route path="/products" element={<Products />} />
          <Route
            path="/products/add-products"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <AddProducts />
              </ProtectedRoute>
            }
          />
          <Route path="/products/edit-prices" element={<EditPrices />} />
          <Route
            path="/profile"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <Profile />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
