import Image from "next/image";
import { dessertImages } from "../../../lib/data";

export const About = () => {
  const dataImgs = dessertImages;
  return (
    <>
      <div className="bg-[url('/images/candyshop.jpg')] bg-cover bg-center flex justify-between">
        <div
          className="bg-white rounded-xl bg-opacity-75
         sm:flex-1 mt-5 mb-5 ml-5 sm:max-w-[20%] max-w-[40%] sm:h-60 sm:mt-[120px]"
        >
          <h1 className="text-2xl text-center">About</h1>
          <p className="m-5">
            Olá, essa aqui é a página dos asdoces da carol. Esse aqui é só um
            texto que eu to colocando para encher linguiça ta bom caroline?
          </p>
        </div>
        <div
          className="bg-white items-center rounded-xl bg-opacity-75
          sm:flex-1 mt-5 mb-5 mr-10 max-w-[50%]"
        >
          <h1 className="text-center text-2xl m-2">Aqui é foto do teus doce</h1>
          <div className=" grid grid-cols-2 gap-1 sm:justify-center sm:items-center">
            {dataImgs.map((img) => {
              return (
                <div key={img.name}>
                  <Image
                    src={img.src}
                    alt={img.alt}
                    className="rounded-xl sm:p-3 sm:ml-[5rem] h-20 w-20
                  sm:h-60 sm:w-[60%] object-cover sm:object-cover
                  sm:object-center m-2"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
