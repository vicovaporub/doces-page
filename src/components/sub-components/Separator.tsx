import Image from "next/image";
import logo from "../../../public/images/carol_logo.png";

export const Separator = () => {
  return (
    <div className="sm:h-[90px] h-fit flex justify-between sm:items-center sm:mt-24 mt-10 mb-10 items-center  sm:mb-[9rem] sm:gap-0 gap-8">
      <h1 className="text-center sm:ml-[20vw] ml-2 font-bold justify-center text-amber-900 sm:text-[40px]">
        Doces
      </h1>
      <div className=" inset-0 flex justify-center items-center sm:mx-20  h-fit ">
        <Image
          src={logo}
          alt="logo"
          width={100}
          height={100}
          className="w-full h-auto object-cover "
        />
      </div>
      <p className="text-amber-900 sm:max-w-[30vw] sm:mr-[5vw] ">
        Uma descriçãozinha de como é feito os doces e outras coisas
      </p>
    </div>
  );
};
