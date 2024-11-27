import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Flowpay",
  description: "Terms of Service for Flowpay digital wallet application",
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-slate-100 py-12 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-3xl mx-auto pt-20">
        <div className="text-center mb-12">
          <div className="text-3xl sm:text-4xl font-extrabold text-blue-600">
            FlowPay <span className="text-slate-800">Terms of Service</span>{" "}
          </div>
          <div className="mt-2 text-lg sm:text-xl text-slate-800">
            Understand the terms of using Flowpay.
          </div>
        </div>
        <div className="space-y-6 text-gray-600">
          <section>
            <h2 className="text-xl font-medium text-gray-900 mb-2">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing or using the Flowpay digital wallet application, you
              agree to be bound by these Terms of Service and all applicable
              laws and regulations.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-gray-900 mb-2">
              2. Description of Service
            </h2>
            <p>
              Flowpay provides a digital wallet service that allows users to
              manage funds, track expenses, and transfer money securely.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-gray-900 mb-2">
              3. User Accounts
            </h2>
            <p>
              To use Flowpay, you must create an account. You are responsible
              for maintaining the confidentiality of your account information
              and for all activities that occur under your account.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-gray-900 mb-2">
              4. User Conduct
            </h2>
            <p>
              You agree not to use Flowpay for any unlawful purpose or in any
              way that could damage, disable, overburden, or impair our service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-gray-900 mb-2">
              5. Fees and Charges
            </h2>
            <p>
              Flowpay may charge fees for certain transactions or services.
              These fees will be clearly communicated to you before any
              transaction is processed.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-gray-900 mb-2">
              6. Intellectual Property
            </h2>
            <p>
              All content, features, and functionality of Flowpay are owned by
              us and are protected by international copyright, trademark,
              patent, trade secret, and other intellectual property laws.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-gray-900 mb-2">
              7. Limitation of Liability
            </h2>
            <p>
              Flowpay shall not be liable for any indirect, incidental, special,
              consequential or punitive damages, including without limitation,
              loss of profits, data, use, goodwill, or other intangible losses.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-gray-900 mb-2">
              8. Governing Law
            </h2>
            <p>
              These Terms shall be governed and construed in accordance with the
              laws of [Your Jurisdiction], without regard to its conflict of law
              provisions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-gray-900 mb-2">
              9. Changes to Terms
            </h2>
            <p>
              We reserve the right to modify or replace these Terms at any time.
              We will provide notice of any material changes to the Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-gray-900 mb-2">
              10. Contact Us
            </h2>
            <p>
              If you have any questions about these Terms, please contact us at
              terms@flowpay.com.
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
