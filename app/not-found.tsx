import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'

const NotFound = () => {
    return (
        <div className="w-[100%]  min-h-[80vh] flex justify-center items-center relative">
            <div className="text-center ">
                <FontAwesomeIcon className='w-[100px] h-[100px] text-yellow-400 mx-auto ' icon={faCircleExclamation} />
                <p className="text-gray-300 my-8 text-sm">404 Page not found. </p>
                <Link href={'/'} className='w-full text-gray-900 xs:text-md text-sm my-4 font-semibold px-8 py-2 rounded-3xl bg-yellow-300 border-b-4 border-yellow-500  disabled:opacity-[0.5]'>Go Back</Link>
            </div>
            {/* gradient */}
            <div className="white__gradient absolute w-[150px] h-[150px] top-[40%] left-0 "></div>
            <div className="pink__gradient absolute w-[200px] h-[200px] bottom-0 right-0 "></div>
            <div className="pink__gradient absolute w-[200px] h-[200px] bottom-[50%] right-[50%] "></div>
            <div className="blue__gradient absolute w-[200px] h-[200px] bottom-[50%] right-[50%] "></div>
            <div className="blue__gradient absolute w-[200px] h-[200px] bottom-0 left-0 "></div>
        </div>
    )
}

export default NotFound