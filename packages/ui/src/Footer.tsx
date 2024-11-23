import React from "react";
import Link from "next/link";
import { Github, Twitter, Linkedin } from "lucide-react";

interface FooterProps {
  year?: number;
  email?: string;
}

const Footer: React.FC<FooterProps> = ({
  year = new Date().getFullYear(),
  email = "support@flowpay.com",
}) => {
  return (
    <footer className="bg-slate-100 text-gray-700 py-8 border-t border-slate-300">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">FlowPay</h3>
            <p className="text-sm">
              Simplifying your finances with secure and seamless digital
              payments.
            </p>
            <p className="text-sm">© {year} FlowPay. All rights reserved.</p>
          </div>

          <div>
            <h4 className="text-md font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacy"
                  className="text-sm hover:text-blue-600 transition-colors duration-200"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm hover:text-blue-600 transition-colors duration-200"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-md font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4 mb-4">
              <a
                href="https://github.com/pankajkumardev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-800"
              >
                <Github size={20} />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="https://x.com/pankajkumar_dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-400"
              >
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href="https://linkedin.com/in/Pankajkumardev0"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-700"
              >
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
            <div>
              <a
                href={`mailto:pankajams1234@gmail.com`}
                className="text-sm hover:underline"
              >
                {email}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-300 text-center text-sm text-gray-500">
          <p>FlowPay is a registered trademark of FlowPay, Inc.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
