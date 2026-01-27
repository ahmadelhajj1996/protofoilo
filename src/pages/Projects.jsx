import { Eye } from "lucide-react";
import Title from "../components/Title";

function Projects() {
  return (
    <div className="flex flex-col gap-y-12    md:gap-y-6">
      <Title
        first={"My"}
        second={"Websites"}
        description={
          "Websites, landing pages, and full web apps I have built from scratch"
        }
      />

      <div className="grid grid-cols-1 gap-3 gap-y-9 md:grid-cols-2  xl:grid-cols-3  ">
        <div className="group mx-auto w-full overflow-hidden rounded-lg border">
          <a target="_blank" href="#" className=" cursor-pointer">
            <div className="relative overflow-hidden">
              <img
                className=" h-64 w-[96%] mx-auto pt-1  object-cover object-center transition-transform duration-500 group-hover:scale-105"
                src="https://cdn.getyourguide.com/image/format=auto,fit=crop,gravity=center,quality=60,width=265,height=195,dpr=2/tour_img/abd552e610dc9d4d991bdde89b8cec3403b0ac85f4fa098892946fdde262d640.jpg"
                alt="Website project"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-sky-900/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

              <div className="absolute cursor-pointer bottom-3 right-2 flex translate-y-4 items-center gap-1 rounded-lg bg-white p-2  opacity-0 shadow-lg  transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <Eye className="h-4 w-4 text-sky-900" />
                <span className="text-xs font-medium text-sky-900">
                  View Demo
                </span>
              </div>
            </div>
          </a>

          <div className="flex flex-col gap-y-3 p-4 pb-8">
            <h3 className="text-md md:text-lg font-semibold  text-sky-900">Project Title</h3>
            <p className="text-xs md:text-sm  font-normal tracking-wide">
              Description of the project goes here. A brief overview of what
              this project accomplishes and the technologies used.
            </p>

            <div className=" grid grid-cols-3 gap-2 text-center text-sm ">
              <span className="rounded-lg border text-xs md:text-sm tracking-wide p-2 border-sky-900">
                React
              </span>
              <span className="rounded-lg border text-xs md:text-sm tracking-wide p-2 border-sky-900">
                Tailwind
              </span>
              <span className="rounded-lg border text-xs md:text-sm tracking-wide p-2 border-sky-900">
                Vite
              </span>
              <span className="rounded-lg border text-xs md:text-sm tracking-wide p-2 border-sky-900">
                TypeScript
              </span>
              <span className="rounded-lg border text-xs md:text-sm tracking-wide p-2 border-sky-900">
                Node.js
              </span>
              <span className="rounded-lg border text-xs md:text-sm tracking-wide p-2 border-sky-900">
                MongoDB
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
