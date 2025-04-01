// import React from 'react'
// import { RiCustomSize } from "react-icons/ri";
// import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

// import { atelierForestDark, docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
// import Homenav from '../../assets/Navabr_Image/HomepageNav.png'
// import { IoIosArrowRoundForward } from "react-icons/io";

// const Custom = () => {
//     const codeString =
//   `const Ecomm = () => {
//   const navpro = ["Home", "Products", "New In", "Contact Us", "About Us"];
//   return (
//     <div className="w-full font-serif mt-10 bg-black text-white py-3 overflow-hidden ">
//       <nav className=" w-11/12 flex mx-auto items-center  justify-between  ">
//         <div className=" w-1/10">Logo</div>
//         <div>
//           <ul className=" flex gap-x-5 text-xl tracking-wide ">
//             {navpro.map((item, index) => (
//               <li key={index} className=" relative group">
//                 <p className="border px-5 py-0.5  bg-white rounded-sm transition-all duration-200 ease-in-out 
//                 hover:bg-black hover:text-white text-black border-gray-500 cursor-pointer">
//                   {item}
//                 </p>
//                 <div className=""></div>
//               </li>
//             ))}
//           </ul>
//         </div>
//         <div className="relative flex gap-x-5 text-lg tracking-wide">
//           <span className=" cursor-pointer">
//             <IoLogoGithub size={25} color="" />
//           </span>
//           <span className=" cursor-pointer">
//             <FaXTwitter size={25} color="" />
//           </span>
//           <span className=" cursor-pointer">
//             <FaInstagram size={25} color="" />
//           </span>
//         </div>
//       </nav>
//     </div>
//   );
// };`

//     const html = 
//     `<body>
//     <div class="navbar">
//         <nav class="nav-container">
//             <div class="logo">Logo</div>
//             <ul class="nav-links">
//                 <li><a href="#">Home</a></li>
//                 <li><a href="#">Products</a></li>
//                 <li><a href="#">New In</a></li>
//                 <li><a href="#">Contact Us</a></li>
//                 <li><a href="#">About Us</a></li>
//             </ul>
//             <div class="social-icons">
//                 <a href="#" class="icon"><i class="fab fa-github"></i></a>
//                 <a href="#" class="icon"><i class="fab fa-twitter"></i></a>
//                 <a href="#" class="icon"><i class="fab fa-instagram"></i></a>
//             </div>
//         </nav>
//     </div>
// </body>
//      `
//      const css = `body {
//     margin: 0;
//     font-family: serif;
//     background-color: black;
//     color: white;
// }

// .navbar {
//     width: 100%;
//     margin-top: 10px;
//     background-color: black;
//     padding: 15px 0;
//     overflow: hidden;
// }

// .nav-container {
//     width: 90%;
//     margin: 0 auto;
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
// }

// .logo {
//     width: 10%;
//     font-size: 1.5rem;
//     font-weight: bold;
// }

// .nav-links {
//     display: flex;
//     gap: 20px;
//     list-style: none;
//     padding: 0;
// }

// .nav-links li a {
//     text-decoration: none;
//     color: black;
//     background-color: white;
//     padding: 5px 15px;
//     border-radius: 4px;
//     border: 1px solid gray;
//     transition: 0.2s;
// }

// .nav-links li a:hover {
//     background-color: black;
//     color: white;
// }

// .social-icons {
//     display: flex;
//     gap: 20px;
// }

// .icon {
//     color: white;
//     font-size: 1.5rem;
//     text-decoration: none;
// }`
//     return (
//         <div className='flex justify-between w-11/12 gap-5 my-10'>
//             <div className='flex flex-col text-start gap-y-3'>
//                 <div className=' space-y-3'>
//                     <span><RiCustomSize size={55} /></span>
//                     <h1 className=' text-yellow-500 mt-3 text-3xl tracking-wide '>All Ready Build Components & Fullliy Customize</h1>
//                     <p className=' text-lg max-w-5xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat omnis, unde saepe nobis adipisci quidem placeat illo consectetur dolore corrupti, rerum minus excepturi dolorum blanditiis facere neque nesciunt, optio eaque!</p>
//                     <span className='flex gap-x-1.5 items-center text-xl'>View & Your Choice </span>
//                 </div>
               
//                  <div>
//                     <SyntaxHighlighter language="javascript" style={atelierForestDark} showLineNumbers customStyle={{borderRadius:"10px"}}>
//                         {css}
//                     </SyntaxHighlighter>
//                 </div>
                
               
//             </div>
//             <div className='flex flex-col gap-y-5 max-w-1/2 text-start'>
//                 <SyntaxHighlighter language="javascript" style={atelierForestDark} showLineNumbers customStyle={{borderRadius:"10px"}}>
//                     {codeString}
//                 </SyntaxHighlighter>
//                 <div>
//                     <SyntaxHighlighter language="javascript" style={atelierForestDark} showLineNumbers customStyle={{borderRadius:"10px"}}>
//                         {html}
//                     </SyntaxHighlighter>
//                 </div>
//                  <div className='flex flex-col gap-y-5 mt-10 bg-white py-10 px-10 rounded-lg shadow-lg  shadow-purple-400'>
//                      <h1 className=' text-xl text-gray-900 tracking-wide font-semibold'>Output :-</h1>
//                      <div>
//                           <img src={Homenav} alt=""  />
//                      </div>
                    
