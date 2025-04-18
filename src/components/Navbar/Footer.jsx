// import React from 'react'
// import { Link } from 'react-router-dom'

// const footer = [
//   {
//     title: "Home",
//     navigate: "/"
//   },
//   {
//     title: "Navbar components",
//     navigate: "/"
//   },
//   {
//     title: "Button Components",
//     navigate: "/"
//   },
//   {
//     title: "Collage level Project",
//     navigate: "/ProjectCategories"
//   },
//   {
//     title: "Different type of Form",
//     navigate: "/"
//   },
//   {
//     title: "Carts components",
//     navigate: "/"
//   },
//   {
//     title: "About us",
//     navigate: "/"
//   },
//   {
//     title: "Contact Us",
//     navigate: "/"
//   }
// ]

// const projects = [
//      {
//         title:"E-commarance",
//         navigate:"/"
//      },
//      {
//         title:"Eduction",
//         navigate:"/"
//      },
//      {
//         title:"Food Delived",
//         navigate:"/"
//      },
//      {
//         title:"Health care",
//         navigate:"/"
//      }
     
// ]

// const Footer = () => {
//   return (
//     <div className=' bg-gray-800 text-white py-10'>
//         <div className='grid grid-cols-5 gap-x-2 w-11/12 mx-auto'>
//             <div className='flex items-start gap-y-5 flex-col justify-center'>
//                   <span>LOGO</span>
//                   <p className=' text-xs max-w-lg'>We specialize in crafting custom buttons, navbars, and footers tailored to your design and functionality needs. Our solutions ensure seamless integration, responsiveness, and modern aesthetics.</p>
//                   {/* <p>Enhance your website's user experience with our high-quality, customizable UI components. Let’s work together to build a sleek and efficient interface!</p> */}
//             </div>
//             <div>
//                 <h1 className=' text-purple-500 text-xl underline tracking-wide underline-offset-4'>Our Services</h1>
//                  {
//                     footer.map((items,index)=>(
//                       <ul className='flex flex-col mt-2 text-yellow-50'>
//                            <Link to={items.navigate}><li className=' hover:opacity-80 cursor-pointer'>{items.title}</li></Link>
//                       </ul>
//                     ))
//                  }
//             </div>
//             <div>
//                 <h1 className=' text-purple-500 text-xl underline tracking-wide underline-offset-4'>Projects</h1>
//                  {
//                     projects.map((items,index)=>(
//                       <ul className='flex flex-col mt-2 text-yellow-50'>
//                            <li className=' hover:opacity-80 cursor-pointer'>{items.title}</li>
//                       </ul>
//                     ))
//                  }
//             </div>
//             <div>
//                 <h1 className=' text-purple-500 text-xl underline tracking-wide underline-offset-4'>Team & Condition</h1>
//                 <ul className='flex flex-col gap-y-2 mt-2 text-yellow-50'>
//                   <li className=' hover:opacity-80 cursor-pointer'>Privacy</li>
//                   <li className=' hover:opacity-80 cursor-pointer'>Policy</li>
                  
//                 </ul>
//             </div>
//             <div className='flex flex-col'>
              
//                 <h1 className=' text-purple-500 text-xl underline tracking-wide underline-offset-4'>Contact Our Team</h1>
//                 <div className='mt-2'>
//                      <span></span>
//                      <span>ankurgohani218@gmail.com</span>
//                 </div>
//                 <div className='mt-10'>
//                    <input type="email" placeholder='Enter Your Email' className='py-3 px-5 rounded-l-md outline-none border border-gray-500  ' />
//                    <button type="button" className='border py-3 px-5 border-gray-500 rounded-r-md bg-black'>Subscribe</button>
//                </div>
//             </div>
//         </div>
//         <hr className='w-11/12 mx-auto my-5'/>
//         <div className='mx-auto flex items-center  text-center justify-center'>
//               <p>Copyright © OurCompanyName all rights reserved.</p>
//         </div>
//     </div>
//   )
// }

// export default Footer
import React from 'react';
import { Link } from 'react-router-dom';

const footer = [
  { title: 'Home', navigate: '/' },
  { title: 'Navbar Components', navigate: '/' },
  { title: 'Button Components', navigate: '/' },
  { title: 'College Level Projects', navigate: '/ProjectCategories' },
  { title: 'Different Types of Forms', navigate: '/' },
  { title: 'Cart Components', navigate: '/' },
  { title: 'About Us', navigate: '/' },
  { title: 'Contact Us', navigate: '/' },
];

const projects = [
  { title: 'E-commerce', navigate: '/' },
  { title: 'Education', navigate: '/' },
  { title: 'Food Delivery', navigate: '/' },
  { title: 'Healthcare', navigate: '/' },
];

const Footer = () => {
  return (
    <div className='bg-black text-purple-100 py-10 px-5 border-t border-purple-700'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 w-11/12 mx-auto'>
        {/* Logo and Description */}
        <div className='flex flex-col gap-4'>
          <span className='text-2xl font-bold text-purple-400'>LOGO</span>
          <p className='text-sm text-gray-300'>
            We specialize in crafting custom buttons, navbars, and footers tailored to your design and functionality needs. Our solutions ensure seamless integration, responsiveness, and modern aesthetics.
          </p>
        </div>

        {/* Our Services */}
        <div>
          <h1 className='text-purple-400 text-lg font-semibold mb-2 underline underline-offset-4'>Our Services</h1>
          <ul className='flex flex-col space-y-1'>
            {footer.map((item, index) => (
              <li key={index} className='hover:text-purple-300 transition-colors'>
                <Link to={item.navigate}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Projects */}
        <div>
          <h1 className='text-purple-400 text-lg font-semibold mb-2 underline underline-offset-4'>Projects</h1>
          <ul className='flex flex-col space-y-1'>
            {projects.map((item, index) => (
              <li key={index} className='hover:text-purple-300 transition-colors'>
                <Link to={item.navigate}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Terms & Conditions */}
        <div>
          <h1 className='text-purple-400 text-lg font-semibold mb-2 underline underline-offset-4'>Terms & Conditions</h1>
          <ul className='flex flex-col space-y-1'>
            <li className='hover:text-purple-300 transition-colors'>Privacy</li>
            <li className='hover:text-purple-300 transition-colors'>Policy</li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h1 className='text-purple-400 text-lg font-semibold mb-2 underline underline-offset-4'>Contact Our Team</h1>
          <div className='text-sm text-gray-300 mb-4'>ankurgohani218@gmail.com</div>
          <div className='flex flex-col sm:flex-row'>
            <input
              type='email'
              placeholder='Enter Your Email'
              className='py-2 px-4 rounded-l-md outline-none bg-gray-800 text-white border border-purple-600 w-full sm:w-auto'
            />
            <button
              type='button'
              className='bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-r-md mt-2 sm:mt-0 transition'
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <hr className='w-11/12 mx-auto my-5 border-gray-700' />
      <div className='text-center text-gray-400 text-sm'>
        <p>&copy; {new Date().getFullYear()} OurCompanyName. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
