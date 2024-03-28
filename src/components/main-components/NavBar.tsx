"use client";
import Link from "next/link";
import { Login } from "../sub-components/Login";
import { UserType } from "@/types/UserType";
import { useAppSelector } from "@/redux/store";
import Image from "next/image";
import { CartContainer } from "./CartContainer";

export const NavBar = () => {
  const user: UserType = useAppSelector((state) => state.authReducer.value);

  return (
    <>
      <nav className="flex h-[75px] sm:gap-4 gap-4 bg-white sm:justify-between justify-center px-4 sm:px-2 lg:px-16">
        <Image
          className="ml-4 p-1 h-[75px] w-[90px] object-contain sm:ml-[10vw] lg:ml-0"
          src="/images/carol_logo.png"
          alt="logo"
          width={100}
          height={100}
        />
        <div className="flex gap-4 lg:gap-8">
          <Link
            className="items-center text-center justify-center flex "
            href="/"
          >
            <h1 className="font-bold text-l sm:text-xl sm:mr-[20vw]">Home</h1>
          </Link>
          <Link
            className="items-center text-center justify-center flex"
            href="/user-orders"
          >
            <h1 className="font-bold text-l sm:text-xl">Pedidos</h1>
          </Link>
        </div>
        <div className="flex gap-4 lg:gap-8 pr-4 sm:pr-0">
          <div className="items-center text-center justify-center flex">
            <Login />
          </div>
          <div className="flex mr-4 flex-col items-center justify-center">
            <CartContainer />
          </div>
        </div>
      </nav>
    </>
  );
};
