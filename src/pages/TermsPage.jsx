

const TermsPage = () => {
  return (
    <div className="bg-gradient-to-br from-yellow-200 to-orange-300 min-h-screen p-6 font-sans">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8 fade-in hover:shadow-xl transition duration-300">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-2">TERMS OF SERVICE</h1>
        <p className="text-center text-sm text-gray-600 mb-6">Updated May 25, 2018</p>

        <p className="text-gray-700 leading-relaxed mb-4">
          This Terms of Service (the Terms) describes the rights and responsibilities that apply to your use of our website, services, and application (collectively, the Service), each owned and operated by Glowlogics Pvt. Ltd. (Glowlogics, we, our, or us).
        </p>

        <p className="text-gray-700 leading-relaxed mb-4">
          By accessing or using our Service, you agree to be bound by these Terms and our Privacy Policy. Please read them carefully before using the Service. If you do not agree to the Terms, you may not use the Service.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-2">1. Your Account</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          You are responsible for maintaining the security of your account and are fully responsible for all activities that occur under your account. You agree to provide accurate and complete information and to keep this information up to date.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-2">2. Privacy</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Your privacy is important to us. Please read our <a href="#" className="text-blue-600 underline">Privacy Policy</a> to understand how we collect, use, and share information about you.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-2">3. Use of the Service</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          You agree to use the Service only for lawful purposes and in a way that does not infringe on the rights of, restrict or inhibit anyone else use and enjoyment of the Service.
        </p>

        <footer className="mt-10 text-center text-sm text-gray-500">
          &copy; 2025 Glowlogics Pvt. Ltd. All rights reserved.
        </footer>
      </div>
    </div>
  );
};

export default TermsPage;

// Additional styles for animations
const styles = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .fade-in {
    animation: fadeIn 1s ease-in-out;
  }
`;

if (typeof document !== 'undefined') {
  const styleTag = document.createElement('style');
  styleTag.innerHTML = styles;
  document.head.appendChild(styleTag);
}
