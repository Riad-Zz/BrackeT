import { Button } from "@/components/ui/button";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { NavLink } from "react-router";
import MainLogo from "@/assets/MainLogo.png";
import { AuroraText } from "@/components/ui/aurora-text";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
    const allLinks = (
        <>
            <NavigationMenuItem className={"font-medium text-[16px] mb-1 text-[#e2e2e2cc]"}>
                <NavLink to={"/"}>Home</NavLink>{" "}
            </NavigationMenuItem>
            <NavigationMenuItem className={"font-medium text-[16px] mb-1 text-[#e2e2e2cc]"}>
                <NavLink to={"/problem"}>Problem</NavLink>
            </NavigationMenuItem>
            <NavigationMenuItem className={"font-medium text-[16px] mb-1 text-[#e2e2e2cc]"}>
                <NavLink to={"/rival"}>Rival</NavLink>
            </NavigationMenuItem>
            <NavigationMenuItem className={"font-medium text-[16px] mb-1 text-[#e2e2e2cc]"} >
                <NavLink to={"/interview"}>Interview</NavLink>
            </NavigationMenuItem>
            <NavigationMenuItem className={"font-medium text-[16px] mb-1 text-[#e2e2e2cc]"}>
                <NavLink to={"/about"}>About</NavLink>
            </NavigationMenuItem>
        </>
    );
    const auraColor = [
        "#ffffff",
        "#eefed1",
        "#dffb15",
        "#4bc69d",
        "#38bdf8",
        "#0052d8",
        "#d8ecff",
        "#ffffff",
    ];

    return (
        <div>
            <NavigationMenu className={`max-w-11/12 xl:max-w-7xl m-auto my-1 `}>
                <NavigationMenuList className={`flex gap-10 justify-between items-center py-1`}>
                    {/* Left Side  */}
                    {/* Left -> Sidebar for Mobile Naviagation  */}
                    <div className="flex items-end justify-center">
                        <img src={MainLogo} alt="Website Logo" className="w-13 h-13" />
                        <p className="font-bold font-special text-xl hidden lg:block">
                            <AuroraText colors={auraColor}>
                                <span className="text-2xl">B</span>rackeT
                            </AuroraText>
                        </p>
                    </div>
                    {/* Mid Links  */}
                    <div className="gap-6 midLinks hover:text-accent hidden md:flex">
                        {allLinks}
                    </div>
                    {/*Right Login and Accounts  */}
                    <div className="flex gap-1">
                        <InteractiveHoverButton className={"bg-accent text-background text-[16px] rounded-sm cursor-pointer font-bold"} > Login </InteractiveHoverButton>
                        {/*Right Side Hamburger */}
                        <Sheet key={"right"}>
                            <SheetTrigger><GiHamburgerMenu className="text-4xl md:hidden"></GiHamburgerMenu></SheetTrigger>
                            <SheetContent side="right">
                                <SheetHeader>
                                    <SheetTitle className={`flex justify-center`}>
                                        <p className="font-bold font-special text-xl">
                                            <AuroraText colors={auraColor}>BrackeT</AuroraText>
                                        </p>
                                    </SheetTitle>
                                </SheetHeader>
                                {/* Hamburger Lists */}
                                <NavigationMenuList className={`flex flex-col justify-start items-start gap-2 ml-4`}>
                                    {allLinks}
                                </NavigationMenuList>
                            </SheetContent>
                        </Sheet>
                    </div>
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    );
};

export default Navbar;
