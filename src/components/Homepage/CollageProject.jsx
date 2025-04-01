import React from 'react'
import { GoProject } from "react-icons/go";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import im11 from '../../assets/image/dev.jpg'
import im12 from '../../assets/image/doc.jpg'
import im131 from '../../assets/image/pre.jpg'
import { Link } from 'react-router-dom';

const CollageProject = () => {
  return (
    <div className='my-10 px-5 sm:px-10'>
      <div className='flex flex-col items-center gap-y-5'>
        <div className='w-20 h-20 bg-yellow-500 rotate-45 flex items-center justify-center'>
          <GoProject size={55} />
        </div>
        <h1 className='text-yellow-400 tracking-wide text-4xl font-semibold text-center'>
          College level Project with all Documents
        </h1>
        <p className='max-w-5xl text-center'>
          A college-level project typically includes a detailed report, presentation, and supporting documents. It involves problem identification, research, methodology, implementation, and results analysis. Essential documents include a project proposal, SRS (Software Requirement Specification), design documents, test cases, and a final report. The project should demonstrate technical skills, problem-solving abilities, and innovation. Proper documentation ensures clarity, future scalability, and effective presentation.
        </p>
        <p className='flex items-center justify-center gap-x-2'>
          One Project buy + <span className='text-purple-300'>one mini project Free</span>
          <RiVerifiedBadgeFill className='text-purple-300' />
        </p>
        <div>
          <button type="button" className="px-6 py-2 bg-purple-600 text-white rounded-lg mt-4">
            <Link to="/ProjectCategories">Buy Now</Link>
          </button>
        </div>
        
        {/* Image Section */}
        <div className='w-full mt-8'>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-10'>
            <img src={im11} alt="Project Image 1" className='w-full rounded-xl shadow-lg' />
            <img src={im12} alt="Project Image 2" className='w-full rounded-xl shadow-lg' />
            <img src={im131} alt="Project Image 3" className='w-full rounded-xl shadow-lg' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CollageProject;
