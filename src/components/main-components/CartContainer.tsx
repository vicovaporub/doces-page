import { useEffect, useState } from "react";
import { CartButton } from "../buttons/CartButton";
import { CartOrder } from "./CartOrder";
import { CheckoutButton } from "../buttons/CheckoutButton";
import { ConfirmOrder } from "./ConfirmOrder";
import { OrderType } from "@/types/OrderType";
import { useAppSelector } from "@/redux/store";
import { checkoutOrder } from "@/redux/features/orderSlice";
import { useDispatch } from "react-redux";

export const CartContainer = () => {
  const [order, setOrder] = useState({} as OrderType);
  const [isCartContainerHidden, setIsCartContainerHidden] = useState(true);
  const [isCheckoutVisible, setIsCheckoutVisible] = useState(false);
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);
  const dispatch = useDispatch();

  const user = useAppSelector((state) => state.authReducer.value);
  const cartList = useAppSelector((state) => state.cartReducer.products);

  const orderPrice = cartList
    .reduce(
      (total, product) => total + product.price * (product.quantity || 0),
      0
    )
    .toFixed(2);

  useEffect(() => {
    if (Object.keys(order).length !== 0) {
      dispatch(checkoutOrder(order));
      setIsCheckoutVisible(true);
    }
  }, [order, dispatch]);

  const onCartButtonClick = () => {
    setIsCartContainerHidden(!isCartContainerHidden);
    setIsCheckoutVisible(false);
  };

  const onCheckoutClick = () => {
    if (user.isLogged === false) {
      console.log("Você precisa estar logado para fazer um pedido!");
      return;
    }

    const orderItems = cartList.map((product) => ({
      name: product.name,
      price: product.price.toFixed(2),
      quantity: product.quantity || 0,
    }));

    setOrder((prevOrder) => ({
      ...prevOrder,
      username: user.username,
      phone: user.phone,
      order: orderItems,
      total: orderPrice,
    }));
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <CartButton onClick={onCartButtonClick} />
      {!isCartContainerHidden && (
        <div className="fixed top-12 right-1 h-[80vh] w-[40vh] bg-white p-4 bg-opacity-90 overflow-auto rounded-lg shadow-lg">
          {isCheckoutVisible === false ? (
            <>
              {isOrderPlaced ? (
                <h1>Pedido realizado com sucesso!</h1>
              ) : (
                <>
                  <CartOrder />
                  <CheckoutButton onClick={onCheckoutClick} />
                </>
              )}
            </>
          ) : (
            <ConfirmOrder
              setIsCheckoutVisible={setIsCheckoutVisible}
              setIsOrderPlaced={setIsOrderPlaced}
            />
          )}
        </div>
      )}
    </div>
  );
};
