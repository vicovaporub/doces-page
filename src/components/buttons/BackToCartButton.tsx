import { OnClickButtonProps } from "@/types/OnClickButtonProps";

export const BackToCartButton = ({ onClick }: OnClickButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="bg-red-800 hover:bg-red-700 mt-4
      font-bold py-2 px-3 rounded-xl transition duration-500 ease-in-out
      text-white mr-6"
    >
      Voltar ao Carrinho
    </button>
  );
};
