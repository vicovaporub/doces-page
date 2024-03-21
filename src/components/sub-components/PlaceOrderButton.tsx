export const PlaceOrderButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <button
      onClick={onClick}
      className="bg-green-500 text-white p-2 rounded-md hover:bg-green-600"
    >
      Place Order
    </button>
  );
};
