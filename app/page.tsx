import About from '@/component/About'
import Skill from '@/component/Skill'
import Button from '@/component/util/Button'
import Typewritter from '@/component/util/Typewritter'
import { faGithub, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {

  return (
    <>
      <div className="w-full items-center justify-center  lg:min-h-[100vh] min-h-[40vh] xs:px-4 px-2 box_condition">
        {/* Left div  */}
        <div className="md:w-[50%] w-[100%] flex-col items-center md:justify-start justify-center md:text-start text-center relative">
          <h1 className='text-white xs:text-4xl text-3xl xs:leading-[55px] leading-[45px] font-semibold'>Hi I'm <br /> <span className='text-yellow-300'>Tarun Devgan</span> <br />  <Typewritter /></h1>
          <Button />
          <div className="w-full flex gap-[30px] my-4 items-center md:justify-start justify-center ">
            <Link className='text-white text-md hover:text-black' href={'https://github.com/devgnTarun'} target='_blank'><FontAwesomeIcon icon={faGithub} className='xs:w-[30px] w-[25px] xs:h-[30px] h-[25px]' /></Link>
            <Link className='text-white text-md hover:text-red-600' href={'https://www.youtube.com/channel/UCIHoRXRtf5xdJWTIVR9M24Q'}><FontAwesomeIcon icon={faYoutube} className='xs:w-[30px] w-[25px] xs:h-[30px] h-[25px]' /></Link>
            <Link className='text-white text-md hover:text-blue-500' href={'https://www.linkedin.com/in/tarun-devgan-0b8013235/'}><FontAwesomeIcon icon={faLinkedin} className='xs:w-[30px] w-[25px] xs:h-[30px] ' /></Link>
          </div>
          <div className="white__gradient absolute w-[200px] h-[200px] top-0 left-0 "></div>
        </div>
        {/* Right div  */}
        <div className="md:w-[50%] w-[100%] relative flex items-center justify-center md:mt-0 mt-[40px]  ">
          <Image className='xs:w-[400px] w-[300px]' src={'/image/tarun.png'} alt='logo' width={500} height={500} />
          <div className="cursor-pointer w-[200px] h-[50px] rounded-xl  flex items-center justify-start  gap-[10px] bg-gray-900 absolute top-0 right-0 animated shadow_gradient_blue">
            <Image className='w-[30px] ml-2' width={100} height={100} src={'/image/algorithm.png'} alt='daily' />  <h3 className='text-white text-sm '> Gaming with code</h3>
          </div>
          <div className="cursor-pointer w-[200px] h-[50px] rounded-xl  flex items-center justify-start  gap-[10px] bg-gray-900 absolute bottom-0 left-0 animated shadow_gradient_pink ">
            <Image className='w-[30px] ml-2' width={100} height={100} src={'/image/application.png'} alt='daily' />  <h3 className='text-white text-sm '> Blockchain Enthusiast </h3>
          </div>
          {/* <div className="pink__gradient absolute w-[200px] h-[200px] bottom-0 right-0"></div> */}
        </div>
      </div>

      {/* Other sections  */}
      <About />
      <Skill />
    </>
  )
}
