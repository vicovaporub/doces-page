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
      <nav
        className="flex w-auto h-[75px] sm:gap-4 bg-white shadow-lg 
      sm:justify-between justify-center sm:px-16 text-amber-900 z-50"
      >
        <div className="flex items-center gap-3">
          <Link href="/">
            <Image
              className="sm:ml-4 ml-2 h-[75px] w-[90px] object-contain  "
              src="/images/carol_logo.png"
              alt="logo"
              width={100}
              height={100}
            />
          </Link>
          <div className="flex gap-4 sm:gap-8  ">
            <Link className="items-center text-center justify-center " href="/">
              <h1 className="font-bold text-l sm:text-xl">Home</h1>
            </Link>
            <Link
              className="items-center text-center justify-center flex"
              href="/user-orders"
            >
              <h1 className="font-bold text-l sm:text-xl">Pedidos</h1>
            </Link>
          </div>
        </div>
        <div className="flex gap-4 sm:gap-8 sm:m-0 m-4  sm:pr-0 items-center">
          <div className="flex items-center">
            <Login />
          </div>
          <div className="flex items-center">
            <CartContainer />
          </div>
        </div>
      </nav>
    </>
  );
};
