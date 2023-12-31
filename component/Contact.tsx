import Form from "./Form"

const Contact = () => {

    return (
        <div className="w-full flex-col items-center justify-center md:mt-[20px] mt-[80px] relative ">
            <h1 className="heading">Contact </h1>

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

export default Contact