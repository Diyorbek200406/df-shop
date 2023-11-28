interface CarouselBannerCardProps {
  item: any;
}

const CarouselBannerCard = ({ item }: CarouselBannerCardProps) => {
  return (
    <div>
      <img className="absolute -z-10 top-0 left-0 right-0 object-cover w-full h-[900px]" src={item.link} alt="banner" />
      <div className="pl-24 pt-48 w-full h-[90vh]">
        <h3 className="text-3xl my-6 text-black">{item.title}</h3>
        <h1 className="text-5xl my-6 text-black">{item.description}</h1>
        <h4 className="text-3xl my-6 text-black">{item.name}</h4>
        <button className="px-12 py-4 bg-slate-100 text-black rounded">Shop now</button>
      </div>
    </div>
  );
};

export default CarouselBannerCard;
