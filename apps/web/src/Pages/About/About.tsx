import { Link } from "react-router";
import { motion, type Variants } from "framer-motion";
import {
    Target,
    ArrowRight,
    Sparkles,
    ShieldCheck,
} from "lucide-react";
import MainLogo from "@/assets/MainLogo.png";
import { Button } from "@/components/ui/button";
import { GridPattern } from "@/components/ui/grid-pattern";
import { HyperText } from "@/components/ui/hyper-text";
import { cn } from "@/lib/utils";
import { ContactSection } from "./components/ContactSection";

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.12,
        },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" },
    },
};

const About = () => {
    return (
        <main className="relative min-h-[calc(100vh-80px)] w-full overflow-hidden bg-[#0E1011] text-foreground">
            {/* Background Magic UI Grid Pattern */}
            <div className="absolute inset-0 -z-10 flex h-full w-full items-center justify-center overflow-hidden pointer-events-none select-none">
                <GridPattern
                    width={40}
                    height={40}
                    x={-1}
                    y={-1}
                    strokeDasharray="4 2"
                    squares={[
                        [4, 3],
                        [2, 1],
                        [7, 3],
                        [10, 6],
                        [6, 8],
                        [12, 4],
                        [8, 12],
                        [15, 8],
                    ]}
                    className={cn(
                        "h-full w-full [mask-image:radial-gradient(950px_circle_at_50%_35%,white,transparent)] stroke-white/[0.07] fill-white/[0.02]"
                    )}
                />
            </div>

            {/* Ambient Dual-Tone Background Glows matching HomePage & Problems */}
            <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center overflow-hidden select-none">
                <div className="absolute -left-[10%] top-[8%] h-[400px] w-[500px] rounded-full bg-primary/15 blur-[130px]" />
                <div className="absolute -right-[10%] top-[30%] h-[400px] w-[500px] rounded-full bg-accent/10 blur-[140px]" />
                <div className="absolute left-[25%] bottom-[10%] h-[350px] w-[450px] rounded-full bg-primary/10 blur-[130px]" />
            </div>

            <div className="max-w-11/12 xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 md:py-20 flex flex-col gap-14 sm:gap-20 md:gap-24">

                {/* ----------------- Top Motivation / Category Tag ------------------- */}
                <div className="mx-auto w-fit rounded-full border-b border-accent px-4 py-1.5 sm:px-6 md:px-10">
                    <div className="flex items-center gap-2 sm:gap-4 whitespace-nowrap font-special text-[10px] sm:text-xs md:text-sm font-bold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-white">
                        <HyperText as="span" className="text-[10px] sm:text-xs md:text-sm startOnView delay-300">
                            ABOUT
                        </HyperText>
                        <span className="text-[6px] sm:text-[8px] md:text-[10px] opacity-80">●</span>
                        <HyperText as="span" className="text-[10px] sm:text-xs md:text-sm startOnView">
                            MISSION
                        </HyperText>
                        <span className="text-[6px] sm:text-[8px] md:text-[10px] opacity-80">●</span>
                        <HyperText as="span" className="text-[10px] sm:text-xs md:text-sm startOnView">
                            ARENA
                        </HyperText>
                    </div>
                </div>

                {/* Who We Are & Story Section */}
                <motion.section
                    aria-labelledby="who-we-are-title"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    variants={containerVariants}
                    className="flex flex-col gap-10 sm:gap-14"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
                        <motion.div variants={itemVariants} className="lg:col-span-7 flex flex-col space-y-5 sm:space-y-6">
                            <div className="flex items-center gap-3">
                                <div className="p-2.5 rounded-lg bg-accent/10 text-accent border border-accent/20 shrink-0">
                                    <Target className="w-5 h-5 sm:w-6 sm:h-6" />
                                </div>
                                <h2 id="who-we-are-title" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                                    Who We Are & <br className="hidden sm:block" />
                                    <span className="text-accent drop-shadow-[0_0_15px_rgba(223,251,21,0.3)]">Why BrackeT Exists</span>
                                </h2>
                            </div>

                            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                                BrackeT is an independent competitive programming ecosystem engineered by passionate software
                                engineers who experienced firsthand how detached conventional interview prep is from the intensity
                                of live technical discussions and high-stakes coding rounds.
                            </p>

                            <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                                Rather than solving arbitrary problems alone late into the night, BrackeT injects the camaraderie,
                                rivalry, and clarity of head-to-head esports. Whether you are a computer science student tackling your first
                                graph traversal, a seasoned engineer prepping for senior FAANG interviews, or a competitive coder looking
                                to hone your reflexes, BrackeT provides an authentic, high-fidelity proving ground.
                            </p>

                            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2">
                                <Link to="/problems" className="w-full sm:w-auto">
                                    <Button className="w-full sm:w-auto rounded-full px-6 h-11 bg-accent text-background font-bold hover:bg-accent/90 cursor-pointer shadow-[0_0_20px_rgba(223,251,21,0.25)] hover:shadow-[0_0_25px_rgba(223,251,21,0.4)] transition-all duration-200 active:scale-95">
                                        Explore Problem Catalog <ArrowRight className="w-4 h-4 ml-1.5" />
                                    </Button>
                                </Link>
                                <Link to="/" className="w-full sm:w-auto">
                                    <Button variant="outline" className="w-full sm:w-auto rounded-full px-6 h-11 border-white/10 bg-white/[0.03] hover:bg-white/[0.08] hover:border-white/20 text-white cursor-pointer transition-all duration-200 active:scale-95">
                                        View Live Arena Demo
                                    </Button>
                                </Link>
                            </div>
                        </motion.div>

                        {/* Visual Card / Brand Identity */}
                        <motion.div variants={itemVariants} className="lg:col-span-5">
                            <div className="relative rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] p-5 sm:p-7 md:p-8 shadow-xl backdrop-blur-md flex flex-col space-y-5 sm:space-y-6 group hover:border-accent/40 transition-all duration-300">
                                <div className="flex items-center gap-4">
                                    <img src={MainLogo} alt="BrackeT Logo" className="w-14 h-14 sm:w-16 sm:h-16 object-contain drop-shadow" />
                                    <div>
                                        <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                                            BrackeT.io
                                        </h3>
                                        <p className="text-xs text-gray-400">
                                            Competitive Esports Arena • Beta v0.0.1
                                        </p>
                                    </div>
                                </div>

                                <hr className="border-white/10" />

                                <div className="space-y-3 text-sm text-gray-300">
                                    <div className="flex items-center justify-between py-1 border-b border-white/5">
                                        <span className="text-gray-400 text-xs">Platform Architecture</span>
                                        <span className="text-xs font-semibold text-accent font-mono">React 19 + Monaco</span>
                                    </div>
                                    <div className="flex items-center justify-between py-1 border-b border-white/5">
                                        <span className="text-gray-400 text-xs">Execution Mode</span>
                                        <span className="text-xs font-semibold text-white font-mono">1v1 Real-Time Duel</span>
                                    </div>
                                    <div className="flex items-center justify-between py-1">
                                        <span className="text-gray-400 text-xs">Registered License</span>
                                        <span className="text-xs font-semibold text-secondary font-mono">Trade #124154</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* 3 Core Pillars Grid: Mission, Vision, Verified Credentials */}
                    <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                        {/* Mission */}
                        <div className="rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] p-5 sm:p-6 shadow-xl backdrop-blur-md flex flex-col space-y-3 hover:border-accent/40 transition-all duration-300 group">
                            <div className="p-2.5 rounded-lg bg-accent/10 text-accent border border-accent/20 w-fit shrink-0">
                                <Target className="w-5 h-5" />
                            </div>
                            <h3 className="font-bold text-white text-base sm:text-lg">The Mission</h3>
                            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                                Empower developers to build unshakable problem-solving reflexes and eliminate interview anxiety through real-time challenge.
                            </p>
                        </div>

                        {/* Vision */}
                        <div className="rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] p-5 sm:p-6 shadow-xl backdrop-blur-md flex flex-col space-y-3 hover:border-accent/40 transition-all duration-300 group">
                            <div className="p-2.5 rounded-lg bg-primary/15 text-primary border border-primary/25 w-fit shrink-0">
                                <Sparkles className="w-5 h-5" />
                            </div>
                            <h3 className="font-bold text-white text-base sm:text-lg">The Vision</h3>
                            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                                A global digital colosseum where algorithms meet sportsmanship, rated fairly by Elo logic and transparent execution.
                            </p>
                        </div>

                        {/* Verified Platform */}
                        <div className="rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] p-5 sm:p-6 shadow-xl backdrop-blur-md flex flex-col space-y-3 hover:border-accent/40 transition-all duration-300 group">
                            <div className="p-2.5 rounded-lg bg-secondary/15 text-secondary border border-secondary/25 w-fit shrink-0">
                                <ShieldCheck className="w-5 h-5" />
                            </div>
                            <h3 className="font-bold text-white text-base sm:text-lg">Verified Credentials</h3>
                            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                                Trade License: 124154 • Open Source Monorepo architecture maintained for transparency and public reliability.
                            </p>
                        </div>
                    </motion.div>
                </motion.section>

                {/* Contact & Inquiry Section */}
                <ContactSection />

            </div>
        </main>
    );
};

export default About;