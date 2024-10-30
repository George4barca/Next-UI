import Image from 'next/image'
import Arrow from '../../public/assets/arrow.png'

export function Cta() {
    return (
        <div className='rounded-[16px] bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 py-[56px] px-[32px] text-center lg:py-[60px] lg:px-[324px]'>
            <h1 className="text-white font-medium text-[32px] lg:text-[56px] leading-[][64px]">Monitor your website like a pro</h1>
            <p className="text-white font-medium mt-6 lg:text-[18px]">Join over 800+ happy site owners boosting productivity and efficiency</p>

            <div className="mt-10 flex flex-col w-full items-center lg:flex-row lg:gap-x-[40px] lg:justify-center">
                <button className="bg-white py-4 px-8 rounded text-pink-500 font-medium">Try for free</button>

                <button className='flex gap-x-5 pt-[32px] text-white font-medium lg:mt-0'>Contact Sales <span><Image src={Arrow} /></span></button>
            </div>
        </div>
    )
}