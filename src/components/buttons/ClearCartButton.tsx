import { OnClickButtonProps } from "@/types/OnClickButtonProps";

export const ClearCartButton = ({ onClick }: OnClickButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="text-red-500 border border-red-500 hover:bg-red-700 hover:text-white mt-4
      font-bold py-2 px-3 rounded-xl transition duration-500 ease-in-out
       sm:mr-4"
    >
      Limpar Carrinho
    </button>
  );
};
