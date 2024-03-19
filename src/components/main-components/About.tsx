import Image from "next/image";
import { dessertImages } from "../../../lib/data";

export const About = () => {
  const dataImgs = dessertImages;
  return (
    <>
      <div className="bg-[url('/images/candyshop.jpg')] bg-cover bg-center flex justify-between">
        <div className="sm:flex grid w-full sm:w-[100%] justify-center items-center">
          <div
            className="bg-white justify-center items-center rounded-xl bg-opacity-75
           mt-5 mb-5 sm:max-w-[20%] w-[80%] sm:h-60 sm:mt-20 mx-auto"
          >
            <h1 className="text-2xl text-center">About</h1>
            <p className="m-5">
              Olá, essa aqui é a página dos asdoces da carol. Esse aqui é só um
              texto que eu to colocando para encher linguiça ta bom caroline?
            </p>
          </div>
          <div
            className="bg-white items-center rounded-xl bg-opacity-75
           mt-5 mb-5 sm:max-w-[50%] w-[80%] mx-auto"
          >
            <h1 className="text-center text-2xl m-2">
              Aqui é foto do teus doce
            </h1>
            <div className="grid grid-cols-2 justify-items-center items-center">
              {dataImgs.map((img) => {
                return (
                  <div key={img.name}>
                    <Image
                      src={img.src}
                      alt={img.alt}
                      className="rounded-full sm:p-3 sm:ml-[5rem] w-20 h-20
        sm:h-60 sm:w-60 object-cover sm:object-cover
        sm:object-center m-2"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
