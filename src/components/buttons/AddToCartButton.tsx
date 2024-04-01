import { OnClickButtonProps } from "@/types/OnClickButtonProps";

export const AddToCartButton = ({ onClick }: OnClickButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="bg-amber-900 hover:bg-amber-800 mt-4
          font-bold py-2 px-3 rounded-xl transition duration-500 ease-in-out
          text-white"
    >
      Adicionar ao carrinho
    </button>
  );
};
