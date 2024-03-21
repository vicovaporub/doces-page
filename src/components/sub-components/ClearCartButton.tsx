export const ClearCartButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <button
      onClick={onClick}
      className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600"
    >
      Clear Cart
    </button>
  );
};
