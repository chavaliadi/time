// src/pages/LoginPage.jsx
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";

// Renamed from StudentLogin to LoginPage, now accepts onLoginSuccess
export default function LoginPage({ onLoginSuccess }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please enter both Student ID / Email and Password.");
      return;
    }

    // --- TEMPORARY AUTHENTICATION LOGIC FOR TESTING ---
    // You MUST replace this with real authentication (API calls, etc.)
    let role = "student"; // Default role

    if (email === "admin@example.com" && password === "admin123") {
      role = "admin";
    } else if (email === "faculty@example.com" && password === "faculty123") {
      role = "faculty";
    } else if (email === "student@example.com" && password === "student123") {
        role = "student"; // Explicitly set if you have a student role
    }
    else {
      setError("Invalid credentials. Try admin@example.com/admin123 or faculty@example.com/faculty123");
      return;
    }
    // --- END TEMPORARY AUTHENTICATION LOGIC ---

    setError("");
    // Pass the login data including the role back to App.jsx
    onLoginSuccess({ email: email, role: role });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <header className="w-full p-4 bg-white shadow-sm flex items-center border-b border-gray-200">
        <span className="text-xl font-bold ml-4 text-gray-800">Time Table Management System</span>
      </header>
      <main className="flex flex-1 items-center justify-center p-4">
        <div className="bg-white p-8 rounded-lg w-full max-w-sm shadow-lg border border-gray-200">
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Login</h2> {/* Changed title */}
          <form onSubmit={handleLogin} autoComplete="on"> {/* Added autoComplete */}
            <div className="mb-4">
              <Label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </Label>
              <Input
                id="email"
                type="email" // Changed to email type
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full"
                autoComplete="username"
              />
            </div>
            <div className="mb-6">
              <Label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full pr-10"
                  autoComplete="current-password"
                />
                <span
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </span>
              </div>
            </div>
            {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}
            <Button
              type="submit"
              className="w-full bg-blue-500 text-white font-semibold py-3 rounded-lg hover:bg-blue-600 transition-colors text-base"
            >
              Login
            </Button>
          </form>
        </div>
      </main>
    </div>
  );
}