import { Code , Server , GitBranch , CheckCircle2 , TabletSmartphone , Braces  } from "lucide-react";
import Title from "../components/Title";

function Skills() {
  return (
    <>
      <div className="flex flex-col gap-y-12   md:gap-y-6">

            <Title first={'My'} second={'Skills'} description={'Technologies and tools I work with'} />

        
        
    
        <div className="container mx-auto   flex flex-col gap-y-6 lg:gap-y-12">
          
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            <div className="p-4 ps-8 border rounded-lg w-full flex flex-col gap-4  ">
              <div className="flex gap-x-3 items-center">
                <Code size={20} className=" text-sky-900"  />

               <h3 className="text-md md:text-lg font-semibold text-sky-900 ">  Frontend Development </h3>
              </div>
                <div className="ms-8 flex flex-col gap-y-2 ">
                    <div className=" text-sm flex gap-x-2 items-center capitalize"> <CheckCircle2   size={14} className="text-xs md:text-sm  font-normal tracking-wide"  /> html5</div>
                    <div className=" text-sm flex gap-x-2 items-center capitalize"> <CheckCircle2   size={14} className="text-xs md:text-sm  font-normal tracking-wide"  />css3  /  Tailwind</div>
                    <div className=" text-sm flex gap-x-2 items-center capitalize"> <CheckCircle2   size={14} className="text-xs md:text-sm  font-normal tracking-wide"  />javascript</div>
                    <div className=" text-sm flex gap-x-2 items-center capitalize"> <CheckCircle2   size={14} className="text-xs md:text-sm  font-normal tracking-wide"  />react</div>
                    <div className=" text-sm flex gap-x-2 items-center capitalize"> <CheckCircle2   size={14} className="text-xs md:text-sm  font-normal tracking-wide"  />next</div>
                    <div className=" text-sm flex gap-x-2 items-center capitalize"> <CheckCircle2   size={14} className="text-xs md:text-sm  font-normal tracking-wide"  />vue</div>
                </div>
            </div>
            
                        <div className="p-4 ps-8 border rounded-lg w-full flex flex-col gap-4  ">
                             <div className="flex gap-x-3 items-center">
                <Server size={20} className=" text-sky-900" />

               <h3 className="text-md md:text-lg font-semibold text-sky-900 "> Backend Development </h3>
              </div>
                <div className="ms-8 flex flex-col gap-y-2 ">
                    <div className=" text-sm flex gap-x-2 items-center capitalize"> <CheckCircle2   size={14} className="text-xs md:text-sm  font-normal tracking-wide"  /> Laravel</div>
                    <div className=" text-sm flex gap-x-2 items-center capitalize"> <CheckCircle2   size={14} className="text-xs md:text-sm  font-normal tracking-wide"  />Restful APIs</div>
                    <div className=" text-sm flex gap-x-2 items-center capitalize"> <CheckCircle2   size={14} className="text-xs md:text-sm  font-normal tracking-wide"  />OOP</div>
                    <div className=" text-sm flex gap-x-2 items-center capitalize"> <CheckCircle2   size={14} className="text-xs md:text-sm  font-normal tracking-wide"  />MVC</div>
                    <div className=" text-sm flex gap-x-2 items-center capitalize"> <CheckCircle2   size={14} className="text-xs md:text-sm  font-normal tracking-wide"  />MysqlDB</div>
                    <div className=" text-sm flex gap-x-2 items-center capitalize"> <CheckCircle2   size={14} className="text-xs md:text-sm  font-normal tracking-wide"  />Firebase</div>
                </div>
            </div>
                        
                        <div className="p-4 ps-8 border rounded-lg w-full flex flex-col gap-4  ">
               <div className="flex gap-x-3 items-center">
                <GitBranch size={20} className=" text-sky-900" />

               <h3 className="text-md md:text-lg font-semibold text-sky-900 "> Tools & Methods </h3>
              </div>
                <div className="ms-8 flex flex-col gap-y-2 ">
                    <div className=" text-sm flex gap-x-2 items-center capitalize"> <CheckCircle2   size={14} className="text-xs md:text-sm  font-normal tracking-wide"  /> Git</div>
                    <div className=" text-sm flex gap-x-2 items-center capitalize"> <CheckCircle2   size={14} className="text-xs md:text-sm  font-normal tracking-wide"  />Postman </div>
                    <div className=" text-sm flex gap-x-2 items-center capitalize"> <CheckCircle2   size={14} className="text-xs md:text-sm  font-normal tracking-wide"  />vs code</div>
                    <div className=" text-sm flex gap-x-2 items-center capitalize"> <CheckCircle2   size={14} className="text-xs md:text-sm  font-normal tracking-wide"  />figma</div>
                    <div className=" text-sm flex gap-x-2 items-center capitalize"> <CheckCircle2   size={14} className="text-xs md:text-sm  font-normal tracking-wide"  />npm</div>
                </div>
            </div>

            

           </div>

           <div className="grid grid-cols-1  lg:grid-cols-2 gap-4 md:gap-12">
              <div className="p-4 ps-8 border rounded-lg w-full flex flex-col gap-4  ">
                  <div className="flex items-center gap-x-3">
                      <TabletSmartphone  size={20} className=" text-sky-900" />
                  <h3 className="text-md md:text-lg font-semibold text-sky-900 ">    Responsive Design </h3>
                  </div>  
                    <p className="text-sm md:text-md mt-2 leading-relaxed ">
                       Creating beautiful, responsive websites that work perfectly on all devices - from mobile phones to large desktop screens.
                     </p>

              </div>

              <div className="p-4 ps-8 border rounded-lg w-full flex flex-col gap-4  ">
                  <div className="flex items-center gap-x-3">
                      <Braces  size={20} className=" text-sky-900" />
                    <h3 className="text-md md:text-lg font-semibold text-sky-900 ">  Modern Frameworks </h3>
                  </div>  
                    <p className="text-sm md:text-md mt-2 leading-relaxed ">
                      Experienced in building scalable applications using modern frameworks and following best practices for clean, maintainable code.
                     </p>
                
              </div>  
            </div>
            

        </div>
      </div>
    </>
  );
}

export default Skills;
