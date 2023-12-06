"use client";

import Footer from "@/components/footer";
import Header from "@/components/header";
import React, {useState } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
// import axios from "axios";


const Shop = () => {
  
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <>
      <Header />
            <main className="min-h-[90vh] mt-[10vh] px-12">
              <div className="mt-[50px] max-w-sm w-full lg:max-w-full lg:flex ">
              <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden ">
                <img src="https://cdn1.ozone.ru/s3/multimedia-6/6380158710.jpg"/>
              </div>
              <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div className="mb-8">
                  <p className="text-sm text-gray-600 flex items-center">
                    <svg className="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                    </svg>
                    Members only
                  </p>
                  <div className="text-gray-900 font-bold text-xl mb-2">Can coffee make you a better developer?</div>
                  <p className="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem
                    praesentium nihil.
                  </p>
                </div>
                <div className="flex items-center justify-center">
                  <div className="bg-slate-300">
                    <p className="text-black text-3xl"><button className="text-black text-4xl" onClick={decrement}>-</button> {count} <button className="text-black text-4xl" onClick={increment}>+</button></p>    
                  </div>
                </div>
                </div>
                <div>
                  <button ><RiDeleteBin5Line  className="w-[100px] h-[100px] mt-[50px]"/></button>
                </div>
            </div>
          </main>
      <Footer />
    </>
  );
};

export default Shop;
