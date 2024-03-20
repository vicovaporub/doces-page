import { CartButton } from "../sub-components/CartButton";
import { Separator } from "../sub-components/Separator";
import { About } from "./About";
import { CartContainer } from "./CartContainer";
import { Products } from "./Products";

export const AppContainer = () => {
  return (
    <div>
      <About />
      <CartContainer />
      <Separator />
      <Products />
    </div>
  );
};
