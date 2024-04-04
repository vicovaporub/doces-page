"use client";
import Link from "next/link";
import { Login } from "../sub-components/Login";
import Image from "next/image";
import { CartContainer } from "./CartContainer";

export const NavBar = () => {
  return (
    <>
      <nav
        className="flex w-[100%] h-[75px] sm:gap-4 bg-white shadow-lg 
      sm:justify-between justify-center sm:px-16 text-amber-900 z-50 sticky top-0"
      >
        <div className="flex items-center gap-3 mx-2">
          <Link href="/" className="sm:block hidden">
            <Image
              className="sm:ml-4 ml-2 h-[75px] w-[90px] object-contain p-1 "
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

          <Link href="/" className="sm:hidden block">
            <Image
              className="h-[75px] w-[90px] object-contain ml-2 p-1"
              src="/images/carol_logo.png"
              alt="logo"
              width={100}
              height={100}
            />
          </Link>
        </div>
        <div className="flex gap-1 sm:gap-8 sm:mr-0 mr-3  sm:pr-0 items-center">
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
