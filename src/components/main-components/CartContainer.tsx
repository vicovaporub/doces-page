import { useState } from "react";
import { CartButton } from "../buttons/CartButton";
import { CartOrder } from "./CartOrder";
import { CheckoutButton } from "../buttons/CheckoutButton";
import { ConfirmOrder } from "./ConfirmOrder";

export const CartContainer = () => {
  const [isCartContainerHidden, setIsCartContainerHidden] = useState(true);
  const [isCheckoutVisible, setIsCheckoutVisible] = useState(false);

  const onCartButtonClick = () => {
    setIsCartContainerHidden(!isCartContainerHidden);
    setIsCheckoutVisible(false);
  };

  const onPlaceOrderClick = () => {
    setIsCheckoutVisible(true);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <CartButton onClick={onCartButtonClick} />
      {!isCartContainerHidden && (
        <div className="fixed top-12 right-1 h-[80vh] w-[40vh] bg-white p-4 bg-opacity-90 overflow-auto rounded-lg shadow-lg">
          {isCheckoutVisible === false ? (
            <>
              <CartOrder />
              <CheckoutButton onClick={onPlaceOrderClick} />
            </>
          ) : (
            <ConfirmOrder setIsCheckoutVisible={setIsCheckoutVisible} />
          )}
        </div>
      )}
    </div>
  );
};
