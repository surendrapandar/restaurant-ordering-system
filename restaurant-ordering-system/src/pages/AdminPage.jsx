import React, { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebase/firebaseConfig";
import AdminDashboard from "../components/AdminDashboard";
import Login from "../components/Login";

function AdminPage() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const handleLogin = (user) => {
    setUser(user);
  };

  return (
    <div className="container mx-auto p-4">
      {user ? (
        <AdminDashboard userId={user.uid} />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}

export default AdminPage;
