import {
  clearCart,
  decreaseProductQuantityFromCart,
  increaseProductQuantityFromCart,
  removeProductFromCart,
} from "@/redux/features/cartSlice";
import { useAppSelector } from "@/redux/store";
import { ProductType } from "@/types/ProductType";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { ClearCartButton } from "../buttons/ClearCartButton";

export const CartOrder = () => {
  const dispatch = useDispatch();
  const products = useAppSelector((state) => state.cartReducer.products);

  const onClearCartClick = () => {
    dispatch(clearCart());
  };

  const productBundlePrice = (product: ProductType) =>
    (product.price * (product.quantity || 0)).toFixed(2);

  const totalOrderPrice = products
    .reduce(
      (total, product) => total + product.price * (product.quantity || 0),
      0
    )
    .toFixed(2);

  const onIncreaseButtonClick = (product: ProductType) => {
    dispatch(increaseProductQuantityFromCart(product));
  };

  const onDecreaseButtonClick = (product: ProductType) => {
    dispatch(decreaseProductQuantityFromCart(product));
  };

  const onRemoveProductClick = (product: ProductType) => {
    dispatch(removeProductFromCart(product));
  };
  return (
    <>
      <ul className="divide-y divide-gray-200">
        {products.map((product, index) => {
          return (
            <li key={index} className="py-4 flex">
              <div className="flex items-center justify-center flex-none w-24">
                <Image
                  className="object-cover w-20 h-20 rounded-full shadow-lg border border-gray-200"
                  src={product.image}
                  alt={product.name}
                  width={80}
                  height={80}
                />
              </div>
              <div className="flex-grow ml-4 ">
                <div className="flex justify-between">
                  <h1 className="text-lg font-medium w-28  capitalize">
                    {product.name}
                  </h1>
                  <p className="text-gray-600">
                    R$ {productBundlePrice(product)}
                  </p>
                </div>
                <div className="flex items-center mt-2">
                  <button
                    onClick={() => onDecreaseButtonClick(product)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    -
                  </button>
                  <p className="mx-2">{product.quantity}</p>
                  <button
                    onClick={() => onIncreaseButtonClick(product)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    +
                  </button>
                  <button
                    onClick={() => onRemoveProductClick(product)}
                    className="ml-32 text-red-500 hover:text-red-700"
                  >
                    Remover Item
                  </button>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
      <p className="mt-8 text-lg font-bold">
        Total do Pedido: R$ {totalOrderPrice}
      </p>
      <ClearCartButton onClick={() => onClearCartClick()} />
    </>
  );
};
