import React from "react";
import blogimage from "../assets/blogimage.png";
import userpic from "../assets/userpic.png";
import './Card.css';
function Card() {
  return (
    <>
      <div className="h-screen w-screen flex justify-center items-center Figtree">
        <div className="cardo border-[1.5px] border-black md:w-[384px] w-[89%] bg-white rounded-3xl p-6 text-[#111111]">
          <img src={blogimage} alt="blog" className="w-full rounded-lg" />
          <button className="shadow-xl text-sm mt-6 mb-4 btn btn-primary py-1 px-4 Figtree-eb rounded-[4px] bg-[#F4D04E]">
            Learning
          </button>
          <p className="Figtree font-semibold text-[15px]">Published 21 Dec 2023</p>
          <h1 className="cursor-pointer	text-2xl Figtree-eb my-4 hover:text-[#F4D04E]">HTML & CSS foundations</h1>
          <p className="Figtree-sb text-[#7F7F7F]">
            These languages are the backbone of every website,defining
            structure, content, and presentation.
          </p>
          <div className="flex items-center mt-4">
            <img
              src={userpic}
              alt="author"
              className="rounded-full"
            />
            <p className="text-sm text-[#111111] Figtree-eb ml-3">Greg Hooper</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
