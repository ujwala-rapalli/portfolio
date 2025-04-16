import { experiences } from "@/utils/data/experience";
import Image from "next/image";
import { BsPersonWorkspace } from "react-icons/bs";

function Experience() {
  return (
    <div id="experience" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Experiences
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="py-8 flex justify-center">
        <div className="w-full md:w-4/5 lg:w-2/3 flex flex-col gap-6">
          {experiences.map((experience) => (
            <div
              key={experience.id}
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
                  {experience.duration}
                </p>
              </div>
              <div className="flex items-center gap-x-8 px-3 py-5">
                <div className="text-violet-500 transition-all duration-300 hover:scale-125">
                  <BsPersonWorkspace size={40} />
                </div>
                <div>
                  <p className="text-lg sm:text-2xl mb-2 font-semibold uppercase">
                    {experience.title}
                  </p>
                  <p className="text-base sm:text-lg font-semibold text-gray-400">
                    {experience.company}
                  </p>
                  <p className="text-sm sm:text-base text-gray-300 mt-2">
                    {experience.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
