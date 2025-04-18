import React, {useEffect} from 'react';
import {
  Cpu,
  Database,
  Globe2,
  CheckCircle2,
  ArrowRight,
  Hotel,
  Utensils,
  Calendar,
  Shield,
  Code2,
  ShoppingCart,
} from 'lucide-react';
import { TbCurrencyRupee } from "react-icons/tb";



function ProjectSelling() {

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on component mount
  }, []);
  
  return (
    <div className="min-h-screen bg-black text-white ">
      {/* Hero Section */}
      <header className="bg-black/50 border-b border-purple-900/30 ">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 ">
          <h1 className="text-4xl font-bold text-purple-400 mt-6">StayEase - Hotel Management System</h1>
        </div>
      </header>

      {/* Main Content */}
      <main>
        {/* Project Overview */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-purple-300 mb-6">
                Academic Project: Hotel Management System
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                A comprehensive React.js-based hotel management system perfect for academic portfolios.
                This project demonstrates modern web development practices, database integration,
                and real-world business logic implementation.
              </p>
              <div className="space-y-4">
                <Feature icon={<Hotel className="w-5 h-5 text-purple-400" />} text="Room Booking & Management" />
                <Feature icon={<Utensils className="w-5 h-5 text-purple-400" />} text="Restaurant Order System" />
                <Feature icon={<Calendar className="w-5 h-5 text-purple-400" />} text="Check-in/Check-out System" />
                <Feature icon={<Shield className="w-5 h-5 text-purple-400" />} text="User Authentication" />
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-2xl shadow-purple-500/20">
              <img
                src="https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg"
                alt="Hotel Management System"
                className="w-full h-auto"
              />
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="bg-black/50 border-y border-purple-900/30 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-purple-300 mb-12">Technologies Used</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <TechCard icon={<Code2 className="w-8 h-8" />} title="React.js" description="Frontend with hooks and components" />
              <TechCard icon={<Database className="w-8 h-8" />} title="Local Storage" description="Data persistence implementation" />
              <TechCard icon={<Globe2 className="w-8 h-8" />} title="REST APIs" description="Backend communication practice" />
              <TechCard icon={<Cpu className="w-8 h-8" />} title="State Management" description="Using React Context API" />
            </div>
          </div>
        </section>

        {/* Project Features & Pricing */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-black/50 border border-purple-900/30 rounded-2xl shadow-xl shadow-purple-500/10 overflow-hidden">
            <div className="p-8 sm:p-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-purple-300">Project Highlights</h2>
                <p className="mt-4 text-xl text-gray-300">Perfect for Academic Portfolio</p>
              </div>
              <ul className="space-y-4 mb-8">
                <PricingFeature text="Complete source code with documentation" />
                <PricingFeature text="Modern React.js implementation" />
                <PricingFeature text="Responsive design with Tailwind CSS" />
                <PricingFeature text="Basic authentication system" />
                <PricingFeature text="Database schema and API examples" />
              </ul>

              {/* Pricing and Buy Button */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="text-3xl font-bold text-purple-300">$29</h3>
                  <p className="text-gray-400 text-sm">One-time purchase</p>
                </div>
                <button className="bg-purple-600 hover:bg-purple-700 transition-colors px-6 py-4 rounded-lg font-semibold text-lg flex items-center gap-2 shadow-lg shadow-purple-500/20">
                <TbCurrencyRupee  className="w-5 h-5" />
                  Pay Now
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      
    </div>
  );
}

// Reusable Feature Component
function Feature({ icon, text }) {
  return (
    <div className="flex items-center gap-3">
      {icon}
      <span className="text-gray-300">{text}</span>
    </div>
  );
}

// Reusable Technology Card
function TechCard({ icon, title, description }) {
  return (
    <div className="bg-black/50 border border-purple-900/30 p-6 rounded-lg text-center hover:bg-purple-900/10 transition-colors">
      <div className="flex justify-center mb-4 text-purple-400">{icon}</div>
      <h3 className="text-xl font-semibold text-purple-300 mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}

// Reusable Feature with Check Icon
function PricingFeature({ text }) {
  return (
    <li className="flex items-center gap-3">
      <CheckCircle2 className="w-5 h-5 text-purple-400" />
      <span className="text-gray-300">{text}</span>
    </li>
  );
}

export default ProjectSelling;
