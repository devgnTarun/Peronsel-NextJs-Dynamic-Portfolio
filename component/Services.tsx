import { ServiceType } from "@/types";

const Services = () => {

    const services: ServiceType[] = [
        {
            title: "Full Stack Website Development",
            description: "Crafting comprehensive, dynamic websites from front-end design to back-end functionality. Utilizing MERN, NEXTJS, EXPRESS, TYPESCRIPT, TAILWIND, ANGULAR, FIREBASE, and AWS for robust and scalable solutions.",
            skills: ["MERN Stack", "NEXTJS", "Express", "TypeScript", "Tailwind CSS", "Angular", "Firebase", "AWS"],
            features: ["Payment Integration", "Real-time Chat", "Real-time Tracking", "Notifications", "Email and Bot Automation"]
        },
        {
            title: "Website SEO and Audit ",
            description: "Enhance website visibility and performance through in-depth SEO strategies and meticulous audits. Elevate search engine rankings and optimize website functionality for an unparalleled user experience.",
            skills: ["SEO Strategies", "Website Auditing", "Search Engine Optimization", "Analytics Tools"],
            features: ["Keyword Research", "Competitor Analysis", "On-page & Off-page SEO", "Technical SEO Audit", "Performance Optimization"]
        },
        {
            title: "Flutter App Development",
            description: "Building high-quality, cross-platform mobile apps with Flutter. Harnessing the power of Dart programming language, delivering seamless and engaging user experiences across various devices.",
            skills: ["Flutter", "Dart", "Cross-Platform Development", "Mobile UI/UX Design"],
            features: ["Responsive UI", "Device Compatibility", "Offline Support", "Push Notifications", "Integration with Device Hardware"]
        },
        {
            title: "Node.js Automated Bot Development",
            description: "Developing automated bots using Node.js to streamline tasks and enhance efficiency. Implementing innovative solutions to automate processes and interactions across platforms.",
            skills: ["Node.js", "Bot Development", "Automation", "API Integration"],
            features: ["Scalability", "Task Scheduling", "Error Handling", "Data Security", "Integration with External APIs"]
        },
        {
            title: "Custom Automation Solutions",
            description: "Providing tailored automation solutions for platforms like Telegram, WhatsApp, Discord, bulk email sending, and email template design. Simplify complex tasks and improve workflow efficiency.",
            skills: ["Automation Scripts", "Telegram Bot", "WhatsApp Bot", "Discord Bot", "Bulk Email Sending", "Email Template Design"],
            features: ["Custom Scripting", "User Interaction Handling", "Analytics & Reporting", "A/B Testing", "Template Customization"]
        }
    ];


    return (
        <div className="w-full flex-col items-center justify-center mt-[80px] relative min-h-screen">
            <h1 className="heading">What I Offer!</h1>
            <div className="white__gradient absolute w-[200px] h-[200px] top-[50%] left-0"></div>
            <div className="blue__gradient absolute w-[200px] h-[200px] top-[5%] right-0"></div>
            <div className="purple__gradient absolute w-[200px] h-[200px] top-[50%] right-[50%]"></div>
            <div className=" w-[90%] mx-auto flex flex-wrap my-[60px] gap-[30px] justify-center items-center">
                {
                    services?.map((e: ServiceType) => {
                        return (
                            <div key={e.title} className=" blurry scroll_div ss:w-[280px] w-full h-[280px]  flex-grow px-6 py-4 rounded-2xl overflow-y-scroll">
                                <h3 className="text-white  text-lg  font-semibold rounded-xl px-1 py-2 mb-3 text-center ">{e.title}</h3>
                                <p className="text-gray-300 text-xs text-center leading-[20px] mb-2">{e.description}</p>
                                {/* Skills  */}
                                <h4 className="text-xs py-1 px-4 font-bold   w-[100px] rounded-3xl my-2 text-center text-white">
                                    Skills
                                </h4>
                                {
                                    e.skills?.map((e: any) => {
                                        return (
                                            <li className="text-gray-400 text-xs list-disc" key={e}>{e}</li>
                                        )
                                    })
                                }
                                {/* Features  */}
                                <h4 className="text-xs py-1 px-4 font-bold  w-[130px] rounded-3xl my-2 text-center text-white">
                                    Features
                                </h4>
                                {
                                    e.features?.map((e: any) => {
                                        return (
                                            <li className="text-gray-400 text-xs list-disc" key={e}>{e}</li>
                                        )
                                    })
                                }
                            </div>
                        )
                    })
                }
            </div>
            <div className="pink__gradient absolute w-[200px] h-[200px] bottom-0 right-0"></div>
        </div>
    )
}

export default Services