//                 </div>
//                 <div className='flex gap-x-5 mx-auto mt-10'>
//                      <button className=' text-xl tracking-wide flex items-center underline gap-x-1.5 underline-offset-8 cursor-pointer'>Try anthor components <IoIosArrowRoundForward size={30} className='mt-0.5'/></button>
//                      <button className=' text-xl tracking-wide text-purple-700 font-medium hover:bg-black border py-2 px-5 bg-white rounded-xl cursor-pointer'>Easy to use</button>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Custom



import React from 'react';
import { RiCustomSize } from "react-icons/ri";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atelierForestDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Homenav from '../../assets/Navabr_Image/HomepageNav.png';

const Custom = () => {
    const codeString =
`const Ecomm = () => {
  const navpro = ["Home", "Products", "New In", "Contact Us", "About Us"];
  return (
    <div className="w-full font-serif mt-10 bg-black text-white py-3 overflow-hidden ">
      <nav className="w-11/12 flex mx-auto items-center justify-between">
        <div className="w-1/10">Logo</div>
        <div>
          <ul className="flex gap-x-5 text-xl tracking-wide">
            {navpro.map((item, index) => (
              <li key={index} className="relative group">
                <p className="border px-5 py-0.5 bg-white rounded-sm transition-all duration-200 ease-in-out 
                hover:bg-black hover:text-white text-black border-gray-500 cursor-pointer">
                  {item}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};`;

    const html = 
`<body>
  <div class="navbar">
      <nav class="nav-container">
          <div class="logo">Logo</div>
          <ul class="nav-links">
              <li><a href="#">Home</a></li>
              <li><a href="#">Products</a></li>
              <li><a href="#">New In</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">About Us</a></li>
          </ul>
      </nav>
  </div>
</body>`;

    const css = 
`body {
  margin: 0;
  font-family: serif;
  background-color: black;
  color: white;
}

.navbar {
  width: 100%;
  margin-top: 10px;
  background-color: black;
  padding: 15px 0;
}

.nav-container {
  width: 90%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  width: 10%;
  font-size: 1.5rem;
  font-weight: bold;
}

.nav-links {
  display: flex;
  gap: 20px;
  list-style: none;
  padding: 0;
}

.nav-links li a {
  text-decoration: none;
  color: black;
  background-color: white;
  padding: 5px 15px;
  border-radius: 4px;
  border: 1px solid gray;
  transition: 0.2s;
}

.nav-links li a:hover {
  background-color: black;
  color: white;
}`;

    return (
        <div className="flex flex-col lg:flex-row justify-between w-11/12 mx-auto gap-10 my-10">
            {/* Left Section */}
            <div className="flex flex-col text-start gap-y-5">
                <div className="space-y-3">
                    <span><RiCustomSize size={55} className="text-purple-500" /></span>
                    <h1 className="text-yellow-500 mt-3 text-3xl tracking-wide">All Ready Build Components & Fully Customizable</h1>
                    <p className="text-lg max-w-5xl text-gray-300">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat omnis, unde saepe nobis 
                        adipisci quidem placeat illo consectetur dolore corrupti, rerum minus excepturi dolorum 
                        blanditiis facere neque nesciunt, optio eaque!
                    </p>
                    <span className="flex gap-x-1.5 items-center text-xl text-white">
                        View & Your Choice 
                    </span>
                </div>

                {/* CSS Code Highlight */}
                <SyntaxHighlighter language="css" style={atelierForestDark} showLineNumbers customStyle={{ borderRadius: "10px" }}>
                    {css}
                </SyntaxHighlighter>
            </div>

            {/* Right Section */}
            <div className="flex flex-col gap-y-5 max-w-1/2 text-start">
                {/* JavaScript Code */}
                <SyntaxHighlighter language="javascript" style={atelierForestDark} showLineNumbers customStyle={{ borderRadius: "10px" }}>
                    {codeString}
                </SyntaxHighlighter>

                {/* HTML Code */}
                <SyntaxHighlighter language="html" style={atelierForestDark} showLineNumbers customStyle={{ borderRadius: "10px" }}>
                    {html}
                </SyntaxHighlighter>

                {/* Output Section */}
                <div className="flex flex-col gap-y-5 mt-10 bg-white py-10 px-10 rounded-lg shadow-lg shadow-purple-400">
                    <h1 className="text-xl text-gray-900 tracking-wide font-semibold">Output :-</h1>
                    <img src={Homenav} alt="Component Output" className="rounded-lg shadow-md" />
                </div>

                {/* Buttons */}
                <div className="flex gap-x-5 mx-auto mt-10">
                    <button className="text-xl tracking-wide flex items-center underline gap-x-1.5 underline-offset-8 cursor-pointer text-white">
                        Try another component <IoIosArrowRoundForward size={30} className="mt-0.5"/>
                    </button>
                    <button className="text-xl tracking-wide text-purple-700 font-medium hover:bg-black border py-2 px-5 bg-white rounded-xl cursor-pointer">
                        Easy to use
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Custom;

