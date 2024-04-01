import Image from "next/image";
import { dessertImages } from "../../../lib/data";
import displayCake from "../../../public/images/displayCake.png";
import Link from "next/link";

export const About = () => {
  const dataImgs = dessertImages;

  return (
    <>
      <div className="flex relative justify-between ">
        <div
          className="bg-orange-100 sm:mt-20 absolute top-[-6rem] -z-10 sm:left-[30rem]
         sm:h-[55rem] sm:w-[100rem] rounded-full blur-[10rem] 
         "
        ></div>
        <div className="flex flex-col items-center  sm:ml-[25vh]  h-[240px] w-[500px]">
          <h1 className="font-bold pt-[20vh] text-amber-800 text-[40px]">
            Doces da Carol
          </h1>
          <h2 className="py-10">
            Olá, essa aqui é a página dos asdoces da carol. Esse aqui é só um
            texto que eu to colocando para encher linguiça ta bom caroline?
          </h2>
          <div className="flex justify-center gap-20">
            <Link
              className="bg-amber-900 text-white w-fit p-2 mt-16 rounded-xl hover:bg-amber-800"
              href="/products"
            >
              Produtos
            </Link>
            <Link
              className="bg-amber-900 text-white w-fit p-2 mt-16 rounded-xl hover:bg-amber-800"
              href=""
            >
              Pedido Personalizado
            </Link>
          </div>
        </div>
        <div className="flex flex-col">
          <Image
            className="sm:mr-10 sm:mt-16  px-2"
            src={displayCake}
            alt="display-cake"
            width={666}
            height={481}
          />
          <div
            className="sm:h-[201px] sm:w-[666px] bg-white
  flex rounded-full m-10 items-center  bg-opacity-30 overflow-x-scroll
  overflow-y-hidden custom-scrollbar p-2 "
          >
            {dataImgs.map((img) => (
              <Image
                className="m-2 p-2 rounded-full w-[150px] h-[150px]  object-cover"
                key={img.name}
                src={img.src}
                alt={img.alt}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
