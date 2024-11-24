"use client"; // Client-side component

import { useState, useEffect } from "react";

interface NumberListProps {
  number: string;
  onSelect: (value: string) => void;
}

export function NumberList({ number, onSelect }: NumberListProps) {
  const [filteredNumbers, setFilteredNumbers] = useState<{ number: string }[]>(
    [],
  );
  const [loading, setLoading] = useState(false);

  const fetchNumbers = async (input: string) => {
    setLoading(true);
    try {
      const response = await fetch(`/api/numbers?search=${input}`);
      const data = await response.json();
      setFilteredNumbers(data.numbers);
    } catch (error) {
      console.error("Error fetching numbers:", error);
    } finally {
      setLoading(false);
    }
  };

  //debounce the input to avoid multiple requests
  useEffect(() => {
    if (number.length > 0) {
      const timer = setTimeout(() => {
        fetchNumbers(number);
      }, 300);
      return () => clearTimeout(timer);
    } else {
      setFilteredNumbers([]);
    }
  }, [number]);

  const handleSelect = (selectedNumber: string) => {
    onSelect(selectedNumber);
    setFilteredNumbers([]); // Clear the list after selection
  };

  return (
    <div className="relative">
      {loading && <p>Loading...</p>}
      {filteredNumbers.length > 0 && (
        <ul className="absolute bg-white border border-gray-300 w-full rounded-lg shadow-lg mt-1 z-10  text-sm">
          {filteredNumbers.map((numObj) => (
            <li
              key={numObj.number}
              onClick={() => handleSelect(numObj.number)}
              className="p-2 hover:bg-gray-200 cursor-pointer"
            >
              {numObj.number}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
