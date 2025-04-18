import React from 'react';
import { GoProject } from "react-icons/go";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import im11 from '../../assets/image/dev.jpg';
import im12 from '../../assets/image/doc.jpg';
import im131 from '../../assets/image/pre.jpg';
import { Link } from 'react-router-dom';

const CollageProject = () => {
  return (
    <div className="my-16 px-5 sm:px-10 w-full bg-gradient-to-b from-black via-purple-950 to-purple-800 text-white py-10 rounded-lg">
      <div className="flex flex-col items-center gap-y-6">

        {/* Icon Badge */}
        <div className="w-20 h-20 bg-yellow-400 rotate-45 flex items-center justify-center shadow-lg">
          <GoProject size={55} className="-rotate-45 text-black" />
        </div>

        {/* Heading */}
        <h1 className="text-yellow-400 tracking-wide text-3xl sm:text-4xl font-bold text-center">
          College Level Project with All Documents
        </h1>

        {/* Description */}
        <p className="max-w-5xl text-center text-purple-100">
          A college-level project typically includes a detailed report, presentation, and supporting documents. It involves problem identification, research, methodology, implementation, and results analysis. Essential documents include a project proposal, SRS (Software Requirement Specification), design documents, test cases, and a final report. The project should demonstrate technical skills, problem-solving abilities, and innovation. Proper documentation ensures clarity, future scalability, and effective presentation.
        </p>

        {/* Offer Text */}
        <p className="flex items-center justify-center gap-x-2 text-purple-200 font-medium">
          One Project buy + <span className="text-purple-400 font-semibold">one mini project Free</span>
          <RiVerifiedBadgeFill className="text-purple-400" />
        </p>

        {/* CTA Button */}
        <div>
          <Link to="/ProjectCategories">
            <button type="button" className="px-6 py-2 bg-purple-600 hover:bg-purple-700 transition rounded-lg text-white shadow-md mt-4">
              Buy Now
            </button>
          </Link>
        </div>

        {/* Image Grid */}
        <div className="w-full mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 sm:px-10">
            <img src={im11} alt="Project 1" className="w-full rounded-xl shadow-purple-600 shadow-lg border border-purple-800" />
            <img src={im12} alt="Project 2" className="w-full rounded-xl shadow-purple-600 shadow-lg border border-purple-800" />
            <img src={im131} alt="Project 3" className="w-full rounded-xl shadow-purple-600 shadow-lg border border-purple-800" />
          </div>
        </div>

      </div>
    </div>
  );
};

export default CollageProject;

