import { Outlet, Link } from "react-router";
import MainLogo from "@/assets/MainLogo.png"
import { TypingAnimation } from "@/components/ui/typing-animation";
import { GlyphMatrix } from "@/components/ui/glyph-matrix";
import { Meteors } from "@/components/ui/meteors";
import { AuroraText } from "@/components/ui/aurora-text"; 

const AuthLayout = () => {
    const words = [
        "Problem Solving",
        "Competitive Coding",
        "Skill Building",
        "Tech Interviews"
    ]

    const auraColor = ["#0052d8", "#4bc69d", "#dffb15"];

    return (
        <div className="w-full bg-background min-h-screen flex flex-col items-center justify-center py-10 px-4">
            <div className="w-full max-w-11/12 xl:max-w-7xl mx-auto flex flex-col gap-6">
                
                {/* --- BACK TO HOME LINK (Naturally aligned left) --- */}
                <div className="flex justify-start w-full">
                    <Link to="/" className="z-50 transition-transform hover:scale-105 active:scale-95">
                        <div className="flex items-end justify-center">
                            <img src={MainLogo} alt="Website Logo" className="w-12 h-12 object-contain" />
                            <p className="font-bold font-special text-xl text-white ml-2 mb-1">
                                <AuroraText colors={auraColor}>
                                    <span className="text-2xl">B</span>rackeT
                                </AuroraText>
                            </p>
                        </div>
                    </Link>
                </div>

                {/* The Parent Content Div */}
                <div className="bg-white rounded-xl flex flex-col md:flex-row justify-between items-stretch min-h-[800px] gap-5 p-2 shadow-2xl">
                
                    {/* Left Side Login / Register Model */}
                    <div className="relative rounded-xl flex flex-col gap-2 bg-black flex-1 w-full overflow-hidden justify-center items-center">
                        
                        <div className="absolute inset-0 z-0 pointer-events-none">
                            <GlyphMatrix />
                            <Meteors number={50} />
                        </div>
                        
                        <div className="relative z-10 flex flex-col items-center">
                            <img src={MainLogo} alt="Bracket Logo" className="h-32 w-32 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]"/>
                            
                            <p className="text-xl md:text-2xl font-bold text-center tracking-tight text-white leading-relaxed mt-6">
                                Discover the Future of <br /> 
                                
                                <span className="text-accent inline-flex items-center justify-center min-h-[40px] drop-shadow-[0_0_10px_rgba(223,251,21,0.3)]">
                                    <TypingAnimation words={words} loop startOnView typeSpeed={150} />
                                </span> 
                                <br /> 
                                with Bracket
                            </p>
                        </div>

                    </div>

                    {/* Login and Register Form Div */}
                    <div className="flex-1 text-black flex items-center justify-center p-4">
                        <div className="w-full max-w-md">
                            <Outlet />
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default AuthLayout;