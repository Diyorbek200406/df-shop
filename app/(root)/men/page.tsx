"use client";

import Footer from "@/components/footer";
import Header from "@/components/header";
import { FcLike } from "react-icons/fc";
import { FcLikePlaceholder } from "react-icons/fc";
import React, { useEffect, useState } from 'react';
import axios from "axios";

const Men = () => {
  const [showFirstImage, setShowFirstImage] = useState(true);

  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:7070/api/clothes');
        setData(response.data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);


  console.log(data);
  
  const handleButtonClick = () => {
    setShowFirstImage(!showFirstImage);
  };
  return (
    <>
      <Header />
      <main className="min-h-[90vh] mt-[10vh] px-12">
        <h2 className="text-3xl pb-7 pt-10">Womens Clothing</h2>
        <div className="flex">
          <div className="max-w-sm rounded overflow-hidden shadow-lg bg-neutral-400  w-[300px]">
            <button onClick={handleButtonClick}>
              {showFirstImage ? <FcLikePlaceholder className="w-[50px] h-[35px] ml-[230px]" /> : <FcLike className="w-[50px] h-[35px] ml-[230px]" />}
            </button>
            <img className="w-full " src="https://i.pinimg.com/736x/92/da/a9/92daa9b6564456db408321d2d41181ed.jpg" alt="Sunset in the mountains" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
              <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia</p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <button className="bg-sky-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Button</button>
            </div>
          </div>
        </div>
        <h2 className="text-3xl pb-7 pt-10"></h2>
      </main>
      <Footer />
    </>
  );
};

export default Men;
