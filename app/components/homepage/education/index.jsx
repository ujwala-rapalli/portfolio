// @flow strict
import { educations } from "@/utils/data/educations";
import Image from "next/image";
import { BsPersonWorkspace } from "react-icons/bs";
// import lottieFile from '../../../assets/lottie/study.json';
// import AnimationLottie from "../../helper/animation-lottie";
// import GlowCard from "../../helper/glow-card";

function Education() {
  return (
    <div id="education" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      {/* Optional background image can be kept or removed */}
      {/* <Image
        src="/assets/svg/education/eduGreen.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      /> */}
  
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>
  
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Educations
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>
  
      <div className="py-8 flex justify-center">
        <div className="w-full md:w-4/5 lg:w-2/3 flex flex-col gap-6">
          {educations.map((education) => (
            <div
              key={education.id}
              className="p-5 relative text-white rounded-xl border border-[#2d2b45] hover:shadow-xl transition-all"
            >
              <Image
                src="/blur-23.svg"
                alt="Background blur"
                width={1080}
                height={200}
                className="absolute bottom-0 opacity-80"
              />
              <div className="flex justify-center">
                <p className="text-sm sm:text-base text-[#16f2b3]">
                  {education.duration}
                </p>
              </div>
              <div className="flex items-center gap-x-8 px-3 py-5">
                <div className="text-violet-500 transition-all duration-300 hover:scale-125">
                  <BsPersonWorkspace size={40} />
                </div>
                <div>
                  <p className="text-lg sm:text-2xl mb-2 font-semibold uppercase">
                    {education.title}
                  </p>
                  <p className="text-base sm:text-lg">{education.institution}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
  
}

export default Education;
