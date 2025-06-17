"use client";

import React, { useState } from "react";
import { register } from "../../services/authService";
import { useRouter } from "next/navigation";

export default function Register() {
  const [form, setForm] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    Phone: "",
    Address: {
      address: "",
      City: "",
      Country: "",
    },
    Password: "",
  });
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name in form.Address) {
      setForm((prev) => ({
        ...prev,
        Address: { ...prev.Address, [name]: value },
      }));
    } else if (name === "ConfirmPassword") {
      setConfirmPassword(value);
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (form.Password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setIsLoading(true);
    try {
      await register(form);
      setShowSuccess(true); // Show popup
    } catch (err: any) {
      const apiMessage =
        err?.response?.data?.Message ||
        err?.response?.data?.message ||
        "Registration failed. Please check your details.";
      setError(apiMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClosePopup = () => {
    setShowSuccess(false);
    router.push("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-slate-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white/80 p-8 rounded-3xl shadow-2xl border w-full max-w-md space-y-4"
      >
        <h2 className="text-2xl font-bold mb-4">Register</h2>
        {error && <div className="text-red-500">{error}</div>}
        <input
          name="FirstName"
          placeholder="First Name"
          value={form.FirstName}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          name="LastName"
          placeholder="Last Name"
          value={form.LastName}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          name="Email"
          type="email"
          placeholder="Email"
          value={form.Email}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          name="Phone"
          placeholder="Phone"
          value={form.Phone}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          name="address"
          placeholder="Street Address"
          value={form.Address.address}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          name="City"
          placeholder="City"
          value={form.Address.City}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          name="Country"
          placeholder="Country"
          value={form.Address.Country}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          name="Password"
          type="password"
          placeholder="Password"
          value={form.Password}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          name="ConfirmPassword"
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded font-semibold"
          disabled={isLoading}
        >
          {isLoading ? "Registering..." : "Register"}
        </button>
      </form>

      {/* Popup Modal */}
      {showSuccess && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-sm w-full text-center">
            <h3 className="text-xl font-bold mb-4">Registration Successful!</h3>
            <p className="mb-6">Please check your email and confirm your account.</p>
            <button
              onClick={handleClosePopup}
              className="bg-blue-600 text-white px-4 py-2 rounded font-semibold"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
}