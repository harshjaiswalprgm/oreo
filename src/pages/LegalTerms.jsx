import { Link } from "react-router-dom";

export default function TermsAndConditions() {
  return (
    <div className="bg-white min-h-screen px-6 md:px-16 py-10 text-gray-800">
      {/* Back link */}
      <Link to="/" className="text-blue-600 text-sm hover:underline">
        ← Back
      </Link>

      {/* Header */}
      <div className="mt-4 mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Terms & Conditions</h1>
        <p className="text-sm text-gray-500">Last Updated: November 2025</p>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Left text section */}
        <div className="space-y-6 text-sm md:text-base">
          <p>
            These Terms and Conditions govern your use of our website and services.
            By accessing or using any part of our platform, you agree to be bound
            by these terms. If you disagree with any part of the terms, please do
            not use our services.
          </p>

          <div>
            <h2 className="font-semibold text-lg mb-2">Use of Service</h2>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>You must be at least 13 years old to use our services.</li>
              <li>You agree not to misuse or exploit the services.</li>
              <li>
                Unauthorized use or copying of content is prohibited without prior
                written consent.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold text-lg mb-2">User Responsibilities</h2>
            <p>
              You are responsible for safeguarding your account information and any
              activities that occur under your account. Notify us immediately of
              unauthorized use.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-lg mb-2">Termination</h2>
            <p>
              We may terminate or suspend access to our service immediately, without
              prior notice or liability, for any reason whatsoever, including without
              limitation if you breach the Terms.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-lg mb-2">Changes to Terms</h2>
            <p>
              We reserve the right to modify or replace these Terms at any time. It
              is your responsibility to review this page periodically for changes.
            </p>
          </div>
        </div>

        {/* Right image section */}
        <div className="flex justify-center">
  <img
    src="https://img.freepik.com/premium-vector/remote-working-setup-vector-illustration-balanced-work-life-environment-with-flextime-emphasizing-flexibility-productivity-from-home_2175-32159.jpg?ga=GA1.1.1362237040.1750501614&semt=ais_hybrid&w=740"
    alt="Terms Illustration"
    className="w-full max-w-md md:max-w-lg lg:max-w-xl object-contain"
  />
</div>

      </div>
    </div>
  );
}
