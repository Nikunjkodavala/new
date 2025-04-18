import React, {useEffect} from 'react';

const ContactUs = () => {

  useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

  return (
    <div className="min-h-screen bg-black text-white px-6 py-12">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        {/* Left Section - Text and Info */}
        <div>
          <h1 className="text-4xl font-bold text-purple-500 mb-4">Contact Us</h1>
          <p className="text-gray-300 mb-6">
            Got a question, suggestion, or need help with UI components or projects? We’d love to hear from you!
          </p>

          <div className="space-y-4 text-gray-400">
            <p><span className="text-purple-400 font-semibold">📧 Email:</span> support@uigalaxy.dev</p>
            <p><span className="text-purple-400 font-semibold">📍 Location:</span> Online Everywhere 🌐</p>
            <p><span className="text-purple-400 font-semibold">⏱️ Support Hours:</span> Mon - Fri, 9AM - 6PM</p>
          </div>
        </div>

        {/* Right Section - Form */}
        <form className="bg-purple-900/20 border border-purple-800 p-8 rounded-2xl shadow-lg space-y-6">
          <div>
            <label className="block text-sm font-medium text-purple-300 mb-1">Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 bg-black border border-purple-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-purple-300 mb-1">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 bg-black border border-purple-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-purple-300 mb-1">Message</label>
            <textarea
              rows="4"
              className="w-full px-4 py-2 bg-black border border-purple-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Write your message..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-purple-600 hover:bg-purple-700 transition-colors duration-200 text-white font-semibold rounded-lg shadow-md"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
