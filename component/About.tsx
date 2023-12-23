
const About = () => {
    return (
        <div className="w-full flex-col items-center justify-center md:mt-8 mt-[50px] relative">
            <h1 className="heading">About me</h1>
            <div>
                <p className="md:text-sm text-xs text-gray-300 text-center leading-[25px] my-8 w-[90%] mx-auto">Hi, Tarun Devgan this side. Experienced Freelancer developer,  delivering Dynamic Sites, Telegram/Discord/Whatsapp Automated Bots, Bulk emails and many more projects. I have well and good experience in technologies and always learning more technologies to improve and stand well at industry level. </p>
            </div>
            <div className="w-[90%] flex gap-[20px] flex-wrap justify-center my-6 mx-auto">
                <h1 className="text-2xl text-yellow-300 text-center leading-[55px]">10+ <span className="text-white text-xs flex">Client Project</span></h1>
                <h1 className="text-2xl text-yellow-300 text-center leading-[55px]">2+ <span className="text-white text-xs flex">Years Experience</span></h1>
                <h1 className="text-2xl text-yellow-300 text-center leading-[55px]">5+ <span className="text-white text-xs flex">SEO and Audit</span></h1>
            </div>
            <div className="white__gradient absolute w-[150px] h-[150px] bottom-0 left-10"></div>
        </div>
    )
}

export default About