import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Flowpay',
  description: 'Privacy Policy for Flowpay digital wallet application',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-slate-100 py-12 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-3xl mx-auto pt-20">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-800">
            <span className="text-blue-600">FlowPay </span>Privacy Policy
          </h1>
          <p className="mt-2 text-lg sm:text-xl text-slate-800">
            How we handle your information.
          </p>
        </div>
        <div className="space-y-6 text-gray-600">
          <section>
            <h2 className="text-xl font-medium text-gray-900 mb-2">
              1. Introduction
            </h2>
            <p>
              Welcome to Flowpay's Privacy Policy. This policy describes how we
              collect, use, and protect your personal information when you use
              our digital wallet application.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-gray-900 mb-2">
              2. Information We Collect
            </h2>
            <p>We collect the following types of information:</p>
            <ul className="list-disc pl-6 mt-2">
              <li>
                Personal identification information (Name, email address, phone
                number)
              </li>
              <li>
                Financial information (Transaction history, account balances)
              </li>
              <li>
                Device information (IP address, browser type, operating system)
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-medium text-gray-900 mb-2">
              3. How We Use Your Information
            </h2>
            <p>We use your information to:</p>
            <ul className="list-disc pl-6 mt-2">
              <li>Process transactions and maintain your account</li>
              <li>Improve our services and user experience</li>
              <li>Communicate with you about your account and our services</li>
              <li>Comply with legal and regulatory requirements</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-medium text-gray-900 mb-2">
              4. Data Security
            </h2>
            <p>
              We implement a variety of security measures to maintain the safety
              of your personal information, including encryption, secure
              servers, and regular security audits.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-gray-900 mb-2">
              5. Your Rights
            </h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 mt-2">
              <li>Access and receive a copy of your personal data</li>
              <li>Rectify inaccurate personal data</li>
              <li>Request the deletion of your personal data</li>
              <li>Object to the processing of your personal data</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-medium text-gray-900 mb-2">
              6. Changes to This Policy
            </h2>
            <p>
              We may update this privacy policy from time to time. We will
              notify you of any changes by posting the new privacy policy on
              this page and updating the "Last updated" date.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-gray-900 mb-2">
              7. Contact Us
            </h2>
            <p>
              If you have any questions about this privacy policy, please
              contact us at privacy@flowpay.com.
            </p>
          </section>

          <p className="text-sm text-gray-500 mt-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
}
