import FeaturesProductCard from "./FeaturesProductCard";

const data = [
  {
    title: "CRUNCHEX CHILLI",
    price: 10,
    src: "/img/product1.svg",
  },
  {
    title: "TOMATO TWIST",
    price: 15,
    src: "/img/product2.svg",
  },
  {
    title: "CHAAT CHASKA",
    price: 20,
    src: "/img/product3.svg",
  },
];

const FeaturesProducts = () => {
  return (
    <div
      className=" flex justify-around  flex-wrap md:flex-nowrap
      gap-y-[130px] gap-[50px] xl:gap-[80px] 
      mt-[65px] pt-[160px] xs:px-[53px] lg:py-[20px] xl:px-[83px]
     bg-[#23675A] rounded-t-[50px] lg:h-[205px]"
    >
      {data.map((product, i) => (
        <FeaturesProductCard key={i} product={product} />
      ))}
    </div>
  );
};

export default FeaturesProducts;
