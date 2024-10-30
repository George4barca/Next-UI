import Image from "next/image";
import logo from "../../public/assets/logo.svg";
import profile from "../../public/assets/profile.svg"
import menu from "../../public/assets/menu.svg"

const navLinks = [
    { name: "Features"},
    { name: "Pricing"},
    { name: "Enterprise"},
    { name: "Careers"},
];

export function Navbar() {
    return (
        <nav className="flex w-full items-center justify-between px-[20px] py-[16px] lg:container lg:mx-auto lg:px-20">
            <div className="flex gap-5">
                <Image className="mr-6" src={logo} alt="Logo"/>

                <div className="hidden lg:flex lg:gap-5 items-center">
                    {navLinks.map((item, index) => (
                        <li className="list-none font-medium text-[#36485c]" key={index}>{item.name}</li>
                    ))}
                </div>
            </div>

            <div className="flex gap-5 items-center">
                <p className="hidden lg:block font-medium text-[#36485c] mr-6">Open an Account</p>
                <div className="flex items-center gap-5">
                <Image src={profile} alt="profile" />
                <span className="hidden font-medium text-[#36485c] lg:block">Sign In</span>
                </div>
                
                <Image className="lg:hidden" src={menu} alt="Menu" />
            </div>
        </nav>
    );
}