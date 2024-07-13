const Search = () => {
  return (
    <div className="bg-black flex justify-between items-center rounded-full w-[156px] xs:w-[206px] md:w-[306px] xl:w-[386px] py-[14px] px-[20px] xl:px-[30px] h-[54px] md:h-[74px]">
      <div className="flex  gap-[13px] items-center">
        <img
          className="size-[20px] xs:size-[30px] "
          src="/icon/search.svg"
          alt=""
        />
        <input
          className="w-full bg-transparent placeholder:text-white text-white outline-none xs:text-xl xl:text-2xl"
          type="text"
          placeholder="Search"
        />
      </div>
      <img
        className=" hidden md:block -ms-4 size-[40px] border-s ps-[14px]"
        src="/icon/shoppingbag.svg"
        alt=""
      />
    </div>
  );
};

export default Search;
