"use client";
import Link from "next/link";
import { Login } from "../sub-components/Login";
import { UserType } from "@/types/UserType";
import { useAppSelector } from "@/redux/store";

export const NavBar = () => {
  const user: UserType = useAppSelector((state) => state.authReducer.value);
  return (
    <>
      <nav className="flex justify-center gap-2 border h-8 border-gray-900">
        <h1>Olá {user.username}</h1>
        <Login />
        <Link href="/">
          <h1>Home</h1>
        </Link>
        <Link href="/about">
          <h1>About</h1>
        </Link>
        <Link href="/contact">
          <h1>Contact</h1>
        </Link>
        <Link href="/products">
          <h1>Products</h1>
        </Link>
      </nav>
    </>
  );
};
