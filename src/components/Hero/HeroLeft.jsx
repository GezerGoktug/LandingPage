import { useState } from "react";

const HeroLeft = () => {
  const [quantity, setQuantity] = useState(5);
  return (
    <div className="md:w-[590px] relative z-20">
      <h1
        style={{ lineHeight: "100px" }}
        className="font-bold text-[75px] xxs:text-[80px] "
      >
        FLAMIN HOT NACHOS
      </h1>
      <p className="text-[25px] text-zinc-400">
        Presenting the Classic Nachos with a Flaming Hot Twist. It will Rock
        your taste buds with Chilli & Lime.
      </p>
      <img
        className="hidden xs:block size-[180px] sm:size-[200px] absolute 
        top-[5%] right-0 md:right-[1%]  lg:-right-[5%] xl:right-[5%] "
        src="/img/pepper.png"
        alt=""
      />
      <div className="flex flex-col-reverse sm:flex-row gap-[48px] sm:gap-[32px] md:gap-[52px]  mt-[52px]">
        <button className="flex gap-6 cursor-pointer  items-center bg-black rounded-full w-[245px] h-[76px] p-[7px_24px_7px_7px]">
          <img
            className="size-[62px] overflow-visible rounded-full p-[17px] bg-gradient-to-r from-[#FFD154] to-[#FFC936]"
            src="/icon/shoppingcart.svg"
            alt="Shopping Cart Icon"
          />
          <div className="text-[20px] font-medium text-white">ADD TO CART</div>
        </button>
        <div className="flex gap-[24px] items-center text-[30px]">
          <div
            onClick={() =>
              setQuantity((prv) => {
                return prv === 20 ? prv : prv + 1;
              })
            }
            className="cursor-pointer bg-white p-[14px_23px_13px_23px] size-[62px] flex justify-center items-center shadow rounded-full"
          >
            +
          </div>
          <div className=" bg-white p-[12px_21px_11px_20px] outline outline-[2px] outline-offset-[9px] outline-orange-300  size-[62px] flex justify-center items-center shadow rounded-full">
            {quantity}
          </div>
          <div
            onClick={() =>
              setQuantity((prv) => {
                return prv === 1 ? prv : prv - 1;
              })
            }
            className="cursor-pointer bg-white p-[14px_23px_13px_23px] size-[62px] flex justify-center items-center shadow rounded-full"
          >
            -
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroLeft;
