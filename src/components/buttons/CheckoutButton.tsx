import { OnClickButtonProps } from "@/types/OnClickButtonProps";

export const CheckoutButton = ({ onClick }: OnClickButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="bg-green-500 text-white p-2 rounded-md hover:bg-green-600"
    >
      Revisar pedido
    </button>
  );
};
