import React, {useEffect} from 'react';

const AboutUs = () => {

  useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

  return (
    <div className="min-h-screen bg-black text-white px-6 py-10">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-purple-500 mb-6">About Us</h1>
        <p className="text-lg text-gray-300 mb-8">
          Welcome to <span className="text-purple-400 font-semibold">UI Galaxy</span> – your ultimate destination for creative and customizable UI components made with <span className="text-purple-400">React JS</span> and <span className="text-purple-400">Tailwind CSS</span>. Whether you're a student building projects or a developer designing stylish interfaces, we’ve got you covered!
        </p>

        <div className="grid md:grid-cols-2 gap-6 text-left">
          <div className="bg-purple-900/20 border border-purple-800 p-6 rounded-2xl shadow-md">
            <h2 className="text-xl font-semibold text-purple-400 mb-2">🎨 UI Components & Templates</h2>
            <p className="text-gray-300">
              Access a growing library of beautiful buttons, form designs, navigation bars, modals, and complete pages. All are built with React and Tailwind CSS in a stunning purple-black theme.
            </p>
          </div>
          

          <div className="bg-purple-900/20 border border-purple-800 p-6 rounded-2xl shadow-md">
            <h2 className="text-xl font-semibold text-purple-400 mb-2">📚 Projects for College Students</h2>
            <p className="text-gray-300">
              Get inspired by real-world project ideas specially curated for students. Each project comes with clean UI and fully responsive code you can learn from or build upon.
            </p>
          </div>

          <div className="bg-purple-900/20 border border-purple-800 p-6 rounded-2xl shadow-md">
            <h2 className="text-xl font-semibold text-purple-400 mb-2">⚡ Easy Integration</h2>
            <p className="text-gray-300">
              Our reusable components are copy-paste ready. Just plug them into your React + Tailwind projects and customize as needed — perfect for fast prototyping or production-ready apps.
            </p>
          </div>

          <div className="bg-purple-900/20 border border-purple-800 p-6 rounded-2xl shadow-md">
            <h2 className="text-xl font-semibold text-purple-400 mb-2">🚀 Continuous Updates</h2>
            <p className="text-gray-300">
              We are constantly adding new UI kits, templates, and components so that you always have fresh design resources at your fingertips.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <p className="text-lg text-gray-400">
            Built by creators, for creators. We believe that design and code should be fun, accessible, and powerful.
          </p>
          <p className="text-purple-400 font-semibold mt-4">Let’s build something awesome together!</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
