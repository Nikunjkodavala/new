import React, { useState } from 'react';
import sideImage from '../../assets/image/coding.jpg';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierCaveDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import ss from '../../assets/image/backs.png';

import { Terminal, Package, Smartphone, Layout, Globe, Code2, Server, ChevronDown, ChevronUp } from 'lucide-react';

const back = `const express = require("express")
const app = express();

app.use(express.json());

app.get("/",(req,res)=> {
    res.send("WELCOME TO OUR CODE.");
})

app.listen(4000,function(){
    console.log('SERVER IS STARTING ON PORT 4000.')
})`;

function GuideStep({
    number,
    title,
    description,
    detailedSteps,
    image,
    icon: Icon
}) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-black rounded-lg shadow-lg overflow-hidden">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-6 hover:bg-purple-800 transition-all duration-300"
            >
                <div className="flex gap-4 items-center">
                    <div className="flex-shrink-0">
                        <div className={`w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center transform transition-all duration-300 ${isOpen ? 'scale-110 bg-purple-700' : ''}`}>
                            <Icon className={`w-6 h-6 text-white transition-all duration-300 ${isOpen ? 'scale-110' : ''}`} />
                        </div>
                    </div>
                    <div className="text-left">
                        <h3 className={`text-xl font-semibold transition-colors duration-300 ${isOpen ? 'text-purple-400' : 'text-white'}`}>
                            {number}. {title}
                        </h3>
                        <p className="text-gray-400 mt-1">{description}</p>
                    </div>
                </div>
                <div className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                    {isOpen ? (
                        <ChevronUp className="w-6 h-6 text-purple-400" />
                    ) : (
                        <ChevronDown className="w-6 h-6 text-gray-400" />
                    )}
                </div>
            </button>

            <div
                className={`transition-all duration-500 ease-in-out ${isOpen
                        ? 'max-h-[1000px] opacity-100'
                        : 'max-h-0 opacity-0'
                    } overflow-hidden`}
            >
                <div className="px-6 pb-6 transform transition-all duration-500">
                    <div className="rounded-lg overflow-hidden mb-4 transform transition-all duration-500 translate-y-0">
                        <img
                            src={image}
                            alt={title}
                            className={`w-full h-[300px] object-cover transition-all duration-500 ${isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
                                }`}
                        />
                    </div>
                    <ul className="space-y-3">
                        {detailedSteps.map((step, index) => (
                            <li
                                key={index}
                                className={`flex items-start gap-2 transform transition-all duration-500 ${isOpen
                                        ? 'translate-x-0 opacity-100'
                                        : 'translate-x-4 opacity-0'
                                    }`}
                                style={{
                                    transitionDelay: `${index * 100}ms`
                                }}
                            >
                                <div className="w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center flex-shrink-0 mt-1">
                                    <span className="text-sm font-medium text-white">{index + 1}</span>
                                </div>
                                <p className="text-gray-300">{step}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

const Backendsite = () => {
    const steps = [
        {
            icon: Terminal,
            title: "Initialize Your Project",
            description: "Set up your Node.js development environment",
            image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&q=80&w=1200",
            detailedSteps: [
                "Create a new directory for your project using 'mkdir your-project-name'",
                "Navigate into the project directory using 'cd your-project-name'",
                "Initialize a new Node.js project with 'npm init -y'",
                "Open your favorite code editor to start development"
            ]
        },
        {
            icon: Package,
            title: "Install Dependencies",
            description: "Set up essential packages for your web application",
            image: "https://images.unsplash.com/photo-1623479322729-28b25c16b011?auto=format&fit=crop&q=80&w=1200",
            detailedSteps: [
                "Install Express.js framework: 'npm install express'",
                "Add development dependencies: 'npm install nodemon --save-dev'",
                "Install middleware packages like cors and body-parser",
                "Set up environment variables with dotenv package"
            ]
        },
        {
            icon: Code2,
            title: "Create Server Configuration",
            description: "Set up your Express server and configure routes",
            image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1200",
            detailedSteps: [
                "Create an index.js file as your entry point",
                "Import and configure Express and middleware",
                "Set up your API routes and controllers",
                "Implement error handling middleware"
            ]
        },
        {
            icon: Layout,
            title: "Design Responsive UI",
            description: "Create a mobile-first responsive interface",
            image: "https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?auto=format&fit=crop&q=80&w=1200",
            detailedSteps: [
                "Set up your frontend framework (React, Vue, etc.)",
                "Implement mobile-first CSS using media queries",
                "Create reusable components for consistent design",
                "Test layouts across different breakpoints"
            ]
        },
        {
            icon: Smartphone,
            title: "Test Across Devices",
            description: "Ensure compatibility across all platforms",
            image: "https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&q=80&w=1200",
            detailedSteps: [
                "Use browser developer tools to test different screen sizes",
                "Test on real mobile devices when possible",
                "Verify touch interactions work correctly",
                "Check performance on slower connections"
            ]
        },
        {
            icon: Server,
            title: "Deploy Application",
            description: "Launch your application to production",
            image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1200",
            detailedSteps: [
                "Choose a hosting provider (Heroku, DigitalOcean, etc.)",
                "Set up environment variables in production",
                "Configure your domain and SSL certificate",
                "Set up monitoring and logging"
            ]
        }
    ];

    return (
        <div className="bg-black text-white w-full">
            <div className="flex flex-col lg:flex-row justify-around items-center gap-10 px-5 py-10">
                {/* Left Section */}
                <div className="lg:w-[50%] flex flex-col gap-y-5 text-center lg:text-left">
                    <h1 className="text-3xl tracking-wide font-bold text-purple-400">Easy To Use Backendsite Code & Zero Logical Error</h1>
                    <p className="max-w-3xl mx-auto text-gray-300">
                        An easy-to-use backend site should have a clean architecture, proper error handling, and optimized database queries to ensure zero logical errors. It should be built using reliable frameworks like Node.js (Express), Django, or Laravel, with authentication, API documentation, and automated testing for smooth performance.
                    </p>
                    <button className="p-3 px-5 bg-purple-500 text-black rounded-lg hover:bg-purple-600">We will help</button>
                </div>
                {/* Right Section */}
                <div className="w-full lg:w-[50%] flex justify-center">
                    <img src={sideImage} alt="Coding" className="w-full max-w-sm rounded-lg" />
                </div>
            </div>

            {/* Guide Steps Section */}
            <div className="bg-purple-800">
                <div className="text-start w-full px-4 py-12 space-y-10 mx-auto max-w-screen-lg">
                    <h1 className="text-3xl text-yellow-200">1) Basic Program Front of You in Node.js</h1>
                    <SyntaxHighlighter style={atelierCaveDark} wrapLongLines customStyle={{ borderRadius: "5px", padding: "20px" }}>
                        {back}
                    </SyntaxHighlighter>
                    <img src={ss} alt="Backend Image" className="w-full rounded-lg" />
                </div>
            </div>

            {/* Steps List Section */}
            <div className="bg-gradient-to-br from-black via-purple-950 to-purple-900 py-12">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-purple-400 mb-4">
                        Building Node.js Web Applications
                    </h1>
                    <p className="text-xl text-gray-300">
                        A comprehensive guide to creating responsive and scalable web applications with Node.js. Click each step to learn more.
                    </p>
                </div>

                <div className="space-y-4">
                    {steps.map((step, index) => (
                        <GuideStep
                            key={index}
                            number={index + 1}
                            title={step.title}
                            description={step.description}
                            detailedSteps={step.detailedSteps}
                            image={step.image}
                            icon={step.icon}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Backendsite;
