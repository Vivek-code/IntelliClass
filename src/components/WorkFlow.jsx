import { CheckCircle, CheckCircle2 } from "lucide-react";
import pic4 from "../assets/pic4.png";
import { checklistItems } from "../constants";
const WorkFlow = () => {
  return (
    <div className="mt-20">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">Streanline Your
            <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text"> Education Workflow.</span> 
        </h2>
        <div className="flex flex-wrap justify-center">
            <div className="my-20 p-6 w-full lg:w-1/2 flex justify-center lg:order-first">
                <img src={pic4} alt="" srcset="" />
            </div>
            <div className="pt-12 w-full lg:w-1/2 lg:ml-[-75px]">
                {checklistItems.map((item, index) => (
                    <div key={index} className="flex mb-12">
                        <div className="text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
                            <CheckCircle2 />
                        </div>
                        <div>
                            <h5 className="mt-1 mb-2 text-xl">{item.title}</h5>
                            <p className="text-md text-neutral-500">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default WorkFlow