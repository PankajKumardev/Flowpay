"use client";

import { useState, useRef } from "react";
import { Card } from "@repo/ui/card";
import { Center } from "@repo/ui/center";
import { Textinput } from "@repo/ui/textinput";
import { p2pTransfer } from "../app/lib/actions/P2Ptransfer";
import { NumberList } from "./NumberList";

export function SendCard() {
  const [number, setNumber] = useState<string>("");
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState<string | null>(null); // State for success/failure message
  const [loading, setLoading] = useState(false); // State for loading
  const [dropdownVisible, setDropdownVisible] = useState(false); // State for dropdown visibility
  const inputRef = useRef<HTMLInputElement | null>(null); // Use ref for the input

  const handleNumberSelect = (selectedNumber: string) => {
    setNumber(selectedNumber); // Set the selected number in the input field
    setDropdownVisible(false); // Hide the dropdown after selection
    inputRef.current?.blur(); // Remove focus from the input
  };

  const handleBlur = () => {
    setTimeout(() => setDropdownVisible(false), 200); // Delay hiding dropdown to allow selection
  };

  const handleSendMoney = async () => {
    try {
      await p2pTransfer(number, Number(amount) * 100);
      setMessage("Money sent successfully!"); // Set success message
    } catch (error) {
      setMessage("Failed to send money. Please try again."); // Set failure message
    }
  };

  return (
    <div className="h-full mt-10 ">
      <Center>
        <Card title="Send Money">
          <div className="min-w-80 pt-2">
            <div className="pt-2">
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Number
              </label>
              <input
                ref={inputRef} // Attach the input reference
                type="text"
                placeholder="Number"
                value={number} // Controlled input value
                onChange={(e) => {
                  setNumber(e.target.value);
                  setDropdownVisible(true); // Show dropdown when typing
                }}
                onBlur={handleBlur} // Hide dropdown when input loses focus
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
              {dropdownVisible && (
                <NumberList number={number} onSelect={handleNumberSelect} />
              )}
            </div>
            <Textinput
              placeholder={"Amount"}
              label="Amount"
              onChange={(value) => setAmount(value)}
            />
            <div className="pt-4 flex justify-center">
              <button
                onClick={async () => {
                  setLoading(true);
                  await handleSendMoney();
                  setLoading(false);
                }}
                type="button"
                className="text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send"}
              </button>
            </div>
            {/* Show success or error message */}
            {message && (
              <p
                className={`mt-4 text-center text-sm ${message === "Money sent successfully!" ? "text-green-600" : "text-red-600"}`}
              >
                {message}
              </p>
            )}
          </div>
        </Card>
      </Center>
    </div>
  );
}
