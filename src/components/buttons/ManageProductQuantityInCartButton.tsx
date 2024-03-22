interface ManageProductQuantityButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

export const ManageProductQuantityInCartButton = ({
  onClick,
  children,
}: ManageProductQuantityButtonProps) => {
  return <button onClick={onClick}>{children}</button>;
};
