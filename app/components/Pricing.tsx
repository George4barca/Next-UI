import Image from 'next/image'
import Check from '../../public/assets/check.svg'

export function Pricing() {
    return (
        <div className='py-[48px] lg:py-[60px]'>
            <h1 className="text-[#172026] text-center font-medium text-2xl lg:text-[42px]">Flexible plans for you</h1>
            <p className="pt-[16px] pb-[40px] text-[#36485c] text-center lg:text-[18px]">No hidden fees</p>

            <div className="flex flex-col gap-y-6 lg:flex-row lg:gap-x-[24px]">
                <div className="w-full rounded-[8px] bg-[#f5f4ff] p-6 flex flex-col lg:justify-between">
                    <div>
                        <h3 className="font-medium text-[#4328eb] text-[18px] lg:text-xl">Free Trial</h3>
                        <p className="pt-3 text-[#36485c] lg:text-[18px]">Perfect for testing the waters</p>

                        <h2 className="mt-4 text-2xl font-medium lg:text-[32px]">0$ <span className="text-[#5f7986]">/mo</span></h2>

                        <ul className='flex flex-col gap-y-2 pt-4 text-[#5f7896]'>
                            <li className='flex items-center gap-x-2'><span><Image src={Check}/></span>Lorem ipsum dolor sit amet</li>
                            <li className='flex items-center gap-x-2'><span><Image src={Check}/></span>Lorem ipsum dolor sit amet</li>
                            <li className='flex items-center gap-x-2'><span><Image src={Check}/></span>Lorem ipsum dolor sit amet</li>
                        </ul>
                    </div>
                    <button className='mt-[16px] bg-white rounded-[4px] text-[#4328eb] font-medium'>Start Trial</button>
                </div>

                <div className="w-full rounded-[8px] bg-[#4328eb] p-6 flex flex-col">
                    <div>
                        <h3 className="font-medium text-white text-[18px] lg:text-xl">Business</h3>
                        <p className="pt-3 text-white lg:text-[18px]">Perfect for small businesses</p>

                        <h2 className="mt-4 text-2xl font-medium text-white lg:text-[32px]">$500  <span className="text-[#f4f8fa]">/mo</span></h2>

                        <ul className='flex flex-col gap-y-2 pt-4 text-[#5f7896]'>
                            <li className='flex items-center gap-x-2'><span><Image src={Check}/></span>Lorem ipsum dolor sit amet</li>
                            <li className='flex items-center gap-x-2'><span><Image src={Check}/></span>Lorem ipsum dolor sit amet</li>
                            <li className='flex items-center gap-x-2'><span><Image src={Check}/></span>Lorem ipsum dolor sit amet</li>
                            <li className='flex items-center gap-x-2'><span><Image src={Check}/></span>Lorem ipsum dolor sit amet</li>
                            <li className='flex items-center gap-x-2'><span><Image src={Check}/></span>Lorem ipsum dolor sit amet</li>
                        </ul>
                    </div>
                    <button className='mt-[16px] bg-white rounded-[4px] text-[#4328eb] font-medium'>Get Started</button>
                </div>

                <div className="w-full rounded-[8px] bg-[#f5f4ff] p-6 flex flex-col lg:justify-between">
                    <div>
                        <h3 className="font-medium text-[#4328eb] text-[18px] lg:text-xl">Enterprise</h3>
                        <p className="pt-3 text-[#36485c] lg:text-[18px]">Perfect for big companies</p>

                        <h2 className="mt-4 mb-4 text-2xl font-medium lg:text-[32px]">Custom </h2>
                        <p className='text-[#36485c]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis cum asperiores iste, explicabo ullam vel?</p>
                        <p className='mt-3 text-[#36485c]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi magnam laboriosam sunt natus vitae, est amet esse molestiae possimus doloribus!</p>
                    </div>
                    <button className='mt-[16px] bg-white rounded-[4px] text-[#4328eb] font-medium'>Contact Us</button>
                </div>
            </div>
        </div>
    )
}