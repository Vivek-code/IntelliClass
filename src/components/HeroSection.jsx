import pic1 from "../assets/pic1.png";
import pic2 from "../assets/pic2.jpg";

const HeroSection = () => {
    return (
        <div className="flex flex-col items-center mt-6 lg:mt-20">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
                <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">Go Paperless </span> 
                Education System
            </h1>
            <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
            Transforms learning by using digital tools, reducing paper waste, and promoting eco-friendly practices. It enhances accessibility, efficiency, and sustainability, creating a smarter, greener future for education.
            </p>
            <div className="flex justify-center my-10">
                <a href="#" className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md">
                    Start for free
                </a>
                <a href="#" className="py-3 px-4 mx-3 rounded-md border">
                    Documentation
                </a>
            </div>
            <div className="flex mt-10 justify-center">
            <img src={pic1} alt="" srcset="" className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4"/>
            <img src={pic2} alt="" srcset="" className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4"/>
            </div>
        </div>
    )
};

export default HeroSection;