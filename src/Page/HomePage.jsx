// import React from 'react'
// import { SiVite } from "react-icons/si";
// import { FaReact } from "react-icons/fa";
// import { RiTailwindCssFill } from "react-icons/ri";
// import { MdDashboardCustomize } from "react-icons/md";
// import { FaPlugCircleXmark } from "react-icons/fa6";
// import Custom from '../components/Homepage/Custom';
// import CollageProject from '../components/Homepage/CollageProject';
// import Buttonsection from '../components/Homepage/Buttonsection';
// import Carthome from '../components/Homepage/Carthome';
// import Backendsite from '../components/Homepage/Backendsite';
// import CodeCard from '../components/Homepage/CodeCard';

// const HomePage = () => {
//   return (
//     <div className='w-full bg-gradient-to-t to-purple-600 from-black text-white'>
//         <div className='flex flex-col items-center text-center'>
//             <div className=' mx-auto flex flex-col items-center gap-y-5 my-10'>
//                 <p className=' text-lg tracking-wide underline underline-offset-2 text-purple-200'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
//                 <h1 className=' text-5xl max-w-3xl leading-16'>Bulid Fast , Responsive & Custmaize codewith [siteName]</h1>
//                 <h3 className='text-lg max-w-5xl tracking-wide'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad cumque sunt totam vel repellendus quas quos debitis, mollitia officia aperiam fugiat minima, magni explicabo. Voluptates optio animi molestiae!</h3>
//                 <div className='flex items-center gap-x-10 '>
//                      <button type="button" className='py-2 flex items-center gap-x-3 px-3 border rounded-md bg-purple-500 text-white uppercase tracking-wide'> <MdDashboardCustomize size={30}/>Use our Components</button>
//                      <div className='flex gap-x-5'>
//                          <span><FaReact size={30}/>
//                          </span>
//                          <span>
//                          <RiTailwindCssFill size={30}/>
//                         </span>
//                         <span><SiVite size={30}/></span>
//                      </div>
//                 </div>
//             </div>
//             <div className='my-10'>
//                 <div className='flex flex-col items-center gap-y-3'>
//                      <div className=' px-5 py-5 flex w-fit items-center  bg-yellow-400/60 rounded-3xl border-white'><FaPlugCircleXmark size={55}/></div>
//                      <span className=' text-2xl tracking-wide text-yellow-50'>Without Plugin use components code</span>
//                      <p className=' max-w-3xl '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque facilis officiis obcaecati reiciendis alias quis et quisquam placeat illo perferendis voluptate dolor, repellendus veniam possimus debitis dolorem quae voluptates! Quae, maxime molestiae?</p>
//                 </div>
//             </div>
//             <CodeCard/>
//             {/* <Custom/> */}
//             <CollageProject/>
//             <Buttonsection/>
//             <Carthome/>
//             <Backendsite/>  
//         </div>
//     </div>
//   )
// }

// export default HomePage


import React from 'react';
import { SiVite } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { MdDashboardCustomize } from "react-icons/md";
import { FaPlugCircleXmark } from "react-icons/fa6";
import Custom from '../components/Homepage/Custom';
import CollageProject from '../components/Homepage/CollageProject';
import Buttonsection from '../components/Homepage/Buttonsection';
import Carthome from '../components/Homepage/Carthome';
import Backendsite from '../components/Homepage/Backendsite';
import CodeCard from '../components/Homepage/CodeCard';

const HomePage = () => {
  return (
    <div className='w-full bg-gradient-to-t to-purple-600 from-black text-white'>
        <div className='flex flex-col items-center text-center'>
            <div className='mx-auto flex flex-col items-center gap-y-5 my-22 px-5'>
                
                <h1 className='text-4xl sm:text-5xl max-w-3xl leading-16'>
                    Build Fast, Responsive & Customize code with [siteName]
                </h1>
                <h3 className='text-lg sm:text-xl max-w-5xl tracking-wide'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad cumque sunt totam vel repellendus quas quos debitis, mollitia officia aperiam fugiat minima, magni explicabo.
                </h3>
                <div className='flex flex-col sm:flex-row items-center gap-x-10 mt-6'>
                     <button type="button" className='py-2 flex items-center gap-x-3 px-6 border rounded-md bg-purple-500 text-white uppercase tracking-wide'>
                         <MdDashboardCustomize size={30}/> <a href="/cart">Use our Components</a>
                     </button>
                     <div className='flex gap-x-5 mt-5 sm:mt-0'>
                         <span><FaReact size={30}/></span>
                         <span><RiTailwindCssFill size={30}/></span>
                         <span><SiVite size={30}/></span>
                     </div>
                </div>
            </div>

            <div className='my-10'>
                <div className='flex flex-col items-center gap-y-3'>
                     <div className='px-5 py-5 flex w-fit items-center bg-yellow-400/60 rounded-3xl border-white'>
                         <FaPlugCircleXmark size={55}/>
                     </div>
                     <span className='text-2xl tracking-wide text-yellow-50'>
                         Without Plugin use components code
                     </span>
                     <p className='max-w-3xl'>
                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque facilis officiis obcaecati reiciendis alias quis et quisquam placeat illo perferendis voluptate dolor.
                     </p>
                </div>
            </div>
            {/* <CodeCard /> */}
            <CollageProject />
            <Buttonsection />
            <Carthome />
            <Backendsite />  
        </div>
    </div>
  );
};

export default HomePage;
