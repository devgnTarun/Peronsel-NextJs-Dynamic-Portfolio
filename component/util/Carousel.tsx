'use client'

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel as ReactCarousel } from 'react-responsive-carousel';
import Image from "next/image";

const utils = [
    { src: '/project/weilder.png', alt: 'weilder' },
    { src: '/project/buying.png', alt: 'buying' },
    { src: '/project/discount.png', alt: 'discountify' },
    { src: '/project/data.png', alt: 'student data' },
    { src: '/project/ecom.png', alt: 'ecomm' },
    { src: '/project/bot.png', alt: 'bot' },
    { src: '/project/quiz.png', alt: 'quiz' },
    { src: '/project/jim.png', alt: 'jim' },
]

const Carousel = () => {
    return (
        <div className="hero-carousel">
            <ReactCarousel
                showThumbs={false}
                autoPlay
                infiniteLoop
                interval={2000}
                showArrows={false}
                showStatus={false}
            >
                {utils.map((e) =>
                    <Image src={e.src} alt={e.alt} width={1000} height={1000} className="object-contain h-[240px]" key={e.alt} />
                )}
            </ReactCarousel>
        </div>
    )
}

export default Carousel
