import Image from 'next/image'
import Feature1 from '../../public/assets/feature-1.svg'
import Feature2 from '../../public/assets/feature-2.svg'
import Feature3 from '../../public/assets/feature-3.svg'
import Check from '../../public/assets/check.svg'
import blueButton from '../../public/assets/blue-button.svg'
import greenButton from '../../public/assets/green-button.svg'
import pinkButton from '../../public/assets/pink-button.svg'

export function Features() {
    return (
        <div className="flex flex-col gap-y-[56px] py-[56px] lg:py-[120px] lg:gap-y-[80px]">
            <div className="flex flex-col gap-x-6 sm:flex-row-reverse">
                <Image src={Feature1} alt='feature Image 1' className='hidden w-1/2 sm:block'/>
                <div className='sm:w-1/2 lg:py-[56px] lg:pr-[56px]'>
                    <h3 className="font-medium text-[#0082ff] lg:text-[18px]">Sales Monitoring</h3>
                    <h1 className="pt-[12px] text-2xl font-medium text-[#172026] lg:text-[42px] lg:leading-[58px]">Simplify your sales monitoring</h1>
                    <Image src={Feature1} alt='feature1' className='pt-[24px] sm:hidden' />
                    <p className='py-[24px] text-[#36585c] lg:text-[18px]'>Stay on top of things and revamp your work process with our game-changing feature. Get a bird's eye view with our customizable dashboard</p>

                    <ul className='flex flex-col gap-y-3 lg:text-[18px]'>
                        <li className='features'>
                            <span><Image src={Check} alt='check'/></span>
                            Lorem ipsum dolor sit amet
                        </li>
                        <li className='features'>
                            <span><Image src={Check} alt='check'/></span>
                            Lorem ipsum dolor sit amet
                        </li>
                        <li className='features'>
                            <span><Image src={Check} alt='check'/></span>
                            Lorem ipsum dolor sit amet
                        </li>
                    </ul>

                    <p className='flex gap-2 mt-6 font-medium text-[#0085ff] lg:text-[18px]'>Learn More <span><Image src={blueButton} alt='learn more'/></span></p>
                </div>
            </div>

            <div className="flex flex-col gap-x-6 sm:flex-row">
                <Image src={Feature2} alt='feature Image 1' className='hidden w-1/2 sm:block'/>
                <div className='sm:w-1/2 lg:py-[56px] lg:pl-[56px]'>
                    <h3 className="font-medium text-[#00a424] lg:text-[18px]">Customer Support</h3>
                    <h1 className="pt-[12px] text-2xl font-medium text-[#172026] lg:text-[42px] lg:leading-[58px]">Get in touch with your customers</h1>
                    <Image src={Feature2} alt='feature1' className='pt-[24px] sm:hidden' />
                    <p className='py-[24px] text-[#36585c] lg:text-[18px]'>Stay on top of things and revamp your work process with our game-changing feature. Get a bird's eye view with our customizable dashboard</p>

                    <ul className='flex flex-col gap-y-3 lg:text-[18px]'>
                        <li className='features'>
                            <span><Image src={Check} alt='check'/></span>
                            Lorem ipsum dolor sit amet
                        </li>
                        <li className='features'>
                            <span><Image src={Check} alt='check'/></span>
                            Lorem ipsum dolor sit amet
                        </li>
                        <li className='features'>
                            <span><Image src={Check} alt='check'/></span>
                            Lorem ipsum dolor sit amet
                        </li>
                    </ul>

                    <p className='flex gap-2 mt-6 font-medium text-[#00a424] lg:text-[18px]'>Learn More <span><Image src={greenButton} alt='learn more'/></span></p>
                </div>
            </div>

            <div className="flex flex-col gap-x-6 sm:flex-row-reverse">
                <Image src={Feature3} alt='feature Image 1' className='hidden w-1/2 sm:block'/>
                <div className='sm:w-1/2 lg:py-[56px] lg:pr-[56px]'>
                    <h3 className="font-medium text-[#eb2891] lg:text-[18px]">Growth Monitoring</h3>
                    <h1 className="pt-[12px] text-2xl font-medium text-[#172026] lg:text-[42px] lg:leading-[58px]">Monitor your site's new subscribers</h1>
                    <Image src={Feature3} alt='feature1' className='pt-[24px] sm:hidden' />
                    <p className='py-[24px] text-[#36585c] lg:text-[18px]'>Stay on top of things and revamp your work process with our game-changing feature. Get a bird's eye view with our customizable dashboard</p>
                    <div className='flex w-full gap-x-[24px]'>
                        <div className='flexy'>
                            <h3 className='heading'>100+</h3>
                            <p className='text-[#36485c]'>Lorem ipsum dolor sit</p>
                        </div>
                        <div className='flexy'>
                            <h3 className='heading'>800+</h3>
                            <p className='text-[#36485c]'>Conse adopiscing elit</p>
                        </div>
                    </div>
                    <p className='flex gap-2 mt-6 font-medium text-[#eb2891] lg:text-[18px]'>Learn More <span><Image src={pinkButton} alt='learn more'/></span></p>
                </div>
            </div>
        </div>
    )
}