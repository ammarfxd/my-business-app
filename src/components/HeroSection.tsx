import Image from "next/image";
import aku from "../../public/aku.png";

import { FacebookIcon } from "./ui/icons/lucide-facebook";
import { InstagramIcon } from "./ui/icons/lucide-instagram";
import { LinkedinIcon } from "./ui/icons/lucide-linkedin";
import { Button } from "./ui/button";
import { ArrowUpRightIcon } from "./ui/icons/lucide-arrow-up-right";

const HeroSection = () => {
  return (
    <div>
      <div className="relative w-full h-svh bg-white container mx-auto">
        {/* background */}
        <div className="absolute top-20 left-10 w-3 h-3 bg-green-500 rounded-full"></div>
        <div className="absolute top-10 left-30 w-2 h-2 bg-red-500 rounded-full"></div>
        <div className="absolute top-30 left-35 w-4 h-4 bg-blue-500 rounded-full"></div>
        <div className="absolute top-1 left-100 w-2 h-2 bg-blue-500 rounded-full"></div>
        <div className="absolute top-10 left-120 w-2 h-2 bg-slate-400 rounded-full"></div>
        <div className="absolute top-3 left-150 w-4 h-4 bg-blue-500 rounded-full"></div>
        <div className="absolute top-30 left-110 w-4 h-4 bg-green-600 rounded-full"></div>
        <div className="absolute top-45 left-90 w-2 h-2 bg-green-500 rounded-full"></div>
        <div className="absolute top-70 left-110 w-4 h-4 bg-red-500 rounded-full"></div>
        <div className="absolute top-60 left-130 w-3 h-3 bg-blue-500 rounded-full"></div>
        <div className="absolute top-50 left-145 w-3 h-3 bg-yellow-200 rounded-full"></div>
        <div className="absolute top-65 left-150 w-3 h-3 bg-green-500 rounded-full"></div>
        <div className="absolute bottom-10 left-50 w-4 h-4 bg-green-500 rounded-full"></div>
        <div className="absolute bottom-15 left-20 w-4 h-4 bg-red-500 rounded-full"></div>
        <div className="absolute bottom-30 left-40 w-2 h-2 bg-blue-500 rounded-full"></div>
        <div className="absolute bottom-40 left-45 w-4 h-4 bg-yellow-300 rounded-full"></div>
        <div className="absolute bottom-45 left-25 w-2 h-2 bg-green-500 rounded-full"></div>
      </div>

      <div className="flex flex-col items-center justify-center w-1/2 absolute inset-y-0 left-0 ml-20 mt-10">
        <div className="flex flex-col items-start">
          <div className="text-start inline-block px-4 py-1 border border-green-400 text-green-500 rounded-full font-bold mb-3">
            Welcome
          </div>
          <div className="space-y-2">
            <h1 className="text-5xl font-bold tracking-tight">
              Freelance <span className="text-green-600">Web Designer</span> &
            </h1>
            <h1 className="text-5xl font-bold tracking-tight">
              <span className="text-green-600">Developer</span> for Hire.
            </h1>
          </div>
          <div className="pt-4">
            <p className="text-foreground/80 font-semibold">
              I'm Ammar, a creative Web Designer and Developer. I've been
              helping businesses <br /> to solve their problems with my
              experiences.
            </p>
          </div>

          <div className="mt-10 space-x-5 flex items-center justify-center">
            <Button className="py-5 px-6">Contact Me</Button>
            <div className="flex items-center justify-center">
              <a href="#" className="font-semibold">
                View My Work
              </a>
              <ArrowUpRightIcon className="text-green-500" />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-y-0 right-0 w-1/2 justify-center flex items-center ">
        <div className="relative w-[500px] h-[500px] mt-15">
          <div className="absolute top-8 left-10 w-[380px] h-[380px] bg-green-500 rounded-sm"></div>
          <div className="absolute top-23 left-0 w-[380px] h-[380px] border-4 rounded-sm border-black"></div>
          <Image
            src={aku}
            alt="Portrait of Ammar"
            className="absolute -top-21 left-16 w-[330px] h-[380px]object-cover"
            priority
          />
        </div>
        <div className="flex flex-col items-center gap-4 justify-center ">
          <p className="text-green-500 rotate-90 origin-center mb-8">
            Follow me on:
          </p>

          <div className="w-px h-16 bg-green-300"></div>

          <div className="flex flex-col items-center gap-4">
            <a
              href="#"
              className="w-8 h-8 bg-green-500 text-white rounded-md flex items-center justify-center"
            >
              <FacebookIcon />
            </a>

            <a
              href="#"
              className="w-8 h-8 bg-green-500 text-white rounded-md flex items-center justify-center"
            >
              <InstagramIcon />
            </a>

            <a
              href="#"
              className="w-8 h-8 bg-green-500 text-white rounded-md flex items-center justify-center"
            >
              <LinkedinIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
