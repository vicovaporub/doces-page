import Image from "next/image";
import logo from "../../../public/images/carol_logo.png";

export const Separator = () => {
  return (
    <div className="h-[90px] flex justify-between items-center m-5 relative">
      <h1 className="text-center ml-[20vw] font-bold justify-center text-amber-900 text-[40px]">
        Doces
      </h1>
      <div className="absolute inset-0 flex justify-center items-center mx-20">
        <Image src={logo} alt="logo" width={100} height={100} />
      </div>
      <p className="text-amber-900 max-w-[30vw] mr-[5vw] ">
        Uma descriçãozinha de como é feito os doces e outras coisas
      </p>
    </div>
  );
};
