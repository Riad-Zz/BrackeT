import { motion } from "framer-motion";
import rankImage from "@/assets/RankImage.png";
import { HyperText } from "@/components/ui/hyper-text";

const RankSystem = () => {
    return (
        <div className="max-w-11/12 xl:max-w-7xl mx-auto my-30">
            {/* ----------------- Top Text/Motivation ------------------- */}
                    <div className="mx-auto w-fit rounded-full border-b border-accent px-4 py-1.5 sm:px-6 md:px-10 mb-8 md:mb-12">
                        <div className="flex items-center gap-2 sm:gap-4 whitespace-nowrap text-[10px] sm:text-xs md:text-sm font-black uppercase tracking-[0.2em] sm:tracking-[0.35em] text-white">
                            <HyperText as='span' className='text-[10px] sm:text-xs md:text-sm startOnView delay-300'>
                                Progress
                            </HyperText>
                            <span className="text-[6px] sm:text-[8px] md:text-[10px] opacity-80">●</span>
                            <HyperText as='span' className='text-[10px] sm:text-xs md:text-sm startOnView'>
                                Rank
                            </HyperText>
                            <span className="text-[6px] sm:text-[8px] md:text-[10px] opacity-80">●</span>
                            <HyperText as='span' className='text-[10px] sm:text-xs md:text-sm startOnView'>
                                Dominate
                            </HyperText>
                        </div>
                    </div>
            {/* Parent Div */}
            <div className="flex flex-col md:flex-row justify-center items-center text-center md:text-left md:justify-between gap-10">

                {/* Left Side Div */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease : "easeIn" }}
                    viewport={{ once: false }}
                    className="flex flex-col justify-center max-w-xl"
                >

                    {/* title */}
                    <h2 className="text-4xl md:text-5xl  my-2 font-bold tracking-tight text-[var(--foreground)]">
                        How High Can You <br className="hidden md:block" />
                        <span className="text-[var(--accent)] drop-shadow-[0_0_15px_rgba(223,251,21,0.3)]">
                            Climb?
                        </span>
                    </h2>

                    {/* subtitle */}
                    <p className="text-base md:text-lg font-medium my-4 text-gray-300">
                        The road to Champion starts with your first duel.
                    </p>

                    {/* Extra text */}
                    <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                        From Bronze to Champion, your rank represents the progress you've earned through competition. There is always another rank to chase and another rival waiting.
                        <br /><br />
                        <span className="text-white ">
                            Your next duel could be the one that takes you higher.
                        </span>
                    </p>
                </motion.div>

                {/* Right Side Rank image Div */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="relative w-full md:w-1/2 flex justify-center mt-8 md:mt-0"
                >
                    {/* Simple back glow behind the image */}
                    <div className="absolute inset-0 bg-primary opacity-10 blur-3xl rounded-full -z-10 scale-75" />

                    {/* Floating Image Animation */}
                    <motion.img
                        animate={{ y: [0, -15, 0] }}
                        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                        src={rankImage}
                        alt="Rank Tiers"
                        className="w-full max-w-lg h-auto"
                    />
                </motion.div>
            </div>
        </div>
    );
};

export default RankSystem;