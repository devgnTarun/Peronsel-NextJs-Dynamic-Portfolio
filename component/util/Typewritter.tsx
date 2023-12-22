'use client'
import Typewriter from 'typewriter-effect';


const Typewritter = () => {

    const options = {
        strings: ['Full Stack Developer', 'Blockchain Enthusiast', 'Freelancer'],
        autoStart: true,
        pause: 1000,
        loop: true,
    }
    return (
        <div >
            <Typewriter options={options} />
        </div>
    )
}

export default Typewritter