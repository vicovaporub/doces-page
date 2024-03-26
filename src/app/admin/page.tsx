"use client";
import { AdminOrderList } from "@/components/main-components/AdminOrderList";
import { useAppSelector } from "@/redux/store";

export default function AdminPage() {
  const admin = useAppSelector(
    (state) => state.authReducer.value.isModerator === true
  );

  if (!admin) {
    return (
      <div>
        <h1>Você não tem permissão para acessar esta página!</h1>
      </div>
    );
  }

  return <AdminOrderList />;
}
