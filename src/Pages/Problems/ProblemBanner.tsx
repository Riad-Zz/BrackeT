import Model_Icon1 from "@/assets/Problemsolving.png";
import Model_Icon2 from "@/assets/Rubik'scube .png";
import { motion } from "framer-motion";

const ProblemBanner = () => {
    return (
        <section className="relative w-full max-w-11/12 xl:max-w-7xl mx-auto my-8 md:my-10">
            <div className="relative overflow-hidden rounded-lg border border-white/10 bg-[#0E1011] px-6 py-8 md:px-10 lg:px-12 flex flex-col-reverse md:flex-row items-center justify-between gap-6 md:gap-8">
                
                {/* ------------------ *** Ambient Background Glows *** ----------------------- */}
                <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center">
                    <div className="absolute -left-[10%] top-[-20%] h-[250px] w-[250px] rounded-full bg-primary opacity-20 blur-[100px]" />
                    <div className="absolute -right-[10%] bottom-[-20%] h-[250px] w-[250px] rounded-full bg-accent opacity-10 blur-[100px]" />
                </div>

                {/* ------------------ *** Left Side: Text & CTA *** ----------------------- */}
                <div className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left max-w-lg">
                    <div className="flex items-center gap-3 mb-3 md:mb-4">
                        <p className="font-special text-[10px] md:text-xs font-bold tracking-[0.2em] text-accent uppercase drop-shadow-[0_0_8px_rgba(223,251,21,0.3)]">
                            Find Your Next Challenge
                        </p>
                    </div>

                    <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white tracking-tight leading-[1.3] mb-5">
                        Pick a problem, <br className="hidden md:block" />
                        sharpen your skills, <br className="hidden md:block" />
                        and <span className="text-primary drop-shadow-[0_0_15px_rgba(0,82,216,0.4)]">push your rating.</span>
                    </h2>

                    <button className="px-6 py-3 rounded-sm bg-primary text-foreground font-bold text-sm md:text-base hover:opacity-90 transition-all active:scale-95 shadow-[0_0_15px_rgba(0,82,216,0.3)]">
                        Explore Problems
                    </button>
                </div>

                {/* ------------------ *** Right Side: Floating Illustration *** ----------------------- */}
                <div className="relative z-10 flex items-center justify-center w-full md:w-1/2 h-50 md:h-65 lg:h-70">
                    <motion.img 
                        src={Model_Icon1} 
                        alt="Problem Solving" 
                        className="w-40 md:w-52 lg:w-64 object-contain drop-shadow-2xl z-20"
                        animate={{ y: [0, -12, 0] }}
                        transition={{ 
                            duration: 4, 
                            repeat: Infinity, 
                            ease: "easeInOut" 
                        }}
                    />

                    <motion.img 
                        src={Model_Icon2} 
                        alt="Rubiks Cube" 
                        className="absolute right-2 md:right-6 top-4 md:top-8 w-16 md:w-20 opacity-60 object-contain blur-[1px] z-10"
                        animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
                        transition={{ 
                            duration: 5, 
                            repeat: Infinity, 
                            ease: "easeInOut",
                            delay: 1
                        }}
                    />
                </div>

            </div>
        </section>
    );
};

export default ProblemBanner;