import React from "react";
import {FaLinkedinIn, FaGithub} from "react-icons/fa"
import {AiOutlineMail} from "react-icons/ai"
import {BsFillPersonLinesFill} from "react-icons/bs"

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            LET'S BUILD SOMETHING TOGETHER
          </p>
          <h1 className="py-4 text-gray-700">
            Hey, I'm <span className="text-[#35b3f1]">Natch</span>
          </h1>
          <h1 className="py-2 text-gray-700">
            A Computer Engineering Sophomore
          </h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates, nulla corporis quo asperiores modi distinctio excepturi tempore illum quaerat, impedit veritatis itaque quibusdam suscipit pariatur et tempora fuga ea reiciendis.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedinIn/>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaGithub/>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <AiOutlineMail/>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <BsFillPersonLinesFill/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
