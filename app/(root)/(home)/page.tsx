"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import Carousel from "react-multi-carousel";
import { BannerCarousel } from "@/config/carousel";

const data = [
  {
    title: "T-shirt",
    link: "https://imgeng.jagran.com/images/2023/may/Best%20Branded%20T%20Shirts%20For%20Men%20In%20India1683040285127.jpg",
    description: "Summer Value Pack",
    name: "cool",
  },
  {
    title: "Jeans",
    link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6pSCdCmjleGt_eZ8Ua2SMdaRhWDnO0nWMUg&usqp=CAU",
    description: "Summer Value Pack",
    name: "cool",
  },
  {
    title: "Puppy",
    link: "https://masterbundles.com/wp-content/uploads/2023/03/1-697.jpg",
    description: "Summer Value Pack",
    name: "cool",
  },
];

const Home = () => {
  return (
    <>
      <Header />

      <main className="relative min-h-[90vh] mt-[10vh] px-12">
        <Carousel responsive={BannerCarousel} arrows={true} autoPlay={true} autoPlaySpeed={3000} infinite>
          {data.map((item, index) => (
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
      </main>

      <Footer />
    </>
  );
};

export default Home;
