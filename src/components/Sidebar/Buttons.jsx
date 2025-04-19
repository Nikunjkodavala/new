import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Bookmark, BookmarkCheck, Share2 } from "lucide-react";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import { FaCode } from "react-icons/fa";
import { getbasicbtn } from "../../Connecter/Hendler/custombutton";
import { likeviewbtn } from "../../Connecter/Hendler/custombutton";
import parse from 'html-react-parser';

const CustomCard = ({items}) => {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [likeincrement, setLikeincrement] = useState(0);
  const [viewincrement, setViewincrement] = useState(0);

  const onLike = async () => {
    try {
      const response = await likeviewbtn(items._id);
      console.log("Like and view incremented successfully:", response);
      setLikeincrement(response.data.Like)
      setViewincrement(response.data.View)
    } catch (error) {
      console.error("Error incrementing like and view:", error);
    }
  };
  
  //  const string = `<button className="bg-gradient-to-b from-cyan-400 to-cyan-700 text-white px-6 py-2 rounded-lg shadow-md font-semibold hover:opacity-90 transition">Button</button>`;
  return (
    <div className="flex flex-col">
      <div className="lg:w-72 group h-44 w-44 border-2 border-purple-400 lg:h-72 bg-[#212121] overflow-hidden rounded-xl flex justify-center items-center p-4 shadow-lg relative">
        <div>
              {
                 parse(items.btncode)
              }
        </div>
             
       
        <div className="flex lg:w-11/12 w-9/12 border-white lg:justify-between justify-center items-center max-sm:px-1 absolute top-2">
          <div className="flex flex-row items-center gap-x-2 invisible group-hover:visible transition-all duration-200 ease-in-out">
            <Link to="/cart/getcode" className="flex items-center gap-x-2">
              GetCode <FaCode size={20} />
            </Link>
          </div>

          <div className="flex lg:gap-x-4 gap-x-4">
            {/* Save Button */}
            <button
              onClick={() => setSaved(!saved)}
              className="text-white hover:scale-110 transition-transform"
              title="Save"
            >
              {saved ? (
                <BookmarkCheck size={20} color="blue" />
              ) : (
                <Bookmark size={20} />
              )}
            </button>

            {/* Share Button */}
            <button
              onClick={() => alert("Shared!")}
              className="text-white hover:scale-110 transition-transform"
              title="Share"
            >
              <Share2 size={20} />
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-between gap-x-6 items-center mt-4 px-2">
        {/* Like Button */}
        <button
          onClick={() => onLike(!likeincrement)}
          className={`transition-all  flex hover:scale-110 gap-x-2 ${
            likeincrement ? "text-blue-600" : "text-white"
          }`}
          title="Like"
        >
          {likeincrement ? <AiFillLike size={22} /> : <AiOutlineLike size={22} />}
          <span className="text-sm font-semibold flex justify-center items-center ">{likeincrement}</span>
        </button>

        <h3 className="text-md font-semibold text-white">Card Title</h3>
        <h3 className="text-md font-semibold text-white">{viewincrement} Views</h3>
      </div>
    </div>
  );
};

const CustomCardGrid = () => {
  const [basic,setbasic] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
      const btnfun = async() =>{
         try {
          setLoading(true)
            const btn = await getbasicbtn();
            console.log("api test",btn);
            if (!btn.success) { 
               throw new Error(btn.message);
            }
            setbasic(btn.data);
            setLoading(false);
         } catch (error) {
            console.log("Error in getbasicbtn:", error);
         }
      }
       btnfun();
  },[])

  return loading ? (
    <div className="flex justify-center items-center h-[80vh] z-[1000]">
      <h1 className="text-2xl font-bold text-white">Loading...</h1>
    </div>
  ) : (
    <div className="min-h-screen p-6 flex justify-center items-start">
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {basic.map((items, index) => (
          <CustomCard key={index} items={items} />
        ))}
      </div>
    </div>
  );
};

export default CustomCardGrid;
