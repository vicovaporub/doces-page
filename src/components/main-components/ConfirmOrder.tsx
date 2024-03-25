import { useAppSelector } from "@/redux/store";
import { ProductType } from "@/types/ProductType";
import Image from "next/image";
import { PlaceOrderButton } from "../buttons/PlaceOrderButton";
import { BackToCartButton } from "../buttons/BackToCartButton";

export const ConfirmOrder = ({
  setIsCheckoutVisible,
}: {
  setIsCheckoutVisible: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const cartList = useAppSelector((state) => state.cartReducer.products);
  const user = useAppSelector((state) => state.authReducer.value);

  const productBundlePrice = (product: ProductType) => {
    return (product.price * (product.quantity || 0)).toFixed(2);
  };

  const orderPrice = cartList.reduce(
    (total, product) => total + product.price * (product.quantity || 0),
    0
  );

  const onPlaceOrderClick = () => {
    console.log(
      "TODO: Implementar a lógica de envio do pedido para o servidor"
    );
  };

  const onBackToCartButton = () => {
    setIsCheckoutVisible(false);
  };

  return (
    <div className="border border-gray-900 p-2 rounded-xl">
      <h1>Aqui estão todos os produtos que você adicionou ao carrinho!</h1>
      {cartList.map((product, index) => {
        return (
          <div key={index}>
            <div className="flex items-center mb-6 mt-8">
              <Image
                className="rounded-full object-cover object-center w-12 h-12"
                src={product.image}
                alt={product.name}
                width={100}
                height={100}
              />
              <div className="flex ml-4 flex-col ">
                <h1 className="font-bold capitalize text-center">
                  {product.name}
                </h1>
                <h1>Quantidade: {product.quantity}</h1>
                <h1>Preço: R${productBundlePrice(product)}</h1>
              </div>
            </div>
          </div>
        );
      })}
      <h1>TOTAL: R${orderPrice.toFixed(2)}</h1>
      <BackToCartButton onClick={onBackToCartButton} />
      <PlaceOrderButton onClick={onPlaceOrderClick} />
    </div>
  );
};
