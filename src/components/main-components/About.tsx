import Image from "next/image";
import { dessertImages } from "../../../lib/data";
import displayCake from "../../../public/images/displayCake.png";

export const About = () => {
  const dataImgs = dessertImages;

  return (
    <>
      <div className="flex justify-between ">
        <div className="flex flex-col  sm:ml-[25vh]  h-[240px] w-[500px]">
          <h1 className="font-bold pt-[20vh] text-amber-800 text-[40px]">
            Doces da Carol
          </h1>
          <h2 className="py-10">
            Olá, essa aqui é a página dos asdoces da carol. Esse aqui é só um
            texto que eu to colocando para encher linguiça ta bom caroline?
          </h2>
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
            className="sm:h-[201px] sm:w-[666px] bg-orange-300 
  flex rounded-full m-10 items-center  bg-opacity-20 overflow-x-scroll
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
