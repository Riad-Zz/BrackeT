import { Link } from "react-router";
import { motion, type Variants } from "framer-motion";
import {
    Target,
    ArrowRight,
    Sparkles,
    Layers,
} from "lucide-react";
import MainLogo from "@/assets/MainLogo.png";
import { Button } from "@/components/ui/button";
import { GridPattern } from "@/components/ui/grid-pattern";
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

            <div className="w-[92%] max-w-7xl mx-auto py-12 sm:py-16 md:py-24 flex flex-col gap-20 sm:gap-24 md:gap-32">

                {/* Who We Are & Mission Section */}
                <motion.section
                    aria-labelledby="who-we-are-title"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    variants={containerVariants}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center"
                >
                    <motion.div variants={itemVariants} className="lg:col-span-7 flex flex-col space-y-6">
                        <div className="flex items-center gap-3">
                            <div className="p-2.5 rounded-lg bg-accent/10 text-accent border border-accent/20">
                                <Target className="w-5 h-5 sm:w-6 sm:h-6" />
                            </div>
                            <h2 id="who-we-are-title" className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
                                Who We Are & <span className="text-accent drop-shadow-[0_0_15px_rgba(223,251,21,0.3)]">Why BrackeT Exists</span>
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

                        <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
                            <Link to="/problems">
                                <Button className="rounded-full px-6 h-11 bg-accent text-background font-bold hover:bg-accent/90 cursor-pointer shadow-[0_0_20px_rgba(223,251,21,0.25)] transition-all active:scale-95">
                                    Explore Problem Catalog <ArrowRight className="w-4 h-4 ml-1.5" />
                                </Button>
                            </Link>
                            <Link to="/">
                                <Button variant="outline" className="rounded-full px-6 h-11 border-white/10 bg-white/[0.03] hover:bg-white/[0.08] text-white cursor-pointer transition-all active:scale-95">
                                    View Live Arena Demo
                                </Button>
                            </Link>
                        </div>
                    </motion.div>

                    {/* Visual Card / Brand Identity */}
                    <motion.div variants={itemVariants} className="lg:col-span-5">
                        <div className="relative rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] p-6 sm:p-8 shadow-2xl backdrop-blur-md flex flex-col space-y-6 group hover:border-accent/40 transition-colors">
                            <div className="flex items-center gap-4">
                                <img src={MainLogo} alt="BrackeT Logo" className="w-12 h-12 sm:w-14 sm:h-14 object-contain drop-shadow" />
                                <div>
                                    <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                                        BrackeT.io
                                    </h3>
                                    <p className="text-xs text-gray-400">
                                        Competitive Esports Arena • Beta v0.0.1
                                    </p>
                                </div>
                            </div>

                            <hr className="border-white/10" />

                            <div className="space-y-4 text-sm text-gray-300">
                                <div className="flex items-start gap-3">
                                    <div className="p-2 rounded-lg bg-accent/10 text-accent border border-accent/20 shrink-0">
                                        <Target className="w-4 h-4 sm:w-5 sm:h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-white text-sm">The Mission</h4>
                                        <p className="text-gray-400 text-xs mt-0.5 leading-relaxed">
                                            Empower developers to build unshakable problem-solving reflexes and eliminate interview anxiety through real-time challenge.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <div className="p-2 rounded-lg bg-primary/15 text-primary border border-primary/25 shrink-0">
                                        <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-white text-sm">The Vision</h4>
                                        <p className="text-gray-400 text-xs mt-0.5 leading-relaxed">
                                            A global digital colosseum where algorithms meet sportsmanship, rated fairly by Elo logic and transparent execution.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <div className="p-2 rounded-lg bg-secondary/15 text-secondary border border-secondary/25 shrink-0">
                                        <Layers className="w-4 h-4 sm:w-5 sm:h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-white text-sm">Verified Credentials</h4>
                                        <p className="text-gray-400 text-xs mt-0.5">
                                            Trade License: 124154 • Open Source Monorepo
                                        </p>
                                    </div>
                                </div>
                            </div>
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