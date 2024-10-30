import Image from 'next/image';
import Arrow from '../../public/assets/arrow.svg';
import Gradient from '../../public/assets/Gradient.svg';
import HeroImage from '../../public/assets/Image.svg';
import Google from '../../public/assets/Google.svg';
import Slack from '../../public/assets/Slack.svg';
import Truspilot from '../../public/assets/Trustpilot.svg';
import Cnn from '../../public/assets/CNN.svg';
import Cluch from '../../public/assets/Clutch.svg';
export function Hero() {
    return (
        <div className='pt-4 lg:pt-10'>
            <div className='px-[20px] lg:px-[390px]'>
                <h1 className="hero">Start monitoring your website like a pro</h1>
                <p className="text-center mt-5 text-[#36485c] font-medium lg:text-[18px] lg:leading-7">Get a bird's eye view with our customizable dashboard. Stay on top of things! Revamp your work process with our game-changing feature. Boost productivity and efficiency!</p>

                <div className='flex gap-4 mt-8 justify-center gap-x-6'>
                    <button className="bg-[#4328eb] w-1/2 text-white py-4 px-8 rounded-[4px] lg:w-fit">Try for free</button>
                    <button className="text-[#4328eb] w-1/2 flex items-center gap-2 lg:w-fit">View Pricing <span><Image src={Arrow} alt="Arrow"/></span> </button>
                </div>
            </div>

            <div className='relative flex h-full w-full justify-center'>
                <Image src={Gradient} alt="Gradient" className='min-h-[500px] object-cover lg:h-auto'/>
                <div className='absolute flex-col bottom-5'>
                    <Image src={HeroImage} alt="HeroImage" className='-ml-4 h-[310px] sm:-mb-20 sm:h-[400px] lg:-mb-28 lg:h-auto xl-w-[70%]'/>

                    <div className='flex w-full flex-col items-center lg:container lg:flex-grow lg:justify-between lg:px-20'>
                        <p className='text-center text-white font-medium'>Trusted by these companies</p>
                        <div className='grid grid-cols-3 items-center justify-items-center px-[20px] align-middle lg:grid-cols-5'>
                            <Image src={Google} alt='Google'/>
                            <Image src={Slack} alt='Slack'/>
                            <Image src={Truspilot} alt='Truspilot'/>
                            <Image src={Cnn} alt='CNN'/>
                            <Image src={Cluch} alt='Cluch'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

