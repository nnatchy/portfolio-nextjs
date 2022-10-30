import React from "react";

const About = () => {
  return (
    <div id='about' className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">About</p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-500">I don't know why I'm so bad at this</p>
          <p className="py-2 text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia et,
            eaque placeat explicabo laboriosam exercitationem aliquam atque ut,
            esse omnis, quod voluptatibus delectus eum eligendi nemo? Vitae
            quibusdam nostrum ad?
          </p>
          <p className="py-2 text-gray-500">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut,
            voluptates? Sunt autem inventore sequi laborum odio commodi vel
            cumque veniam, recusandae, atque eveniet quis ut! Necessitatibus
            placeat labore alias nostrum!
          </p>
          <p className="py-2 text-gray-800 underline cursor-pointer">Check out some of my latest projects.</p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
            <img className="rounded-xl" src="https://www.howtogeek.com/wp-content/uploads/2021/06/best-macbooks-roundup-header.jpg?height=200p&trim=2,2,2,2" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
