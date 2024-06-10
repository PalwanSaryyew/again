import { ucFormater } from "@/utils/formater";
import PriceUiFormater from "@/utils/price-ui-formater";
import { uc_product } from "@prisma/client";
import Image from "next/image";
import { CiShoppingCart } from "react-icons/ci";

const ProductCard = async ({ cost, pic, price, bgcolor }: uc_product) => {
  return (
    <div className="bg-card pcard group rounded-lg overflow-hidden shadow-md hover:shadow-2xl hover:scale-105 transition">
      {/* Image  container*/}
      <div className="p-4 bg-gradient-to-b from-yellow-500 to-primary relative">
        <div className="relative w-40 h-40">
          <Image
            src={pic ? pic : "/products/more-uc.png"}
            fill
            alt={"product image"}
            className="object-contain"
          />
        </div>
      </div>

      {/* info box & shp card */}
      <div className="relative">
        {/* info  box*/}
        <div className="flex flex-col gap-1 p-2">
          {/* cost */}
          <div className="flex">
            <div className="text-2xl">{ucFormater(cost)}</div>
            <div className="bg-primary text-primary-foreground px-[.5rem] items-center rounded-md ml-auto flex">
              UC
            </div>
          </div>

          {/* price */}
          <div className="flex items-center">
            <div className="relative ">
              <PriceUiFormater price={price} />
            </div>
            <span className="bg-secondary text-secondary-foreground px-[.4rem] py-[.2rem] flex items-center rounded-md ml-auto">
              TMT
            </span>
          </div>
        </div>
        {/* shp card */}
        <div className="car-card group-hover:w-full transition-all overflow-hidden">
          <CiShoppingCart
            className="stroke-primary fill-transparent stroke-1"
            size={40}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
