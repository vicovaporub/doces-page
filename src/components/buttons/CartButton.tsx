import { useAppSelector } from "@/redux/store";
import { OnClickButtonProps } from "@/types/OnClickButtonProps";

export const CartButton = ({ onClick }: OnClickButtonProps) => {
  const productsQuantity = useAppSelector((state) =>
    state?.cartReducer.products.reduce(
      (total, product) => total + (product.quantity || 0),
      0
    )
  );

  return (
    <div
      className="fixed top-2 right-1 bg-white border p-2 border-black"
      onClick={onClick}
    >
      <h1>Carrinho ({productsQuantity})</h1>
    </div>
  );
};
