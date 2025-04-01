import React from 'react'
import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";
import { BiSolidDownload } from "react-icons/bi";
import { RiShareFill } from "react-icons/ri";
import { RiCheckboxMultipleBlankFill } from "react-icons/ri";

const demo = [
    {
        photo: "",
        Name: "",
        description: "",
        icons: [AiFillLike, AiFillLike, BiSolidDownload, RiShareFill]
    },
    {
        photo: "",
        Name: "",
        description: "",
        icons: [AiFillLike, AiFillLike, BiSolidDownload, RiShareFill]
    },
    {
        photo: "",
        Name: "",
        description: "",
        icons: [AiFillLike, AiFillLike, BiSolidDownload, RiShareFill]
    }
]

const Carthome = () => {
    return (
        <div className='my-10 ml-4'>
            {/* Title Section */}
            <div className='flex flex-col items-baseline gap-y-2 my-5'>
                <div className='w-24 h-24 bg-green-500 rounded-full flex items-center justify-center'>
                    <RiCheckboxMultipleBlankFill size={65} />
                </div>
                <h1 className='text-3xl font-semibold tracking-wide text-green-600'>
                    Custom Cart & Responsive and Easy to Use
                </h1>
                <p className='max-w-xl text-justify text-gray-500'>
                    We specialize in crafting custom buttons with stunning colors and unique designs to enhance your website's aesthetics. Our creations blend functionality with eye-catching visuals, ensuring seamless user experiences. Elevate your brand with beautifully designed UI elements tailored to your needs.
                </p>
            </div>

            {/* Grid Layout for Cards */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    demo.map((demos, index) => (
                        <div
                            className={`flex flex-col items-start gap-y-3 ${index === 2 && "border h-0 hover:h-full transition-all duration-700 ease-linear border-s-0 border-b-0 border-r-0 bg-gradient-to-t from-gray-800 to-black p-4 border-yellow-50 cursor-pointer"}
                            ${index === 1 && "border mx-auto p-5 rounded-md"} p-2`}
                            key={index}
                        >
                            {/* Image Section */}
                            <div className={`w-full h-[340px] rounded-md overflow-hidden`}>
                                <img
                                    src="https://img.freepik.com/free-photo/green-iguana-closeup-wood-animal-closeup-reptile-closeup_488145-2581.jpg?t=st=1741579693~exp=1741583293~hmac=98e9008b3a5fd7d201b03d2c0586bee132a12e2c5a72d29dd8728b2c11069d12&w=1060"
                                    alt=""
                                    className='hover:scale-110 transition-all duration-200 ease-in'
                                />
                            </div>

                            {/* Title and Description */}
                            <h1 className='text-xl font-semibold mt-3'>Title of Year's</h1>
                            <p className='max-w-lg text-start text-gray-600'>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod, mollitia. Numquam, mollitia maiores hic reiciendis quas nam molestiae facere perspiciatis illum! Aut?
                            </p>

                            {/* Action Icons and Button */}
                            <div className='flex justify-between w-full items-center'>
                                <div className='flex gap-x-2 text-2xl cursor-pointer'>
                                    <span><AiFillLike /></span>
                                    <span><BiSolidDownload /></span>
                                    <span><RiShareFill /></span>
                                </div>
                                <button className={` ${index !== 0 && "hidden"} bg-red-500 p-2 rounded-sm tracking-wider hover:opacity-85 cursor-pointer`} type="button">
                                    View History
                                </button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Carthome;
