"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

interface MobileNavProps {
  children: React.ReactNode;
}

export function MobileNav({ children }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 z-[100] p-2 md:hidden text-slate-500 hover:text-slate-700 transition-colors"
        aria-label="Toggle Menu"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Backdrop with blur */}
      {isOpen && (
        <div
          className="fixed inset-0 backdrop-blur-sm bg-black/30 z-[80] md:hidden transition-all duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed left-0 top-0 h-full w-64 bg-white/95 backdrop-blur-md shadow-xl z-[90] transition-all duration-300 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Custom scrollbar container */}
        <div className="h-full pt-24 overflow-y-auto scrollbar-hide">
          <div className="pb-8">{children}</div>
        </div>
      </div>

      {/* Desktop view */}
      <div className="hidden md:block h-full">{children}</div>

      <style jsx global>{`
        /* Custom scrollbar styles */
        .scrollbar-hide {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </>
  );
}
