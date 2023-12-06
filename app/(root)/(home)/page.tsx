"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import Carousel from "react-multi-carousel";
import { BannerCarousel, NewArrivalCarousel } from "@/config/carousel";
import { CarouselData, Data } from "@/config/constants";
import React, { useEffect, useState } from 'react';
import axios from "axios";
import CarouselBannerCard from "@/components/carousel/carousel-banner-card";

const Home = () => {

  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:7070/api/categories');
        setData(response.data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);


  console.log(data);
  

  return (
    <>
      <Header />

      <main className="relative min-h-[90vh] mt-[10vh] px-12">
        <Carousel responsive={BannerCarousel} arrows={true} autoPlay={true} autoPlaySpeed={3000} infinite>
          {Data.map((item, index) => (
            <CarouselBannerCard key={index} item={item} />
          ))}
        </Carousel>

        <h2 className="text-3xl pb-7 pt-10">New Arrival</h2>

        <Carousel responsive={NewArrivalCarousel} arrows={true} autoPlay={true} autoPlaySpeed={2200} infinite>
          {CarouselData.map((item, index) => (
            <div key={index}>
              <img className="absolute -z-10 top-0 left-0 right-0 object-cover w-full h-[600px] p-2" src={item.link} alt="banner" />
              <div className="pl-24 pt-48 w-full h-[90vh] gap-2">
                <h3 className="text-3xl my-6 text-">{item.title}</h3>
                <h1 className="text-5xl my-6">{item.description}</h1>
                <h4 className="text-3xl my-6">{item.name}</h4>
                <button className="px-12 py-4 bg-slate-100 text-black rounded">Shop now</button>
              </div>
            </div>
          ))}
        </Carousel>

        <h2 className="text-3xl pb-7 pt-10">Big Saving Zone</h2>

        <div className="flex gap-y-2 justify-around flex-wrap">
          <div className=" relative max-w-xs overflow-hidden bg-cover bg-no-repeat  w-[700px] cursor-pointer">
            <img
              src="https://avatars.mds.yandex.net/get-mpic/1705137/img_id8829053300075366949.jpeg/orig"
              className="max-w-xs transition duration-300 ease-in-out hover:scale-110"
              alt="Louvre"
            />
          </div>
          <div className=" relative max-w-xs overflow-hidden bg-cover bg-no-repeat  w-[700px] cursor-pointer">
            <img
              src="https://sportishka.com/uploads/posts/2022-11/1667681132_62-sportishka-com-p-khudak-naik-krasivo-64.jpg"
              className="max-w-xs transition duration-300 ease-in-out hover:scale-110"
              alt="Louvre"
            />
          </div>
          <div className=" relative max-w-xs overflow-hidden bg-cover bg-no-repeat  w-[700px] cursor-pointer">
            <img
              src="https://zapasexpress.ru/images/detailed/2520/6809.30_6_tif_1000x1000.jpg"
              className="max-w-xs transition duration-300 ease-in-out hover:scale-110"
              alt="Louvre"
            />
          </div>

          <Carousel responsive={BannerCarousel} arrows={true} autoPlay={true} autoPlaySpeed={3000} infinite>
            {Data.map((item, index) => (
              <div key={index}>
                <img className="absolute -z-10 top-0 left-0 right-0 object-cover w-full h-[900px]" src={item.link} alt="banner" />
                <div className="pl-24 pt-48 w-full h-[90vh]">
                  <h3 className="text-3xl my-6">{item.title}</h3>
                  <h1 className="text-5xl my-6">{item.description}</h1>
                  <h4 className="text-3xl my-6">{item.name}</h4>
                  <button className="px-12 py-4 bg-slate-100 text-black rounded">Shop now</button>
                </div>
              </div>
            ))}
          </Carousel>
        </div>

        <div className="flex gap-0 justify-around mt-3">
          <div className=" relative max-w-xs overflow-hidden bg-cover bg-no-repeat  w-[700px] cursor-pointer">
            <img
              src="https://android-obzor.com/wp-content/uploads/2022/02/32-5.jpg"
              className="max-w-xs transition duration-300 ease-in-out hover:scale-110"
              alt="Louvre"
            />
          </div>
          <div className=" relative max-w-xs overflow-hidden bg-cover bg-no-repeat  w-[700px] cursor-pointer">
            <img
              src="https://standoffarena.com/assets/images/users/396379.jpg"
              className="max-w-xs transition duration-300 ease-in-out hover:scale-110"
              alt="Louvre"
            />
          </div>
        </div>

        <h2 className="text-3xl pb-7 pt-10">Categories For Men</h2>
        <div>
          <div className="max-w-sm rounded overflow-hidden shadow-lg bg-neutral-400  w-[300px]">
            <img
              className="w-full"
              src="https://avatars.mds.yandex.net/i?id=561b7d965bc1fac8fdf54b38cbfa28dac9a1b9e5-8451085-images-thumbs&ref=rim&n=33&w=250&h=250"
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
              <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia</p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <button className="bg-sky-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Button</button>
            </div>
          </div>

         </div> 

        </div>

        <h2 className="text-3xl pb-7 pt-10">Categories For Men</h2>
        <div>
          <div className="max-w-sm rounded overflow-hidden shadow-lg bg-neutral-400  w-[300px]">
            <img
              className="w-full"
              src="https://avatars.mds.yandex.net/i?id=561b7d965bc1fac8fdf54b38cbfa28dac9a1b9e5-8451085-images-thumbs&ref=rim&n=33&w=250&h=250"
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
              <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia</p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <button className="bg-sky-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Button</button>
            </div>
          </div>
        </div>


        <h2 className="text-3xl pb-7 pt-10">Categories For Women</h2>
        <div className="flex">
          <div className="max-w-sm rounded overflow-hidden shadow-lg bg-neutral-400  w-[300px]">
            <img
              className="w-full"
              src="https://st.shanti-shanti.com/pp/200x180/17f721dd1034456b86dad23e7581490c%402x.jpg"
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
              <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia</p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <button className="bg-sky-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Button</button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Home;
