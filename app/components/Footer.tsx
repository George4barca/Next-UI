import Image from 'next/image';
import Logo from '../../public/assets/Logo.svg'
import Facebook from '../../public/assets/Facebook.svg'
import Feed from '../../public/assets/Feed.svg'
import Twitter from '../../public/assets/X.svg'

export function Footer() {
    return (
        <div className='mt-[80px] mb-[40px]'>
            <div className='flex items-center justify-center gap-x-[12px]'>
                <Image src={Logo} alt='Logo'/>
                <p className='font-bold text-[#36485c] text-[17px]'>George-Benson</p>
            </div> 

            <ul className='flex flex-col items-center gap-y-[32px] pt-[56px] text-[#36485c] sm:flex-row sm:justify-center sm:gap-x-5 sm:pt-5'>
                <li>Features</li>
                <li>Pricing</li>
                <li>Enterprise</li>
                <li>Careers</li>
            </ul>
            <p className='mt-[56px] text-center text-[14px] font-medium text-[#5f7896]'>&#169; Copyright 2024. All rights reserved</p>

            <div className='flex items-center justify-center gap-x-[56px] mt-[40px]'>
                <Image src={Facebook} alt='Facebook' />
                <Image src={Twitter} alt='Twitter' />
                <Image src={Feed} alt='Feed' />
            </div>
        </div>
    )
}