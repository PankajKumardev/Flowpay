"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Loader2 } from "lucide-react";
import hdfc from "../assests/HDFC-Bank-Logo.png";
import { createOnRamptxn } from "../app/lib/actions/createOnRampTxn";

export default function HDFCTransactionPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [isComplete, setIsComplete] = useState(false);
  const [message, setMessage] = useState("");
  const transactionProcessed = useRef(false);

  useEffect(() => {
    const processTransaction = async () => {
      if (transactionProcessed.current) return;
      transactionProcessed.current = true;
      try {
        const urlParams = new URLSearchParams(window.location.search);
        const amount = urlParams.get("amount");
        if (amount) {
          const numericAmount = parseFloat(amount);
          if (numericAmount < 1 || numericAmount > 10000) {
            setMessage("Transaction amount should be between 1 and 10000.");
            setIsComplete(false);
          } else {
            await createOnRamptxn(numericAmount * 100, "HDFC Bank");
            setIsComplete(true);
            setMessage("Transaction completed successfully");
          }
        } else {
          setMessage("Invalid transaction amount.");
        }
      } catch (error) {
        setMessage("Transaction failed. Please try again.");
      } finally {
        setIsLoading(false);
      }
    };

    processTransaction();
  }, [createOnRamptxn]);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-[#004C8F] text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Image
            src={hdfc}
            alt="HDFC Bank Logo"
            width={120}
            height={40}
            className=""
          />
          <nav>
            <ul className="flex space-x-4 text-sm">
              <li>Home</li>
              <li>Accounts</li>
              <li>Payments</li>
              <li>Customer Service</li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="flex-grow container mx-auto mt-8 p-4 flex items-center justify-center">
        <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
          <h1 className="text-2xl font-bold text-[#004C8F] mb-6 text-center">
            Transaction Processing
          </h1>
          {isLoading ? (
            <div className="flex flex-col items-center justify-center space-y-4 py-8">
              <Loader2 className="h-16 w-16 animate-spin text-[#004C8F]" />
              <p className="text-lg font-semibold text-[#004C8F]">
                Processing your transaction...
              </p>
              <p className="text-sm text-gray-600">
                Please do not refresh or close this page.
              </p>
            </div>
          ) : isComplete ? (
            <div className="text-center space-y-4 py-8">
              <svg
                className="mx-auto h-16 w-16 text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <h2 className="text-2xl font-bold text-green-600">
                Transaction Successful!
              </h2>
              <p className="text-lg">{message}</p>
              <p className="text-sm text-gray-600">
                Transaction ID: HDFC
                {Math.random().toString(36).substring(2, 11).toUpperCase()}
              </p>
            </div>
          ) : (
            <div className="text-center space-y-4 py-8">
              <svg
                className="mx-auto h-16 w-16 text-red-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
              <h2 className="text-2xl font-bold text-red-600">
                Transaction Failed
              </h2>
              <p className="text-lg">{message}</p>
              <p className="text-sm text-gray-600">
                Please try again or contact customer support.
              </p>
            </div>
          )}
        </div>
      </main>
      <footer className="bg-[#004C8F] text-white text-sm p-4 mt-8">
        <div className="container mx-auto text-center">
          © 2023 HDFC Bank Ltd. All rights reserved. | Terms and Conditions |
          Privacy Policy
        </div>
      </footer>
    </div>
  );
}
