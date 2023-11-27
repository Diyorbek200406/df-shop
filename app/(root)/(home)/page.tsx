"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import "tw-elements-react/dist/css/tw-elements-react.min.css";
import Carousel from "react-multi-carousel";
import { BannerCarousel, NewArrivalCarousel } from "@/config/carousel";

const data = [
  {
    title: "T-shirt",
    link: "https://i.pinimg.com/originals/37/9b/2b/379b2b40d368fda6ae248db12231dd0e.jpg",
    description: "Autumn Value Pack",
    name: "cool",
  },
  {
    title: "Palto",
    link: "https://ae01.alicdn.com/kf/HTB19AxPXOqAXuNjy1Xdq6yYcVXaE/Laser-camouflage-Lederen-mannen-jas-Rex-konijnenbont-liner-schapenhuid-winterjas-Fox-bontkraag-piloot-leer-jas.jpg",
    description: "Winter Value Pack",
    name: "cool",
  },
  {
    title: "Puppy",
    link: "https://masterbundles.com/wp-content/uploads/2023/03/1-697.jpg",
    description: "Summer Value Pack",
    name: "cool",
  },
  {
    title: "Puppy",
    link: "https://ligafutbola.ru/image/cache/catalog/02.02.19/Adidas-sportivnyy-kostum-russia-1-1000x750.jpg",
    description: "Spring Value Pack",
    name: "cool",
  },
];

const dataCarusel = [
  {
    title: "T-shirt",
    link: "https://i.pinimg.com/originals/37/9b/2b/379b2b40d368fda6ae248db12231dd0e.jpg",
    description: "Autumn Value Pack",
    name: "cool",
  },
  {
    title: "Palto",
    link: "https://ae01.alicdn.com/kf/HTB19AxPXOqAXuNjy1Xdq6yYcVXaE/Laser-camouflage-Lederen-mannen-jas-Rex-konijnenbont-liner-schapenhuid-winterjas-Fox-bontkraag-piloot-leer-jas.jpg",
    description: "Winter Value Pack",
    name: "cool",
  },
  {
    title: "Puppy",
    link: "https://masterbundles.com/wp-content/uploads/2023/03/1-697.jpg",
    description: "Summer Value Pack",
    name: "cool",
  },
  {
    title: "Puppy",
    link: "https://ligafutbola.ru/image/cache/catalog/02.02.19/Adidas-sportivnyy-kostum-russia-1-1000x750.jpg",
    description: "Spring Value Pack",
    name: "cool",
  },
];

const Home = () => {
  return (
    <>
      <Header />

      <main className="relative min-h-[90vh] mt-[10vh] px-12">
        <section>

          <Carousel responsive={BannerCarousel} arrows={true} autoPlay={true} autoPlaySpeed={3000} infinite>
            {data.map((item) => (
              <>
                <img className="absolute -z-10 top-0 left-0 right-0 object-cover w-full h-[900px]" src={item.link} alt="banner" />
                <div className="pl-24 pt-48 w-full h-[90vh]">
                  <h3 className="text-3xl my-6 text-black">{item.title}</h3>
                  <h1 className="text-5xl my-6 text-black">{item.description}</h1>
                  <h4 className="text-3xl my-6 text-black">{item.name}</h4>
                  <button className="px-12 py-4 bg-slate-100 text-black rounded">Shop now</button>
                </div>
              </>
            ))}
          </Carousel>
        </section>

        <h2 className="text-3xl pb-7 pt-10">New Arrival</h2>
        <section className="carusel-mini ">
          <Carousel responsive={NewArrivalCarousel} arrows={true} autoPlay={true} autoPlaySpeed={2200} infinite>
            {dataCarusel.map((item) => (
              <>
                <img className="absolute -z-10 top-0 left-0 right-0 object-cover w-full h-[600px] p-2 " src={item.link} alt="banner" />
                <div className="pl-24 pt-48 w-full h-[90vh] gap-2">
                  <h3 className="text-3xl my-6 text-">{item.title}</h3>
                  <h1 className="text-5xl my-6 ">{item.description}</h1>
                  <h4 className="text-3xl my-6 ">{item.name}</h4>
                  <button className="px-12 py-4 bg-slate-100 text-black rounded">Shop now</button>
                </div>
              </>
            ))}
          </Carousel>
        </section>
        <h2 className="text-3xl pb-7 pt-10">Big Saving Zone</h2>
        <section className="flex gap-y-2 justify-around flex flex-wrap">
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

        </section>

        <section className="flex gap-0 justify-around mt-3">
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
        </section>
      </main>

      <section className="CategoryMen ">
        <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
          <a href="#!">
            <img className="rounded-t-lg" src="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg" alt="" />
          </a>
          <div className="p-6">
            <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">Card title</h5>
            <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
              Some quick example text to build on the card title and make up the bulk of the cards content.
            </p>

            <button
              type="button"
              className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
            >
              Button
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
