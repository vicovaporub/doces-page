import { OnClickButtonProps } from "@/types/OnClickButtonProps";

export const PlaceOrderButton = ({ onClick }: OnClickButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="bg-amber-500 hover:bg-amber-600 ml-4 mt-4
      font-bold py-2 px-3 rounded-xl transition duration-500 ease-in-out
      text-white"
    >
      Fazer Pedido
    </button>
  );
};
