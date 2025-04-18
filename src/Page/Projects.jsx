import React, { useEffect } from "react";
import { Link } from "react-router-dom";

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
];

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full min-h-screen bg-black py-10 text-white">
      <div className="w-11/12 mx-auto">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-purple-400">Explore Our Projects</h2>
          <p className="text-purple-200 mt-2">
            High-quality academic and professional projects for students & professionals.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#1E1B2E] border border-purple-900 shadow-lg rounded-xl overflow-hidden transition hover:shadow-purple-700/40"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover "
              />
              <div className="p-5 h-34">
                <h3 className="text-xl font-semibold text-purple-300">{project.title}</h3>
                <p className="text-purple-400 text-sm">{project.category}</p>
                <p className="text-gray-300 mt-2">{project.description}</p>
              </div>
                <div className="flex justify-between p-4 items-center">
                  <span className="text-lg font-bold text-purple-500">{project.price}</span>
                  <Link to="/ProjectSelling">
                    <button className="bg-purple-600 text-white px-4 py-2 cursor-pointer rounded-md hover:bg-purple-700 transition">
                      View Details
                    </button>
                  </Link>
                </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
