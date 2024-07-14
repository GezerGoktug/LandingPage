const HeroRight = () => {
  return (
    <div className="md:w-[calc(1320px-590px)] flex  gap-[44px] flex-col md:flex-row  ">
      <img
        className=" animate-moving  w-[380px] xs:w-[425px] xl:w-[475px]    md:me-auto lg:ms-auto xl:ms-0  h-[655px] lg:h-[755px] z-10    drop-shadow-3xl -mt-20  lg:-mt-40 "
        src="/img/chip2.svg"
        loading="lazy"
        alt=""
      />
      <div className="my-6 sm:my-12 lg:my-0 lg:absolute left-0 bottom-0 xl:relative flex flex-row md:flex-col lg:flex-row  xl:flex-col gap-[20px] md:gap-[40px]">
        <div className=" flex  gap-[12px] md:gap-[30px] items-center">
          <img
            className=" rounded-full shadow-2xl shadow-[#00000089] rotate-[30deg] p-2 size-[80px] bg-[#206456]"
            src="/img/pepper.png"
            alt=""
          />
          <span className="text-[20px] hidden xs:inline font-semibold">
            CHILLI
          </span>
        </div>
        <div className="flex gap-[12px] md:gap-[30px] items-center">
          <img
            className="rounded-full shadow-2xl shadow-[#00000089] p-3 size-[80px] bg-[#D51037]"
            src="/img/corn.svg"
            alt=""
          />
          <span className="text-[20px] hidden xs:inline font-semibold">
            CORN
          </span>
        </div>
        <div className="flex gap-[12px] md:gap-[30px] items-center">
          <img
            className="rounded-full shadow-2xl shadow-[#00000089] p-5 size-[80px] bg-[#FDB339]"
            src="/img/fire.svg"
            alt=""
          />
          <span className="text-[20px] hidden xs:inline font-semibold">
            SPICES
          </span>
        </div>
      </div>
    </div>
  );
};

export default HeroRight;
