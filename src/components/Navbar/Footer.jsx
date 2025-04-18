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
