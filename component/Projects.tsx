import Link from "next/link"
import Carousel from "./util/Carousel"

const Projects = () => {
    return (
        <div className="w-full flex-col items-center justify-center md:mt-[20px] mt-[80px] relative ">
            <h1 className="heading">Projects </h1>
            <div className="w-[90%] mx-auto  box_condition  items-center  ">

                <div className="md:w-[50%] w-[100%] flex-col items-center md:justify-start justify-center relative md:text-start text-center">
                    <p className="md:text-sm text-xs text-gray-300 md:text-start text-center  leading-[25px] my-3 w-[90%] mx-auto mb-4 ">There are some of my recent projects created using different stacks and created these all dynamic. I can't provide all client projects, as it includes some privacy. But showing some below which does includes keeping privacy of anything. Must checkout what i can do. </p>
                    <Link href='' className=' ml-4 text-gray-900 xs:text-md text-sm my-4 font-semibold px-8 py-2 rounded-3xl bg-indigo-300 border-b-4 border-indigo-500 hover:border-b-0  '> Check services</Link>
                    <div className="white__gradient absolute w-[200px] h-[200px] bottom-0 left-0"></div>
                </div>


                <div className="md:w-[50%] w-full relative flex items-center justify-center md:mt-[0px] mt-[20px]">
                    <div className="blue__gradient absolute w-[200px] h-[200px] bottom-0 right-0"></div>
                    <Carousel />
                </div>
            </div>
        </div>
    )
}

export default Projects