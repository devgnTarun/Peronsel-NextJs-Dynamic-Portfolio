import Form from "@/component/Form"

const page = () => {
    return (
        <div className="w-full flex-col items-center justify-center md:mt-[100px] mt-[80px] relative ">

            <Form />

            {/* gradient */}
            <div className="white__gradient absolute w-[150px] h-[150px] top-[40%] left-0 "></div>
            <div className="pink__gradient absolute w-[200px] h-[200px] bottom-0 right-0 "></div>
            <div className="pink__gradient absolute w-[200px] h-[200px] bottom-[50%] right-[50%] "></div>
            <div className="blue__gradient absolute w-[200px] h-[200px] bottom-[50%] right-[50%] "></div>
            <div className="blue__gradient absolute w-[200px] h-[200px] bottom-0 left-0 "></div>
        </div>
    )
}

export default page