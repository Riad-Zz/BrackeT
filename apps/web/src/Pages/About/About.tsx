import { useEffect } from "react";
import { Link } from "react-router";
import { motion, type Variants } from "framer-motion";
import {
    Swords,
    Code2,
    Trophy,
    BookOpen,
    Target,
    Users,
    Zap,
    ShieldCheck,
    Cpu,
    ArrowRight,
    Sparkles,
    Compass,
    ExternalLink,
    Terminal,
    Layers,
    Award,
} from "lucide-react";
import MainLogo from "@/assets/MainLogo.png";
import { AuroraText } from "@/components/ui/aurora-text";
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

    const auraColor = ["#ffffff", "#eefed1", "#dffb15", "#4bc69d", "#38bdf8", "#0052d8", "#ffffff"];

    const platformPillars = [
        {
            icon: Swords,
            title: "1v1 Rival Duels",
            tag: "Real-Time Esports",
            description:
                "Match head-to-head against another coder on the exact same challenge with a synchronized timer and live opponent progress tracking.",
            accent: "from-primary/20 via-primary/5 to-transparent",
        },
        {
            icon: Code2,
            title: "Monaco Coding Arena",
            tag: "VS Code Power",
            description:
                "Solve problems in an industrial-grade in-browser editor featuring syntax highlighting, multi-language switching, and fluid resizable panels.",
            accent: "from-accent/20 via-accent/5 to-transparent",
        },
        {
            icon: Trophy,
            title: "Ranked Rating (RR) Ladder",
            tag: "Elo Progression",
            description:
                "Climb through competitive tiers from Bronze to Champion as you defend win streaks and prove your algorithmic mastery.",
            accent: "from-secondary/20 via-secondary/5 to-transparent",
        },
        {
            icon: BookOpen,
            title: "Curated Problem Catalog",
            tag: "Targeted Practice",
            description:
                "Practice a rich set of challenges across Data Structures, Algorithms, Databases, and Shell scripting with numerical ratings and tags.",
            accent: "from-primary/20 via-primary/5 to-transparent",
        },
    ];

    const coreValues = [
        {
            icon: ShieldCheck,
            title: "Fair Play & Deterministic Judging",
            description:
                "Every line of code is evaluated in isolated sandboxes against identical test suites to guarantee fair, tamper-proof competition.",
        },
        {
            icon: Zap,
            title: "Pressure-Tested Interview Readiness",
            description:
                "Simulating live interview conditions with clock pressure and dynamic problem solving so developers conquer technical anxiety.",
        },
        {
            icon: Users,
            title: "Community & Developer Driven",
            description:
                "Created by developers for developers, fostering a supportive community where learners and veterans elevate each other.",
        },
        {
            icon: Cpu,
            title: "Modern, Low-Latency Architecture",
            description:
                "Built on modern web technologies including React 19, TypeScript, Tailwind CSS v4, and Firebase for blistering speed.",
        },
    ];

    const stats = [
        { label: "Active Languages", value: "6+", subtext: "C++, Python, JS, TS, Java, Go", icon: Terminal },
        { label: "Duel Mode", value: "1v1", subtext: "Synchronized live battles", icon: Swords },
        { label: "Editor Engine", value: "Monaco", subtext: "VS Code in your browser", icon: Code2 },
        { label: "Competitive Tiers", value: "7", subtext: "Bronze to Champion", icon: Award },
    ];

    return (
        <main className="relative min-h-[calc(100vh-80px)] w-full overflow-hidden bg-background text-foreground font-sans">
            {/* Background Grid Pattern with Radial Gradient Mask */}
            <div className="absolute inset-0 -z-10 flex h-full w-full items-center justify-center overflow-hidden pointer-events-none">
                <GridPattern
                    width={44}
                    height={44}
                    x={-1}
                    y={-1}
                    className={cn(
                        "h-full w-full [mask-image:radial-gradient(900px_circle_at_center,white,transparent)] opacity-40 stroke-white/10 fill-white/5"
                    )}
                />
            </div>

            {/* Ambient Dynamic Glow Orbs */}
            <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center overflow-hidden">
                <div className="absolute left-[-10%] top-[4%] h-[550px] w-[550px] rounded-full bg-primary/10 blur-[140px]" />
                <div className="absolute right-[-10%] top-[30%] h-[500px] w-[500px] rounded-full bg-accent/10 blur-[150px]" />
                <div className="absolute left-[25%] bottom-[15%] h-[450px] w-[450px] rounded-full bg-secondary/10 blur-[140px]" />
            </div>

            <div className="w-[92%] max-w-7xl mx-auto py-12 sm:py-16 md:py-24 flex flex-col gap-20 sm:gap-24 md:gap-32">

                {/* 1. Hero / Introduction Section */}
                <motion.section
                    aria-labelledby="about-hero-title"
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                    className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-6 sm:space-y-8"
                >
                    <motion.div variants={itemVariants}>
                        <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-xs sm:text-sm font-special text-accent tracking-wider uppercase backdrop-blur-md shadow-[0_0_15px_rgba(223,251,21,0.1)]">
                            <Sparkles className="w-4 h-4 text-accent" />
                            <span>About BrackeT ⚡ The Competitive Coding Arena</span>
                        </div>
                    </motion.div>

                    <motion.h1
                        id="about-hero-title"
                        variants={itemVariants}
                        className="text-3xl sm:text-5xl md:text-6xl font-heading font-bold tracking-tight text-foreground leading-[1.12] text-balance"
                    >
                        Leveling Up Developer Practice Through{" "}
                        <AuroraText colors={auraColor}>
                            Competitive Duels
                        </AuroraText>
                    </motion.h1>

                    <motion.p
                        variants={itemVariants}
                        className="text-sm sm:text-base md:text-lg lg:text-xl text-foreground/80 leading-relaxed max-w-3xl font-sans"
                    >
                        Traditional coding platforms leave developers practicing algorithms in sterile isolation.
                        BrackeT transforms problem solving into an esports-caliber battleground where engineers test
                        their logic under live pressure, climb the ranked ladder, and prepare for real-world tech interviews.
                    </motion.p>

                    <motion.div variants={itemVariants} className="w-full max-w-lg">
                        <blockquote className="border-l-2 border-accent pl-4 py-1.5 text-xs sm:text-sm font-special italic text-accent/90 text-left bg-accent/5 rounded-r-md">
                            "More than solving problems. Play the match."
                        </blockquote>
                    </motion.div>

                    {/* Quick Stats Grid */}
                    <motion.div
                        variants={itemVariants}
                        className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 w-full pt-4 sm:pt-6"
                    >
                        {stats.map((stat) => {
                            const StatIcon = stat.icon;
                            return (
                                <div
                                    key={stat.label}
                                    className="group rounded-xl border border-border/40 bg-card/60 p-4 sm:p-5 backdrop-blur-md transition-all duration-300 hover:border-accent/50 hover:bg-card/90 flex flex-col items-center justify-center text-center shadow-lg hover:shadow-[0_0_20px_rgba(223,251,21,0.08)]"
                                >
                                    <div className="p-2 rounded-lg bg-primary/20 text-accent mb-2 group-hover:scale-110 transition-transform">
                                        <StatIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                                    </div>
                                    <span className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-special text-accent tracking-tight">
                                        {stat.value}
                                    </span>
                                    <span className="text-xs sm:text-sm font-semibold text-foreground mt-1">
                                        {stat.label}
                                    </span>
                                    <span className="text-[10px] sm:text-[11px] text-foreground/60 mt-0.5 font-special">
                                        {stat.subtext}
                                    </span>
                                </div>
                            );
                        })}
                    </motion.div>
                </motion.section>

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
                            <h2 id="who-we-are-title" className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold tracking-tight">
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

                {/* 3. What We Offer (Core Platform Pillars) */}
                <motion.section
                    aria-labelledby="pillars-title"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    variants={containerVariants}
                    className="flex flex-col space-y-10"
                >
                    <motion.div variants={itemVariants} className="text-center max-w-2xl mx-auto space-y-3">
                        <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3.5 py-1 text-xs font-special text-primary-foreground tracking-wider uppercase">
                            <Layers className="w-3.5 h-3.5 text-accent" />
                            <span>Platform Capabilities</span>
                        </div>
                        <h2 id="pillars-title" className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold tracking-tight">
                            What BrackeT Offers
                        </h2>
                        <p className="text-xs sm:text-sm md:text-base text-foreground/70">
                            A complete suite of tools tailored for competitive developers, algorithmic enthusiasts, and job seekers.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6"
                    >
                        {platformPillars.map((pillar) => {
                            const IconComponent = pillar.icon;
                            return (
                                <motion.div
                                    key={pillar.title}
                                    variants={itemVariants}
                                    className="group relative rounded-xl border border-border/40 bg-card/60 p-6 backdrop-blur-sm transition-all duration-300 hover:border-accent/60 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(223,251,21,0.1)] flex flex-col justify-between overflow-hidden"
                                >
                                    {/* Top subtle gradient accent */}
                                    <div className={cn("absolute inset-x-0 top-0 h-1 bg-gradient-to-r", pillar.accent)} />

                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between">
                                            <div className="p-3 rounded-lg bg-primary/30 text-accent group-hover:scale-110 transition-transform">
                                                <IconComponent className="w-6 h-6" />
                                            </div>
                                            <span className="text-[10px] uppercase tracking-wider font-special px-2.5 py-1 rounded-full bg-accent/10 text-accent border border-accent/20">
                                                {pillar.tag}
                                            </span>
                                        </div>

                                        <h3 className="text-lg font-bold text-foreground group-hover:text-accent transition-colors font-heading">
                                            {pillar.title}
                                        </h3>

                                        <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed">
                                            {pillar.description}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </motion.section>

                {/* 4. Core Values & Principles */}
                <motion.section
                    aria-labelledby="values-title"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    variants={containerVariants}
                    className="flex flex-col space-y-10"
                >
                    <motion.div variants={itemVariants} className="text-center max-w-2xl mx-auto space-y-3">
                        <div className="inline-flex items-center gap-2 rounded-full border border-secondary/40 bg-secondary/10 px-3.5 py-1 text-xs font-special text-secondary tracking-wider uppercase">
                            <ShieldCheck className="w-3.5 h-3.5" />
                            <span>Standards of Excellence</span>
                        </div>
                        <h2 id="values-title" className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold tracking-tight">
                            Our Core Principles
                        </h2>
                        <p className="text-xs sm:text-sm md:text-base text-foreground/70">
                            The standards that guide the design of our matchmaking, code execution engine, and community.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6"
                    >
                        {coreValues.map((val) => {
                            const Icon = val.icon;
                            return (
                                <motion.div
                                    key={val.title}
                                    variants={itemVariants}
                                    className="group rounded-xl border border-border/40 bg-card/50 p-6 backdrop-blur-sm flex items-start gap-4 hover:border-accent/50 hover:bg-card/80 transition-all duration-300"
                                >
                                    <div className="p-3 rounded-lg bg-primary/20 text-accent shrink-0 group-hover:scale-110 transition-transform">
                                        <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                                    </div>
                                    <div className="space-y-1">
                                        <h3 className="text-base font-bold text-foreground font-heading">
                                            {val.title}
                                        </h3>
                                        <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed">
                                            {val.description}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </motion.section>

                {/* 5. Useful Links & Platform Navigation */}
                <motion.section
                    aria-labelledby="useful-links-title"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    variants={containerVariants}
                    className="flex flex-col space-y-8"
                >
                    <motion.div variants={itemVariants} className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border/30 pb-4">
                        <div>
                            <div className="flex items-center gap-2 text-accent text-xs font-special uppercase tracking-wider mb-1">
                                <Compass className="w-4 h-4" />
                                <span>Platform Directory</span>
                            </div>
                            <h2 id="useful-links-title" className="text-2xl sm:text-3xl font-heading font-bold tracking-tight">
                                Useful Links & Navigation
                            </h2>
                        </div>
                        <p className="text-xs sm:text-sm text-foreground/60 max-w-md">
                            Jump straight into the competitive arena, explore problems, or examine the open-source repository.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
                    >
                        <motion.div variants={itemVariants}>
                            <Link
                                to="/problems"
                                className="group h-full rounded-xl border border-border/40 bg-card/60 p-5 backdrop-blur-sm hover:border-accent/60 hover:bg-card/90 transition-all flex flex-col justify-between"
                            >
                                <div className="space-y-2">
                                    <div className="flex items-center justify-between">
                                        <BookOpen className="w-5 h-5 text-accent group-hover:scale-110 transition-transform" />
                                        <ArrowRight className="w-4 h-4 text-foreground/40 group-hover:text-accent group-hover:translate-x-1 transition-all" />
                                    </div>
                                    <h3 className="font-bold text-foreground text-base group-hover:text-accent transition-colors font-heading">
                                        Problem Catalog
                                    </h3>
                                    <p className="text-xs text-foreground/70">
                                        Browse algorithmic challenges categorized by topic, tags, and numerical ratings.
                                    </p>
                                </div>
                                <span className="text-[11px] font-special text-accent mt-4">
                                    Browse Problems →
                                </span>
                            </Link>
                        </motion.div>

                        <motion.div variants={itemVariants}>
                            <Link
                                to="/rival"
                                className="group h-full rounded-xl border border-border/40 bg-card/60 p-5 backdrop-blur-sm hover:border-accent/60 hover:bg-card/90 transition-all flex flex-col justify-between"
                            >
                                <div className="space-y-2">
                                    <div className="flex items-center justify-between">
                                        <Swords className="w-5 h-5 text-accent group-hover:scale-110 transition-transform" />
                                        <ArrowRight className="w-4 h-4 text-foreground/40 group-hover:text-accent group-hover:translate-x-1 transition-all" />
                                    </div>
                                    <h3 className="font-bold text-foreground text-base group-hover:text-accent transition-colors font-heading">
                                        1v1 Rival Arena
                                    </h3>
                                    <p className="text-xs text-foreground/70">
                                        Queue up against matched opponents with synchronized clocks and live status.
                                    </p>
                                </div>
                                <span className="text-[11px] font-special text-accent mt-4">
                                    Enter Arena →
                                </span>
                            </Link>
                        </motion.div>

                        <motion.div variants={itemVariants}>
                            <Link
                                to="/interview"
                                className="group h-full rounded-xl border border-border/40 bg-card/60 p-5 backdrop-blur-sm hover:border-accent/60 hover:bg-card/90 transition-all flex flex-col justify-between"
                            >
                                <div className="space-y-2">
                                    <div className="flex items-center justify-between">
                                        <Code2 className="w-5 h-5 text-accent group-hover:scale-110 transition-transform" />
                                        <ArrowRight className="w-4 h-4 text-foreground/40 group-hover:text-accent group-hover:translate-x-1 transition-all" />
                                    </div>
                                    <h3 className="font-bold text-foreground text-base group-hover:text-accent transition-colors font-heading">
                                        Interview Prep
                                    </h3>
                                    <p className="text-xs text-foreground/70">
                                        Simulate high-pressure technical interview environments and time constraints.
                                    </p>
                                </div>
                                <span className="text-[11px] font-special text-accent mt-4">
                                    Start Session →
                                </span>
                            </Link>
                        </motion.div>

                        <motion.div variants={itemVariants}>
                            <a
                                href="https://github.com/Riad-Zz/BrackeT"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group h-full rounded-xl border border-border/40 bg-card/60 p-5 backdrop-blur-sm hover:border-accent/60 hover:bg-card/90 transition-all flex flex-col justify-between"
                            >
                                <div className="space-y-2">
                                    <div className="flex items-center justify-between">
                                        <ExternalLink className="w-5 h-5 text-accent group-hover:scale-110 transition-transform" />
                                        <ArrowRight className="w-4 h-4 text-foreground/40 group-hover:text-accent group-hover:translate-x-1 transition-all" />
                                    </div>
                                    <h3 className="font-bold text-foreground text-base group-hover:text-accent transition-colors font-heading">
                                        GitHub Repository
                                    </h3>
                                    <p className="text-xs text-foreground/70">
                                        Contribute to BrackeT, report platform bugs, and inspect our roadmap.
                                    </p>
                                </div>
                                <span className="text-[11px] font-special text-accent mt-4">
                                    View Source ↗
                                </span>
                            </a>
                        </motion.div>
                    </motion.div>
                </motion.section>

                {/* 6. Contact & Inquiry Section */}
                <ContactSection />

            </div>
        </main>
    );
};

export default About;