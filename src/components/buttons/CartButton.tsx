import { OnClickButtonProps } from "@/types/OnClickButtonProps";

export const CartButton = ({ onClick }: OnClickButtonProps) => {
  return (
    <div
      className="fixed top-2 right-1 bg-white border p-2 border-black"
      onClick={onClick}
    >
      <h1>Carrinho</h1>
    </div>
  );
};
