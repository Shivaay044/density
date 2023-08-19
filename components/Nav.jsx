import Image from "next/image";
import React from "react";

const Nav = () => {
  return <nav className="flex justify-around w-100 m-3 items-center">
       <Image height={"100"} width={"100"} src="next.svg"/>
       <div className="flex justify-between">
           <a href="#" className="ml-5 mr-5">Emotions</a>
           <a href="#" className="ml-5 mr-5">Manifesto</a>
           <a href="#" className="ml-5 mr-5">Self-awareness test</a>
           <a href="#" className="ml-5 mr-5">Work</a>
       </div>
       <button type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Download</button>
  </nav>;
};

export default Nav;
