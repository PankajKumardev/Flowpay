"use client";

import React, { useState } from "react";
import { toast } from "react-toastify";
import { ArrowRight, Smartphone, Lock, Info } from "lucide-react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginSignup() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(""); // Clear previous error
    const onlyNumber = phoneNumber.replace(/\D/g, "");
    const res = await signIn("credentials", {
      phone: onlyNumber,
      password: password,
      redirect: false,
    });
    setIsLoading(false);

    if (res?.status === 201) {
      toast.success(
        "Welcome to FlowPay! Your account has been created successfully.",
      );
      router.push("/dashboard");
    } else if (res?.status === 200) {
      toast.success("You've successfully logged in to your FlowPay account.");
      router.push("/dashboard");
    } else {
      setError("Invalid phone number or password. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Welcome to <span className="text-blue-600 font-bold">FlowPay</span>
          </h1>
          <p className="text-gray-600 mt-2">Login or create your account</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="phoneNumber" className="text-gray-700">
              Phone Number
            </label>
            <div className="relative">
              <Smartphone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                id="phoneNumber"
                type="tel"
                placeholder="Enter your phone number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="pl-10 w-full h-10 rounded-md"
                required
              />
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="password" className="text-gray-700">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pl-10 w-full h-10 rounded-md"
                required
              />
            </div>
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <Info className="w-4 h-4" />
            <p>Demo : Phone: 123456, Password: 123456</p>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white flex rounded-md h-10 items-center justify-center text-sm"
            disabled={isLoading}
          >
            {isLoading ? (
              "Processing..."
            ) : (
              <div className="flex items-center">
                Continue
                <ArrowRight className="ml-2 h-4 w-5" />
              </div>
            )}
          </button>
        </form>
        <p className="mt-4 text-sm text-center text-gray-600">
          By continuing, you agree to FlowPay's Terms of Service and Privacy
          Policy.
        </p>
      </div>
    </div>
  );
}
