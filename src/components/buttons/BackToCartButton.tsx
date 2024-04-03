import { OnClickButtonProps } from "@/types/OnClickButtonProps";

export const BackToCartButton = ({ onClick }: OnClickButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="bg-red-800 hover:bg-red-700 mt-4
      font-bold py-2 sm:px-3 px-2 rounded-xl transition duration-500 ease-in-out
      text-white sm:mr-6 mr-2"
    >
      Voltar ao Carrinho
    </button>
  );
};
