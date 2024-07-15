import PropTypes from 'prop-types';

const FeaturesProductCard = ({ product }) => {
  return (
    <div className=" flex flex-col items-center lg:flex-row md:w-[117px] lg:w-[337px] h-[165px] relative">
      <img
        className=" w-[80px] xl:w-[120px] -top-28 -translate-x-1/2 lg:translate-x-0 left-1/2 lg:top-4 lg:left-0    scale-[1.6] xl:scale-125 h-[145px]  absolute  "
        src={product.src}
        alt=""
      />
      <div className="lg:ms-[57px] xl:ms-[87px] px-[10px] pb-[20px] pt-[40px]  lg:p-[17px_9px_16px_41px]  w-[217px] lg:w-[197px] xl:w-[217px] lg:h-[120px] xl:h-[135px] rounded-[20px] lg:rounded-e-[20px] bg-white">
        <h3 className="text-[16px] xl:text-[18px] font-bold">
          {product.title}
        </h3>
        <div className="flex justify-between ">
          <div className="flex gap-[2px] [&_img]:size-[14px] xl:[&_img]:size-[17px] mt-[4px] xl:mt-[9px]">
            <img src="/icon/star.svg" alt="" />
            <img src="/icon/star.svg" alt="" />
            <img src="/icon/star.svg" alt="" />
            <img src="/icon/star.svg" alt="" />
            <img src="/icon/star.svg" alt="" />
          </div>
          <span className="text-[17px] xl:text-[20px] font-bold mt-2 xl:mt-4 me-2">
            {product.price}$
          </span>
        </div>
        <button className="-mt-4 font-medium text-[12px] xl:text-[13px] rounded-full bg-[#FDB339] py-[8px] xl:py-[10px]  px-[13px] xl:px-[20px]">
          ORDER NOW
        </button>
      </div>
    </div>
  );
};

FeaturesProductCard.propTypes = {
  product: PropTypes.object,
}

export default FeaturesProductCard;
