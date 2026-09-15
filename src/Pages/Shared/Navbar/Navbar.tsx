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
            <NavigationMenu className={`max-w-11/12 xl:max-w-7xl m-auto my-2 `}>
                <NavigationMenuList className={`flex gap-10 justify-between items-center py-1`}>
                    {/* Left Logo  */}
                    <div className="flex items-end justify-center">
                        <img src={MainLogo} alt="Website Logo" className="w-13 h-13" />
                        <p className="font-bold font-special text-xl">
                            <AuroraText colors={auraColor}>
                                <span className="text-2xl">B</span>rackeT
                            </AuroraText>
                        </p>
                    </div>
                    {/* Mid Links  */}
                    <div className="flex gap-6 midLinks hover:text-accent">
                        {allLinks}
                    </div>
                    {/*Right Login and Accounts  */}
                    <div>
                        <InteractiveHoverButton className={"bg-accent text-background text-[16px] rounded-sm cursor-pointer font-bold"} >
                            Login
                        </InteractiveHoverButton>
                    </div>
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    );
};

export default Navbar;
