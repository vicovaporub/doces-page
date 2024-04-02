import { Separator } from "../sub-components/Separator";
import { About } from "./About";
import { Products } from "./Products";

export const AppContainer = () => {
  return (
    <div>
      <div
        className="bg-orange-100 sm:mt-20 absolute sm:top-[-6rem] sm:left-[30rem] 
      sm:z-[-10] sm:h-[55rem] sm:w-full rounded-full blur-[10rem]"
      ></div>
      <About />
      <Separator />
      <Products />
    </div>
  );
};
