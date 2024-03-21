import Link from "next/link";
import { Login } from "../sub-components/Login";

export const NavBar = () => {
  return (
    <>
      <nav className="flex justify-center gap-2 border h-8 border-gray-900">
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
