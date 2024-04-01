import { useAppSelector } from "@/redux/store";
import { OnClickButtonProps } from "@/types/OnClickButtonProps";
import cartIcon from "../../../public/cartIcon.svg";
import Image from "next/image";

export const CartButton = ({ onClick }: OnClickButtonProps) => {
  const productsQuantity = useAppSelector((state) =>
    state?.cartReducer.products.reduce(
      (total, product) => total + (product.quantity || 0),
      0
    )
  );

  return (
    <div
      className="relative flex justify-center sm:h-[60px] cursor-pointer sm:w-[60px] h-[1000px] w-[50px]"
      onClick={onClick}
    >
      <Image
        src={cartIcon}
        width={50}
        height={50}
        style={{ height: "auto" }}
        alt="cart-icon"
      />
      {productsQuantity > 0 && (
        <div
          className="absolute sm:bottom-[7px] bottom-[14px] left-[28px] sm:left-[32px] bg-red-500
         text-white rounded-full sm:w-[23px] w-[22px]
         sm:h-[20px] h-[20px] flex justify-center items-center"
        >
          {productsQuantity}
        </div>
      )}
    </div>
  );
};
