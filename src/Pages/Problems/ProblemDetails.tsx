import { useParams, Link } from "react-router";
import { use } from "react";
import { AuthContext } from "@/Provider/Authentication/AuthProvider";
import { AuroraText } from "@/components/ui/aurora-text";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { CiSettings, CiTimer } from "react-icons/ci";
import { PiUserCircleThin } from "react-icons/pi";
import { FaShuffle, FaPlay } from "react-icons/fa6";
import { VscCloudUpload } from "react-icons/vsc";
import MainLogo from "@/assets/MainLogo.png";
import Avatar1 from "@/assets/TempProfile.jpeg";

const ProblemDetails = () => {
    const { slug } = useParams();
    const { user} = use(AuthContext)!;

    const auraColor = ["#ffffff", "#eefed1", "#dffb15", "#4bc69d", "#38bdf8", "#0052d8", "#d8ecff", "#ffffff"];

    
    // Reusable dropdown content 
    const profileDropdown = (
        <>
            <DropdownMenuGroup>
                <Link to={'/profile'}><DropdownMenuItem className="cursor-pointer text-foreground/80 hover:text-foreground"><PiUserCircleThin className="mr-2 text-lg" /> Profile</DropdownMenuItem></Link>
                <Link to={'/setting'}><DropdownMenuItem className="cursor-pointer text-foreground/80 hover:text-foreground"><CiSettings className="mr-2 text-lg" /> Settings</DropdownMenuItem></Link>
            </DropdownMenuGroup>
            <DropdownMenuSeparator className="bg-foreground/10" />
        </>
    );

    return (
        <div className="min-h-screen bg-background flex flex-col">
            
            {/* ------------------ *** Workspace Navbar *** ------------------------ */}
            <header className="flex h-14 w-full items-center justify-between border-b border-foreground/10 bg-background px-4">
                
                {/* ----------------------------*** LEFT: Logo & Brand ***---------------------------- */}
                <div className="flex flex-1 items-center justify-start">
                    <Link to="/" className="flex items-end justify-center transition-transform hover:scale-105 active:scale-95">
                        <img src={MainLogo} alt="Website Logo" className="w-8 h-8 object-contain" />
                        <p className="font-bold font-special text-lg ml-2 leading-none hidden sm:block">
                            <AuroraText colors={auraColor}>
                                <span className="text-xl">B</span>rackeT
                            </AuroraText>
                        </p>
                    </Link>
                </div>

                {/* -------------------*** MIDDLE:All the  Actions Btnns ***------------------ */}
                <div className="flex items-center justify-center gap-2 md:gap-3">
                    <button className="flex h-8 w-8 items-center cursor-pointer justify-center rounded bg-foreground/3 text-foreground/60 hover:bg-foreground/10 hover:text-foreground transition-colors" title="Timer">
                        <CiTimer className="text-xl" />
                    </button>

                    <button className="flex h-8 w-8 items-center cursor-pointer justify-center rounded bg-foreground/3 text-foreground/60 hover:bg-foreground/10 hover:text-foreground transition-colors" title="Pick Random Problem">
                        <FaShuffle className="text-sm" />
                    </button>

                    <button className="flex h-8 px-4 cursor-pointer items-center justify-center gap-2 rounded bg-foreground/10 text-foreground text-sm font-semibold" title="Run Code">
                        <FaPlay className="text-xs" /> Run
                    </button>

                    <button className="flex h-8 px-4 cursor-pointer items-center justify-center gap-2 rounded bg-green-700 text-white text-sm font-bold" title="Submit Solution">
                        <VscCloudUpload className="text-lg" /> Submit
                    </button>
                </div>

                {/* ----------------------------*** RIGHT: Profile Avatar and Stuff ***------------------------------- */}
                <div className="flex flex-1 items-center justify-end">
                    {user ? (
                        <DropdownMenu>
                            <DropdownMenuTrigger className="focus:outline-none transition-transform hover:scale-105 active:scale-95">
                                <img 
                                    src={user.photoURL || Avatar1} 
                                    alt="User Avatar" 
                                    className="h-8 w-8 rounded-full border border-foreground/20 object-cover" 
                                />
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="bg-background border-foreground/10 mt-2 min-w-[150px]">
                                {profileDropdown}
                            </DropdownMenuContent>
                        </DropdownMenu>
                    ) : (
                        <Link to="/login" className="rounded-sm bg-accent px-4 py-1.5 text-center text-sm font-bold text-background hover:opacity-90 transition-opacity">
                            Login
                        </Link>
                    )}
                </div>
            </header>

            {/* ------------------ *** Main Problem area *** ------------------------ */}
            <main className="flex-1 p-6">
                <h1 className="text-2xl font-bold text-foreground">Problem Details</h1>
                <p className="text-foreground/60 mt-2 font-mono">Current Slug: {slug}</p>
            </main>

        </div>
    );
};

export default ProblemDetails;