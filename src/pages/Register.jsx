// src/pages/Register.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/user/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();
      console.log("Response status:", response.status, "body:", data);

      if (response.status === 201) {
        // Status 201 OK artinya user berhasil dibuat
        alert("Register berhasil: " + data.message);
        navigate("/login");
      } else {
        // Semua status selain 201 dianggap gagal
        alert("Register gagal: " + (data.message || response.statusText));
      }
    } catch (error) {
      console.error("Error saat register:", error);
      alert("Terjadi kesalahan koneksi");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleRegister}
        className="w-full max-w-md bg-white p-6 rounded-lg shadow-md"
      >
        <h2 className="text-2xl font-semibold mb-6 text-center">Register</h2>
        <label className="block mb-2">
          <span className="text-gray-700">Name</span>
          <input
            type="text"
            className="mt-1 block w-full border rounded p-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label className="block mb-2">
          <span className="text-gray-700">Email</span>
          <input
            type="email"
            className="mt-1 block w-full border rounded p-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Password</span>
          <input
            type="password"
            className="mt-1 block w-full border rounded p-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Register
        </button>
        <p className="mt-4 text-center text-sm text-gray-600">
          Sudah punya akun?{" "}
          <button
            type="button"
            onClick={() => navigate("/login")}
            className="text-blue-600 hover:underline"
          >
            Login di sini
          </button>
        </p>
      </form>
    </div>
  );
}
