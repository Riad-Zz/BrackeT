// import { Button } from "@/components/ui/button";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { NavLink } from "react-router";
import MainLogo from "@/assets/MainLogo.png";
import { AuroraText } from "@/components/ui/aurora-text";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { GiHamburgerMenu } from "react-icons/gi";
import Avatar1 from "@/assets/defaultAvatar.jpeg"
// import Avatar2 from "@/assets/defaultAvatarCat.jpeg"
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { PiUserCircleThin } from "react-icons/pi";
import { CiSettings } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";


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

    const allDropdown = (
        <>
            <DropdownMenuGroup>
            <DropdownMenuItem className={`cursor-pointer`}><PiUserCircleThin/><NavLink to={'/profile'}>Profile</NavLink></DropdownMenuItem>
            <DropdownMenuItem className={`cursor-pointer`}> <CiSettings/><NavLink to={'/setting'}>Setting</NavLink> </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator/>
            <DropdownMenuGroup>
            <DropdownMenuItem className={`text-red-500 cursor-pointer`}><CiLogout/><NavLink to={'/logout'}>Logout</NavLink></DropdownMenuItem>
            </DropdownMenuGroup>
        </>
    )

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

    type User = {
    email: string;
    photoUrl: string;
    Name: string;
};

// const user: User | null = {
//     email: "kazuha3242@gmail.com",
//     photoUrl: Avatar1,
//     Name: "KaZuha"
// };

const user: User | null = null;

    return (
        <div>
            <NavigationMenu className={`max-w-11/12 xl:max-w-7xl m-auto my-1 `}>
                <NavigationMenuList className={`flex gap-10 justify-between items-center py-1`}>
                    {/* Left Side  */}
                    {/* Left -> Sidebar for Mobile Naviagation  */}
                    <div className="flex items-end justify-center">
                        <img src={MainLogo} alt="Website Logo" className="w-13 h-13" />
                        <p className="font-bold font-special text-xl">
                            <AuroraText colors={auraColor}>
                                <span className="text-2xl">B</span>rackeT
                            </AuroraText>
                        </p>
                    </div>
                    {/* Mid Links  */}
                    <div className="gap-7 midLinks hover:text-accent hidden md:flex">
                        {allLinks}
                    </div>
                    {/*Right Login and Accounts  */}
                    <div className="flex gap-1">
                        {/*Login and Accounts Icon for Md and larger screen*/}
                        {
                            user ? 
                            <NavigationMenuItem className={`list-none hidden md:block`}>
                                <div className="flex gap-2 items-center">
                                    <DropdownMenu>
                                        <DropdownMenuTrigger> <img src={Avatar1} alt="" className="h-10 w-10 rounded-full hidden md:block"/>
                                        </DropdownMenuTrigger>
                                            <DropdownMenuContent align="start" className={`bg-background mt-2 `}>
                                                {allDropdown}
                                            </DropdownMenuContent>
                                    </DropdownMenu>
                                    
                                </div>
                            </NavigationMenuItem> 
                            :<InteractiveHoverButton className={"bg-accent text-background text-[16px] rounded-sm cursor-pointer font-bold hidden md:block"} > Login </InteractiveHoverButton>
                        }
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
                                <NavigationMenuList className={`flex flex-col justify-start items-center gap-3 ml-4`}>
                                    {allLinks}
                                </NavigationMenuList>
                                {/* Hamburger login and profile Icons for Mobile Screen*/}
                                <SheetFooter>
                                    {
                                        user ?<NavigationMenuItem className={`list-none`}>
                                            <div className="flex gap-2 items-center">
                                            <DropdownMenu>
                                                <DropdownMenuTrigger> 
                                                    <img src={Avatar1} alt="" className="h-10 w-10 rounded-full md:hidden"/>
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent align="start" className={`bg-background mb-2 md:mb-0`}>
                                                    {allDropdown}
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                            <div>
                                            <p>{user.Name}</p>
                                            <p>{user.email}</p>
                                            </div>
                                            </div>
                                            </NavigationMenuItem> : 
                                            <InteractiveHoverButton className={"bg-accent text-background text-[16px] rounded-sm cursor-pointer font-bold md:hidden"}> Login </InteractiveHoverButton> 
                                    }
                                </SheetFooter>
                            </SheetContent>
                        </Sheet>
                    </div>
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    );
};

export default Navbar;
