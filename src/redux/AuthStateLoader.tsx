"use client";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadAuthState } from "@/redux/features/authSlice";

export default function AuthStateLoader({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadAuthState());
  }, [dispatch]);

  return children;
}
