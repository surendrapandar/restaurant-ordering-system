import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import LandingPage from "@/pages/LandingPage";
import MasterPage from "./pages/MasterPage";
import AdminPage from "./pages/AdminPage";
import MenuPage from "./pages/MenuPage";
import NotFoundPage from "./pages/NotFoundPage";
import PublicMenu from "./components/PublicMenu";
import { useParams } from "react-router-dom";

function PublicMenuWrapper() {
  const { restaurantId } = useParams();
  return <PublicMenu restaurantId={restaurantId} />;
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-600">
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/master" element={<MasterPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/menu/:restaurantId" element={<PublicMenuWrapper />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
