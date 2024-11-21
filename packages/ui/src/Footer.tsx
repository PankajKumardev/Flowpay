import React from "react";

interface FooterProps {
  year?: number;
  email?: string;
}

const Footer: React.FC<FooterProps> = ({
  year = new Date().getFullYear(),
  email = "pankajams1234@gmail.com",
}) => {
  return (
    <footer className="bg-slate-200 text-gray-700 py-6 border-t border-slate-300">
      <div className="container mx-auto px-6 sm:px-12">
        {/* Footer Content */}
        <div className="flex flex-col items-center space-y-6 sm:space-y-0 sm:flex-row sm:justify-between">
          <div className="text-center sm:text-left">
            <p className="text-lg font-semibold mb-1">
              © {year} Flowpay. All rights reserved.
            </p>
            <p className="text-sm">
              <a href={`mailto:${email}`} className="hover:underline">
                Contact us: {"support@flowpay.com"}
              </a>
            </p>
          </div>

          {/* Links Section */}
          <div className="flex flex-col sm:flex-row sm:space-x-8 mt-4 sm:mt-0">
            <a
              href="/privacy"
              className="text-sm text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="text-sm text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
