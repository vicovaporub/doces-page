interface CartButtonProps {
  onClick: () => void;
}

export const AddToCartButton = ({ onClick }: CartButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="bg-gradient-to-r mt-3 from-green-600 to-blue-600 hover:from-green-400 hover:to-blue-400
          font-bold py-2 px-4 rounded transition duration-500 ease-in-out
          text-white"
    >
      Adicionar ao carrinho
    </button>
  );
};
