import {
  decreaseProductQuantityFromCart,
  increaseProductQuantityFromCart,
  removeProductFromCart,
  setProductQuantityInCart,
} from "@/redux/features/cartSlice";
import { useAppSelector } from "@/redux/store";
import { ProductType } from "@/types/ProductType";
import Image from "next/image";
import { useDispatch } from "react-redux";

export const CartOrder = () => {
  const dispatch = useDispatch();
  const products = useAppSelector((state) => state.cartReducer.products);

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

  const onQuantityChange = (product: ProductType, newQuantity: number) => {
    dispatch(setProductQuantityInCart({ product, quantity: newQuantity }));
  };

  return (
    <div className="p-4">
      <ul className="divide-y divide-gray-200">
        {products.map((product, index) => {
          return (
            <li key={index} className="py-4 flex items-center">
              <div className="flex-shrink-0 h-16 w-16">
                <Image
                  className="object-cover h-full w-full rounded-full shadow-lg border border-gray-200"
                  src={product.image}
                  alt={product.name}
                  width={64}
                  height={64}
                />
              </div>
              <div className="ml-4 flex-grow">
                <div className="flex justify-between">
                  <h1 className="text-lg font-medium w-28 capitalize">
                    {product.name}
                  </h1>
                  <p className="text-gray-600">
                    R$ {productBundlePrice(product)}
                  </p>
                </div>
                <div className="flex items-center mt-2">
                  <button
                    onClick={() => onDecreaseButtonClick(product)}
                    className="text-gray-500 hover:text-gray-700 text-xl px-2 py-1"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    min="0"
                    value={product.quantity}
                    onChange={(e) =>
                      onQuantityChange(product, parseInt(e.target.value))
                    }
                    className="w-10 text-center border border-gray-700 border-opacity-30 rounded-md focus:outline-none"
                  />
                  <button
                    onClick={() => onIncreaseButtonClick(product)}
                    className="text-gray-500 hover:text-gray-700 text-xl px-2 py-1"
                  >
                    +
                  </button>
                  <button
                    onClick={() => onRemoveProductClick(product)}
                    className="ml-auto text-red-500 hover:text-red-700"
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
    </div>
  );
};
