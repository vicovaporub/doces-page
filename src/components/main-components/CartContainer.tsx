import { useEffect, useState, useRef } from "react";
import { CartButton } from "../buttons/CartButton";
import { CartOrder } from "./CartOrder";
import { CheckoutButton } from "../buttons/CheckoutButton";
import { OrderType } from "@/types/OrderType";
import { useAppSelector } from "@/redux/store";
import { checkoutOrder } from "@/redux/features/orderSlice";
import { useDispatch } from "react-redux";
import { ClearCartButton } from "../buttons/ClearCartButton";
import { clearCart } from "@/redux/features/cartSlice";
import { useRouter } from "next/navigation";

export const CartContainer = () => {
  const [order, setOrder] = useState({} as OrderType);
  const [isCartContainerHidden, setIsCartContainerHidden] = useState(true);
  const [isRedirecting, setIsRedirecting] = useState(false);
  const dispatch = useDispatch();
  const cartRef = useRef<HTMLDivElement>(null);

  const user = useAppSelector((state) => state.authReducer.value);
  const cartList = useAppSelector((state) => state.cartReducer.products);

  const router = useRouter();

  const orderPrice = cartList
    .reduce(
      (total, product) => total + product.price * (product.quantity || 0),
      0
    )
    .toFixed(2);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (cartRef.current && !cartRef.current.contains(event.target as Node)) {
        setIsCartContainerHidden(true);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (Object.keys(order).length !== 0) {
      dispatch(checkoutOrder(order));
    }
  }, [order, dispatch]);

  const onCartButtonClick = () => {
    setIsCartContainerHidden(!isCartContainerHidden);
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
      date: new Date().toLocaleString("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      }),
      status: "pending",
    }));

    setIsRedirecting(true);

    setTimeout(() => {
      router.push("/checkout");
      setIsCartContainerHidden(true);
      setIsRedirecting(false);
    }, 1000);

    window.scrollTo({ top: 0 });
  };

  return (
    <div ref={cartRef}>
      <CartButton onClick={onCartButtonClick} />
      {!isCartContainerHidden && (
        <div
          className="absolute top-[75px] right-1 sm:max-h-[80vh] sm:h-fit sm:w-[40vh] w-[80vw] bg-white
        border border-gray-100 sm:p-4 p-2 bg-opacity-90 overflow-hidden rounded-lg shadow-xl custom-scrollbar "
          style={{ zIndex: 999 }}
        >
          <CartOrder />
          <div className="flex sm:gap-0 gap-4 justify-center sm:mb-0 mb-2">
            <ClearCartButton onClick={() => dispatch(clearCart())} />
            <CheckoutButton onClick={onCheckoutClick} />
          </div>
          {isRedirecting && (
            <p className="text-center mt-4 text-gray-500">
              Redirecionando ao checkout...
            </p>
          )}
        </div>
      )}
    </div>
  );
};
