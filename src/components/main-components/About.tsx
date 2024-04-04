"use client";
import Image from "next/image";
import { dessertImages } from "../../../lib/data";
import displayCake from "../../../public/images/displayCake.png";
import Link from "next/link";
import { register } from "swiper/element/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

register();

export const About = () => {
  const dataImgs = dessertImages;

  return (
    <>
      <div className="sm:flex sm:relative sm:justify-between ">
        <div
          className="bg-orange-200 sm:hidden  mt-20 absolute top-[-10rem]
      z-[-10] h-[40rem] w-full rounded-full blur-[10rem]"
        ></div>
        <div
          className="sm:flex sm:flex-col justify-center
        sm:ml-[25vh] sm:h-[240px] mt-52 sm:mt-16  sm:pt-0 pt-8  sm:w-[500px]"
        >
          <h1 className="font-bold sm:pt-[20vh] text-center text-amber-800 text-[40px]">
            Doces da Carol
          </h1>
          <div className="sm:ml-0 ml-9 ">
            <p className="sm:py-10 p-4">
              Olá, essa aqui é a página dos asdoces da carol. Esse aqui é só um
              texto que eu to colocando para encher linguiça ta bom caroline?
            </p>
          </div>
          <div className="flex sm:flex-row flex-col sm:gap-20 items-center">
            <Link
              className="bg-amber-900 text-white w-fit p-2 sm:mt-16 mt-4 rounded-xl hover:bg-amber-800 transition"
              href="#products"
            >
              Produtos
            </Link>
            <Link
              className="bg-amber-900 text-white w-fit p-2 sm:mt-16 mt-4 mb-10 sm:mb-0 rounded-xl hover:bg-amber-800"
              href=""
            >
              Pedido Personalizado (disabled)
            </Link>
          </div>
        </div>
        <div className="flex sm:ml-40 flex-col items-center">
          <Image
            className="sm:mr-10 sm:relative absolute top-24 sm:top-0 sm:z-0 z-[-10] sm:mt-16 px-2 h-[210px] w-[280px] sm:h-[481px] sm:w-[666px]"
            src={displayCake}
            alt="display-cake"
            width={666}
            height={481}
          />
          <div
            className="sm:h-[200px] sm:w-[666px] w-[333px] h-[75px] bg-white
    flex rounded-full sm:m-10 m-2 items-center bg-opacity-30
    overflow-y-hidden p-4 border border-amber-700 border-opacity-40"
          >
            <Swiper
              slidesPerView={4}
              spaceBetween={10}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="flex sm:w-full sm:h-full p-8 rounded-full"
            >
              {dataImgs.map((img) => (
                <SwiperSlide key={img.name}>
                  <Image
                    className="m-2 p-1 rounded-full sm:w-[150px] sm:h-[150px] h-[60px] w-[60px] object-cover"
                    src={img.src}
                    alt={img.alt}
                    height={200}
                    width={200}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};
