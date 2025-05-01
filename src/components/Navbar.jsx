// src/components/Navbar.jsx
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="bg-blue-600 text-white px-6 py-3 flex justify-between items-center">
      {/* KIRI: Judul */}
      <div className="text-xl font-bold">
        <Link to="/" className="hover:underline">
          Toko Online
        </Link>
      </div>

      {/* KANAN: Navigasi */}
      <div className="flex space-x-4 items-center">
        <Link to="/" className="hover:underline">Home</Link>
        {!user ? (
          <>
            <Link to="/login" className="hover:underline">Login</Link>
            <Link to="/register" className="hover:underline">Register</Link>
          </>
        ) : (
          <>
            <span>Hi, {user.name}</span>
            <button onClick={handleLogout} className="hover:underline">Logout</button>
          </>
        )}
      </div>
    </nav>
  );
}
