import { motion } from "framer-motion";
import CplusIcon from "@/assets/C++.png";
import CIcon from "@/assets/C.png";
import pythonIcon from "@/assets/Python.png";
import javaIcon from "@/assets/Java.png";
import javascriptIcon from "@/assets/Js.png";
import phpIcon from "@/assets/Php.png";
import goIcon from "@/assets/go.png";
import typescriptIcon from "@/assets/ts.jpeg";
import { OrbitingCircles } from "@/components/ui/orbiting-circles";

const LanguageShowCase = () => {
    // Group icons into two arrays
    // const col1Icons = [CplusIcon, pythonIcon, javascriptIcon, goIcon];
    // const col2Icons = [CIcon, javaIcon, phpIcon, typescriptIcon];

    // Duplicate the arrays so Framer Motion can loop them seamlessly
    // const repeatedCol1 = [...col1Icons, ...col1Icons];
    // const repeatedCol2 = [...col2Icons, ...col2Icons];

    return (
        <div className="max-w-11/12 xl:max-w-7xl mx-auto my-20">
            <div className="flex flex-col-reverse text-center md:flex-row justify-center items-center md:text-left md:justify-between gap-10">
                
                {/* Left div for language showcase */}
                {/* <div className="relative flex flex-row justify-center items-center gap-6 w-full md:w-1/2 h-[350px] overflow-hidden">
                    
                    
                    <div className="absolute inset-0 bg-primary opacity-10 blur-3xl rounded-full -z-10 scale-60" />
                    
                    
                    
                    <div className="h-full w-20 overflow-hidden relative">
                        <motion.div 
                            animate={{ y: ["0%", "-50%"] }} 
                            transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                            className="flex flex-col gap-8 w-full absolute top-0"
                        >
                            {repeatedCol1.map((icon, idx) => (
                                <img key={`col1-${idx}`} src={icon} alt="Language" className="h-16 w-16 object-contain drop-shadow-lg rounded-xl shrink-0" />
                            ))}
                        </motion.div>
                    </div>

                    
                    <div className="h-full w-20 overflow-hidden relative">
                        <motion.div 
                            animate={{ y: ["-50%", "0%"] }} 
                            transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                            className="flex flex-col gap-8 w-full absolute top-0"
                        >
                            {repeatedCol2.map((icon, idx) => (
                                <img key={`col2-${idx}`} src={icon} alt="Language" className="h-16 w-16 object-contain drop-shadow-lg rounded-xl shrink-0" />
                            ))}
                        </motion.div>
                    </div>
                </div>  */}
                <div className="relative flex h-[350px] w-full md:w-1/2 items-center justify-center overflow-hidden [&_circle]:stroke-primary/60">
                {/* Simple back glow behind the image */}
                    <div className="absolute inset-0 bg-accent/30 opacity-10 blur-3xl rounded-full -z-10 scale-75" />
                
                    <OrbitingCircles path = {true} radius={140} iconSize={50}>
                        <img src={CplusIcon} alt=""  />
                        <img src={CIcon} alt=""  />
                        <img src={javascriptIcon} alt=""  />
                        <img src={typescriptIcon} alt=""  className=""/>
                    </OrbitingCircles>
                    <OrbitingCircles radius={70} reverse iconSize={50} >
                        <img src={javaIcon} alt=""  />
                        <img src={goIcon} alt=""  />
                        <img src={pythonIcon} alt="" className="" />
                        <img src={phpIcon} alt=""  />
                    </OrbitingCircles>

                </div>

                {/* Right div for text Content */}
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.1, ease : "easeIn" }}
                    viewport={{ once: false }}
                    className="flex flex-col justify-center max-w-xl mt-8 md:mt-0"
                >

                    {/* title */}
                    <h2 className="text-4xl md:text-5xl my-2 font-bold tracking-tight text-[var(--foreground)]">
                        Code in Your <br className="hidden md:block" />
                        <span className="text-[var(--accent)] drop-shadow-[0_0_15px_rgba(223,251,21,0.3)]">
                            Language
                        </span>
                    </h2>

                    {/* subtitle */}
                    <p className="text-base md:text-lg my-4 font-medium text-gray-300">
                        Your logic matters more than the syntax.
                    </p>

                    {/* Extra text */}
                    <p className="text-sm  md:text-sm text-gray-400 leading-relaxed">
                        Choose your language, solve the problem, and let your code do the talking. Whether you think in C++, move fast with Python, or build with JavaScript, BrackeT gives you the freedom to solve problems your way.
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default LanguageShowCase;