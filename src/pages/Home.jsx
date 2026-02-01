import { useRef, useCallback } from "react";
import Title from "../components/Title";
import { Download } from "lucide-react";

function Home() {
  const buttonRef = useRef(null);
  const fullName = "Eng. Ahmad Elhaj";
  const title = "Full Stack Web Developer";
  const description =
    "I'm a passionate fullstack developer with a love for creating beautiful, functional web applications. With expertise in modern technologies like React, vue.js, and Laravel, I bring ideas to life through clean code . excel at transforming complex requirements into dynamic , responsive , and intuitive user experiences that drive engagement and growth.";

  const downloadCV = useCallback(() => {
    const button = buttonRef.current;
    if (!button) return;

    button.classList.add("button-click");
    setTimeout(() => {
      button.classList.remove("button-click");
    }, 150);

    // Create a temporary link element
    const link = document.createElement("a");

    link.href = `/Ahmad.pdf`;

    // Set the download filename
    link.download = "Ahmad_Elhaj.pdf";

    // Append to document, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Optional: Log for debugging
    console.log("Downloading CV...");
  }, []);
  return (
    <>
      <div className="flex flex-col gap-y-12     md:gap-y-6">
        <Title
          first={"My"}
          second={"Profile"}
          description={"Get to know more about me"}
        />

        <div className="container mx-auto  flex flex-col gap-y-6 lg:gap-y-12">
          <div className="grid grid-cols-1 ">
            <div className=" ps-4 py-6  rounded-lg">
              <div className="px-4    w-full flex flex-col gap-y-3 tracking-wider border-l  ">
                <h1 className=" text-2xl md:text-3xl font-bold">{fullName}</h1>
                <h3 className=" text-md md:text-lg font-semibold">{title}</h3>
                <p className=" text-sm md:text-md mt-2 leading-relaxed">
                  {description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
          ref={buttonRef}
          className="mt-4 md:mt-8 download-button w-auto flex items-center justify-center gap-2 mx-auto border-[1px] rounded-2xl px-8 py-4 text-sm sm:text-base md:text-lg font-semibold text-white transition-all duration-300 shadow-xl hover:shadow-2xl hover:bg-gradient-to-r from-cyan-600 via-sky-600 to-blue-500  active:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed "
           onClick={downloadCV}
          aria-label="Download CV"
        >
          <Download size={18} />
          <div className="text-sm md:text-base">Download Resume</div>
        </button>
  
    </>
  );
}

export default Home;
