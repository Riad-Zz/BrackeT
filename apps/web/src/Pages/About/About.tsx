import { useEffect } from "react";
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
    useEffect(() => {
        document.title = "About Us | BrackeT ⚡ The Competitive Coding Arena";
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="relative min-h-[calc(100vh-80px)] w-full overflow-hidden bg-background text-foreground">
            {/* Background Grid Pattern matching HomePage */}
            <div className="absolute inset-0 -z-10 flex h-full w-full items-center justify-center">
                <GridPattern
                    width={40}
                    height={40}
                    x={-1}
                    y={-1}
                    className={cn(
                        "h-full w-full [mask-image:radial-gradient(860px_circle_at_center,white,transparent)]"
                    )}
                />
            </div>

            <div className="w-[92%] max-w-7xl mx-auto py-12 sm:py-16 md:py-24 flex flex-col gap-20 sm:gap-24 md:gap-32">

                {/* 2. Who We Are & Mission Section */}
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
                            <div className="p-2.5 rounded-lg bg-primary/20 text-accent border border-primary/30">
                                <Target className="w-5 h-5 sm:w-6 sm:h-6" />
                            </div>
                            <h2 id="who-we-are-title" className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
                                Who We Are & Why BrackeT Exists
                            </h2>
                        </div>

                        <p className="text-foreground/80 leading-relaxed text-sm sm:text-base">
                            BrackeT is an independent competitive programming ecosystem engineered by passionate software
                            engineers who experienced firsthand how detached conventional interview prep is from the intensity
                            of live technical discussions and high-stakes coding rounds.
                        </p>

                        <p className="text-foreground/80 leading-relaxed text-sm sm:text-base">
                            Rather than solving arbitrary problems alone late into the night, BrackeT injects the camaraderie,
                            rivalry, and clarity of head-to-head esports. Whether you are a computer science student tackling your first
                            graph traversal, a seasoned engineer prepping for senior FAANG interviews, or a competitive coder looking
                            to hone your reflexes, BrackeT provides an authentic, high-fidelity proving ground.
                        </p>

                        <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
                            <Link to="/problems">
                                <Button className="rounded-full px-6 h-11 bg-accent text-background font-bold hover:bg-accent/90 cursor-pointer shadow-md transition-all active:scale-95">
                                    Explore Problem Catalog <ArrowRight className="w-4 h-4 ml-1.5" />
                                </Button>
                            </Link>
                            <Link to="/">
                                <Button variant="outline" className="rounded-full px-6 h-11 border-border/80 hover:bg-card/80 text-foreground cursor-pointer transition-all active:scale-95">
                                    View Live Arena Demo
                                </Button>
                            </Link>
                        </div>
                    </motion.div>

                    {/* Visual Card / Brand Identity */}
                    <motion.div variants={itemVariants} className="lg:col-span-5">
                        <div className="relative rounded-2xl border border-border/50 bg-card/80 p-6 sm:p-8 shadow-2xl backdrop-blur-md flex flex-col space-y-6 group hover:border-accent/40 transition-colors">
                            <div className="flex items-center gap-4">
                                <img src={MainLogo} alt="BrackeT Logo" className="w-12 h-12 sm:w-14 sm:h-14 object-contain drop-shadow" />
                                <div>
                                    <h3 className="text-xl sm:text-2xl font-bold font-special text-foreground flex items-center gap-2">
                                        BrackeT.io
                                    </h3>
                                    <p className="text-xs text-foreground/60 font-special">
                                        Competitive Esports Arena • Beta v0.0.1
                                    </p>
                                </div>
                            </div>

                            <hr className="border-border/40" />

                            <div className="space-y-4 text-sm text-foreground/85">
                                <div className="flex items-start gap-3">
                                    <div className="p-2 rounded-lg bg-primary/20 text-accent shrink-0">
                                        <Target className="w-4 h-4 sm:w-5 sm:h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-foreground text-sm">The Mission</h4>
                                        <p className="text-foreground/70 text-xs mt-0.5 leading-relaxed">
                                            Empower developers to build unshakable problem-solving reflexes and eliminate interview anxiety through real-time challenge.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <div className="p-2 rounded-lg bg-secondary/20 text-secondary shrink-0">
                                        <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-foreground text-sm">The Vision</h4>
                                        <p className="text-foreground/70 text-xs mt-0.5 leading-relaxed">
                                            A global digital colosseum where algorithms meet sportsmanship, rated fairly by Elo logic and transparent execution.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <div className="p-2 rounded-lg bg-accent/20 text-accent shrink-0">
                                        <Layers className="w-4 h-4 sm:w-5 sm:h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-foreground text-sm">Verified Credentials</h4>
                                        <p className="text-foreground/70 text-xs mt-0.5 font-special">
                                            Trade License: 124154 • Open Source Monorepo
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.section>

                {/* 6. Contact & Inquiry Section */}
                <ContactSection />

            </div>
        </main>
    );
};

export default About;