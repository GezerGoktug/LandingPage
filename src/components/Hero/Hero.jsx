import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";

const Hero = () => {
  return (
    <div className=" flex flex-col-reverse lg:flex-row items-center xs:items-start relative   ">
      <HeroLeft />
      <HeroRight />
      <img
        src="/img/plane.svg"
        className="hidden lg:block absolute 
         -top-[12%] left-[24%] xl:left-[20%] xl:-top-[16%] z-10"
        alt=""
      />
      <img
        src="/img/line.svg"
        className="hidden lg:block absolute 
         -top-[37%] right-[6%] xl:right-[25%] xl:-top-[43%]"
        alt=""
      />
    </div>
  );
};

export default Hero;
