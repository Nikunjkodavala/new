import React from "react";
// import { FaShoppingCart } from "react-icons/fa";
// import { IoIosArrowForward } from "react-icons/io";

// Sample Projects Data
const projects = [
  {
    id: 1,
    title: "AI-Based Chatbot",
    category: "Machine Learning",
    price: "$49.99",
    description: "An advanced AI-powered chatbot for customer support.",
    image: "https://source.unsplash.com/400x300/?technology,ai",
  },
  {
    id: 2,
    title: "E-commerce Website",
    category: "Web Development",
    price: "$39.99",
    description: "A complete e-commerce solution with payment integration.",
    image: "https://source.unsplash.com/400x300/?website,ecommerce",
  },
  {
    id: 3,
    title: "Stock Prediction System",
    category: "Data Science",
    price: "$59.99",
    description: "A machine learning model predicting stock market trends.",
    image: "https://source.unsplash.com/400x300/?stocks,finance",
  },
  {
    id: 1,
    title: "AI-Based Chatbot",
    category: "Machine Learning",
    price: "$49.99",
    description: "An advanced AI-powered chatbot for customer support.",
    image: "https://source.unsplash.com/400x300/?technology,ai",
  },
  {
    id: 2,
    title: "E-commerce Website",
    category: "Web Development",
    price: "$39.99",
    description: "A complete e-commerce solution with payment integration.",
    image: "https://source.unsplash.com/400x300/?website,ecommerce",
  },
  {
    id: 3,
    title: "Stock Prediction System",
    category: "Data Science",
    price: "$59.99",
    description: "A machine learning model predicting stock market trends.",
    image: "https://source.unsplash.com/400x300/?stocks,finance",
  },
  {
    id: 1,
    title: "AI-Based Chatbot",
    category: "Machine Learning",
    price: "$49.99",
    description: "An advanced AI-powered chatbot for customer support.",
    image: "https://source.unsplash.com/400x300/?technology,ai",
  },
  {
    id: 2,
    title: "E-commerce Website",
    category: "Web Development",
    price: "$39.99",
    description: "A complete e-commerce solution with payment integration.",
    image: "https://source.unsplash.com/400x300/?website,ecommerce",
  },
  {
    id: 3,
    title: "Stock Prediction System",
    category: "Data Science",
    price: "$59.99",
    description: "A machine learning model predicting stock market trends.",
    image: "https://source.unsplash.com/400x300/?stocks,finance",
  },
  {
    id: 1,
    title: "AI-Based Chatbot",
    category: "Machine Learning",
    price: "$49.99",
    description: "An advanced AI-powered chatbot for customer support.",
    image: "https://source.unsplash.com/400x300/?technology,ai",
  },
  {
    id: 2,
    title: "E-commerce Website",
    category: "Web Development",
    price: "$39.99",
    description: "A complete e-commerce solution with payment integration.",
    image: "https://source.unsplash.com/400x300/?website,ecommerce",
  },
  {
    id: 3,
    title: "Stock Prediction System",
    category: "Data Science",
    price: "$59.99",
    description: "A machine learning model predicting stock market trends.",
    image: "https://source.unsplash.com/400x300/?stocks,finance",
  },
  {
    id: 1,
    title: "AI-Based Chatbot",
    category: "Machine Learning",
    price: "$49.99",
    description: "An advanced AI-powered chatbot for customer support.",
    image: "https://source.unsplash.com/400x300/?technology,ai",
  },
  {
    id: 2,
    title: "E-commerce Website",
    category: "Web Development",
    price: "$39.99",
    description: "A complete e-commerce solution with payment integration.",
    image: "https://source.unsplash.com/400x300/?website,ecommerce",
  },
  {
    id: 3,
    title: "Stock Prediction System",
    category: "Data Science",
    price: "$59.99",
    description: "A machine learning model predicting stock market trends.",
    image: "https://source.unsplash.com/400x300/?stocks,finance",
  },
  {
    id: 1,
    title: "AI-Based Chatbot",
    category: "Machine Learning",
    price: "$49.99",
    description: "An advanced AI-powered chatbot for customer support.",
    image: "https://source.unsplash.com/400x300/?technology,ai",
  },
  {
    id: 2,
    title: "E-commerce Website",
    category: "Web Development",
    price: "$39.99",
    description: "A complete e-commerce solution with payment integration.",
    image: "https://source.unsplash.com/400x300/?website,ecommerce",
  },
  {
    id: 3,
    title: "Stock Prediction System",
    category: "Data Science",
    price: "$59.99",
    description: "A machine learning model predicting stock market trends.",
    image: "https://source.unsplash.com/400x300/?stocks,finance",
  },
];

const Projects = () => {
  return (
    <div className="w-full min-h-screen bg-gray-100 py-10">
      <div className="w-11/12 mx-auto">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800">Explore Our Projects</h2>
          <p className="text-gray-600 mt-2">High-quality academic and professional projects for students & professionals.</p>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white shadow-md rounded-lg overflow-hidden">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
                <p className="text-gray-600 text-sm">{project.category}</p>
                <p className="text-gray-700 mt-2">{project.description}</p>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-lg font-bold text-purple-700">{project.price}</span>
                  <button className="bg-purple-700 text-white px-4 py-2 flex items-center gap-2 rounded-md hover:bg-purple-800 transition">
                    Buy Now 
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Browse More Button */}
        <div className="text-center mt-10">
          <button className="bg-gray-800 text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-gray-900 transition">
            Browse More Projects 
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
