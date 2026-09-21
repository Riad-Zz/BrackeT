import { Link, NavLink } from "react-router";
import WebsiteLogo from "@/assets/MainLogo.png";
import { AuroraText } from "@/components/ui/aurora-text";
import { LiaCcVisa } from "react-icons/lia";
import { FaCcAmex, FaFacebook, FaInstagramSquare, FaLinkedin, FaYoutube } from "react-icons/fa";
import { Particles } from "@/components/ui/particles";

const Footer = () => {
    const auraColor = [
        "#dffb15",
        "#dffb15",
        "#dffb15",
        "#ffffff",
        "#ffffff",
        "#dffb15",
        "#dffb15",
    ];

    // CSS-like classes for the link hover state requested
    const linkHoverStyle = "inline-block border-b border-transparent hover:font-bold hover:border-accent hover:text-foreground transition-all duration-200 pb-0.5";

    return (
        <footer className="w-full py-12 bg-background relative">

            <div className="w-11/12 xl:max-w-7xl mx-auto flex flex-col gap-8  bg-primary/70 rounded-2xl p-8 lg:p-12  relative z-10">

                {/* Top Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

                    {/* Brand & Contact Column */}
                    <div className="flex flex-col space-y-5">
                        <div className="flex items-center justify-start gap-3">
                            <img src={WebsiteLogo} alt="Website Logo" className="w-12 h-12 object-contain" />
                            <h2 className="font-bold text-2xl tracking-wider">
                                <AuroraText colors={auraColor}>
                                    <span className="text-3xl">B</span>rackeT
                                </AuroraText>
                            </h2>
                        </div>

                        <div className="text-sm text-card-foreground/80 space-y-4 mt-2">
                            <p>support@bracket.io</p>
                            <p className="leading-relaxed">
                                Helpline : +880 1122-30881, +88012567222111, <br />
                                01234-567890 <br />
                                (Available : 10AM - 5PM)
                            </p>
                        </div>
                    </div>

                    {/* Useful Links Column */}
                    <div className="flex flex-col space-y-5">
                        <h3 className="text-lg font-bold ">Useful Links</h3>
                        <ul className="flex flex-col">
                            <li className="font-medium text-[16px] mb-2 text-card-foreground/80">
                                <NavLink to={"/"} className={linkHoverStyle}>Home</NavLink>
                            </li>
                            <li className="font-medium text-[16px] mb-2 text-card-foreground/80">
                                <NavLink to={"/problem"} className={linkHoverStyle}>Problem</NavLink>
                            </li>
                            <li className="font-medium text-[16px] mb-2 text-card-foreground/80">
                                <NavLink to={"/rival"} className={linkHoverStyle}>Rival</NavLink>
                            </li>
                            <li className="font-medium text-[16px] mb-2 text-card-foreground/80">
                                <NavLink to={"/interview"} className={linkHoverStyle}>Interview</NavLink>
                            </li>
                            <li className="font-medium text-[16px] mb-2 text-card-foreground/80">
                                <NavLink to={"/about"} className={linkHoverStyle}>About</NavLink>
                            </li>
                        </ul>
                    </div>

                    {/* Social & App Download Column */}
                    <div className="flex flex-col space-y-8">
                        <div>
                            <h3 className="text-lg font-bold  mb-4">Social Media Link</h3>
                            <div className="flex items-center space-x-5">

                                <Link to={"#"} aria-label="Facebook" className="hover:scale-110 transition-transform">
                                    <FaFacebook size={30} className="" />
                                </Link>
                                <Link to={"#"} aria-label="Instagram" className="hover:scale-110 transition-transform">
                                    <FaInstagramSquare size={30} className="" />
                                </Link>
                                <Link to={"#"} aria-label="LinkedIn" className="hover:scale-110 transition-transform">
                                    <FaLinkedin size={30} className="" />
                                </Link>
                                <Link to={"#"} aria-label="YouTube" className="hover:scale-110 transition-transform">
                                    <FaYoutube size={30} className="" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <hr className="border-t  w-full mt-4" />

                {/* Bottom Section */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 text-sm text-card-foreground/80">

                    {/* Payment Methods */}
                    <div className="flex flex-wrap items-center gap-4">
                        <span className="font-semibold text-card-foreground mr-2">Pay With</span>
                        <div className="flex items-center gap-3">
                            {/* Original Brand Colors - Added subtle white background to dark blue icons so they pop on your dark card background */}
                            <LiaCcVisa size={36} className="text-[#1434CB] bg-white rounded-sm px-0.5 hover:scale-105 transition-transform cursor-pointer" />
                            <FaCcAmex size={32} className="text-[#2671B9] bg-white rounded-sm px-0.5 hover:scale-105 transition-transform cursor-pointer" />
                        </div>
                    </div>

                    {/* Meta Information */}
                    <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-4 sm:gap-8 w-full lg:w-auto lg:justify-end">
                        <span>Trade License: 124154</span>
                        <span>Copyright © 2026 BrackeT.io</span>
                        <span>beta v0.0.1</span>
                    </div>
                </div>

            </div>
            {/* Paticale Effect Section  */}
            <Particles
                className="absolute inset-0 z-0"
                quantity={90}
                ease={80}
                refresh
            />
        </footer>
    );
};

export default Footer;