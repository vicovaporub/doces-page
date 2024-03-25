import { OnClickButtonProps } from "@/types/OnClickButtonProps";

export const BackToCartButton = ({ onClick }: OnClickButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600"
    >
      Voltar ao Carrinho
    </button>
  );
};
