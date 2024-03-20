interface CartButtonProps {
  onClick: () => void;
}

export const CartButton = ({ onClick }: CartButtonProps) => {
  return (
    <div
      className="fixed top-2 right-1 bg-white border p-2 border-black"
      onClick={onClick}
    >
      <h1>Carrinho</h1>
    </div>
  );
};
