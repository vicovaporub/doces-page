import { Separator } from "../sub-components/Separator";
import { About } from "./About";
import { Products } from "./Products";

export const AppContainer = () => {
  return (
    <>
      <div
        className="bg-orange-100 sm:mt-20 absolute top-0 left-0 sm:left-[30rem] 
        z-[-10] h-screen w-screen sm:w-full rounded-full blur-[10rem] overflow-hidden"
      ></div>
      <About />
      <Separator />
      <Products />
    </>
  );
};
