import { Outlet, useLocation } from "react-router";
import MainLogo from "@/assets/MainLogo.png"
import { TypingAnimation } from "@/components/ui/typing-animation";
import { GlyphMatrix } from "@/components/ui/glyph-matrix";
import { Meteors } from "@/components/ui/meteors";

const AuthLayout = () => {
    const location = useLocation() 
    const current_path = location.pathname ;
    console.log(current_path) ;
    const words = [
        "Problem Solving",
        "Competitive Coding",
        "Skill Building",
        "Tech Interviews"
    ]

    return (
        <div className="w-full bg-background min-h-screen flex items-center">
            {/* The Parent Content Div  */}
            <div className="max-w-11/12 xl:max-w-7xl w-full mx-auto bg-white rounded-xl flex flex-col md:flex-row justify-between items-stretch min-h-[800px] my-20 gap-5 p-2">
            
                {/* Left Side Login / Register Model  */}
                <div className="relative rounded-xl flex flex-col gap-2 bg-black flex-1 w-full overflow-hidden justify-center items-center">
                    
                    <div className="absolute inset-0 z-0 pointer-events-none">
                        <GlyphMatrix />
                        <Meteors number={50} />
                    </div>
                    
                    <div className="relative z-10 flex flex-col items-center">
                        <img src={MainLogo} alt="Bracket Logo" className="h-32 w-32  drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]"/>
                        {
                            // current_path === "/login" ? "Hello" :"hi" 
                        }
                        
                        <p className="text-xl md:text-2xl  font-bold text-center tracking-tight text-white">
                            Discover the Future of <br /> 
                            
                            <span className="text-accent inline-flex items-center justify-center  drop-shadow-[0_0_10px_rgba(223,251,21,0.3)]">
                                <TypingAnimation words={words} loop startOnView typeSpeed={150} />
                            </span> 
                            <br /> 
                            with Bracket
                        </p>
                    </div>

                </div>

                {/* Login and Register Form Div  */}
                <div className="flex-1 text-black flex items-center justify-center p-4">
                    <div className="w-full max-w-md">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;