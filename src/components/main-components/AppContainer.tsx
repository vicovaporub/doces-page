import { Separator } from "../sub-components/Separator";
import { About } from "./About";
import { Products } from "./Products";

export const AppContainer = () => {
  return (
    <div>
      <About />
      <Separator />
      <Products />
    </div>
  );
};
