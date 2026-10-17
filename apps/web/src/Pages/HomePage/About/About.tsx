import { useEffect } from "react";
import { Link } from "react-router";
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
} from "lucide-react";
import MainLogo from "@/assets/MainLogo.png";
import { AuroraText } from "@/components/ui/aurora-text";
import { Button } from "@/components/ui/button";
import { ContactSection } from "./components/ContactSection";
import { Compass, ExternalLink } from "lucide-react";

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
        },
        {
            icon: Code2,
            title: "Monaco Coding Arena",
            tag: "VS Code Power",
            description:
                "Solve problems in an industrial-grade in-browser editor featuring syntax highlighting, multi-language switching, and fluid resizable panels.",
        },
        {
            icon: Trophy,
            title: "Ranked Rating (RR) Ladder",
            tag: "Elo Progression",
            description:
                "Climb through competitive tiers from Bronze to Champion as you defend win streaks and prove your algorithmic mastery.",
        },
        {
            icon: BookOpen,
            title: "Curated Problem Catalog",
            tag: "Targeted Practice",
            description:
                "Practice a rich set of challenges across Data Structures, Algorithms, Databases, and Shell scripting with numerical ratings and tags.",
        },
    ];

    const coreValues = [
        {
            icon: ShieldCheck,
            title: "Fair Play & Deterministic Judging",
            description:
                "Every line of code is evaluated in isolated sandboxes against identical test cases to guarantee fair, tamper-proof competition.",
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
        { label: "Active Languages", value: "6+", subtext: "C++, Python, JS, TS, Java, Go" },
        { label: "Duel Mode", value: "1v1", subtext: "Synchronized live battles" },
        { label: "Editor Engine", value: "Monaco", subtext: "VS Code in your browser" },
        { label: "Competitive Tiers", value: "7", subtext: "Bronze to Champion" },
    ];

    return (
        <main className="relative min-h-[calc(100vh-80px)] w-full overflow-hidden bg-background text-foreground">
            {/* Ambient Background Glows */}
            <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center overflow-hidden">
                <div className="absolute left-[-15%] top-[5%] h-[550px] w-[550px] rounded-full bg-primary/10 blur-[150px]" />
                <div className="absolute right-[-10%] top-[35%] h-[500px] w-[500px] rounded-full bg-accent/10 blur-[150px]" />
                <div className="absolute left-[20%] bottom-[10%] h-[400px] w-[400px] rounded-full bg-secondary/10 blur-[150px]" />
            </div>

            <div className="w-[92%] max-w-7xl mx-auto py-12 md:py-20 flex flex-col gap-20 md:gap-28">

                {/* 1. Hero / Introduction Section */}
                <section aria-labelledby="about-hero-title" className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-6">
                    <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/5 px-4 py-1.5 text-xs md:text-sm font-special text-accent tracking-wider uppercase">
                        <Sparkles className="w-4 h-4 text-accent" />
                        <span>About BrackeT ⚡ The Competitive Coding Arena</span>
                    </div>

                    <h1
                        id="about-hero-title"
                        className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-foreground leading-[1.15]"
                    >
                        Leveling Up Developer Practice Through{" "}
                        <AuroraText colors={auraColor}>
                            Competitive Duels
                        </AuroraText>
                    </h1>

                    <p className="text-base sm:text-lg md:text-xl text-foreground/75 leading-relaxed max-w-3xl">
                        Traditional coding platforms leave developers practicing algorithms in sterile isolation.
                        BrackeT reimagines problem solving into an esports-caliber battleground where engineers test
                        their logic under live pressure, climb the ranked ladder, and prepare for real-world tech interviews.
                    </p>

                    <blockquote className="border-l-2 border-accent pl-4 py-1 text-sm md:text-base font-special italic text-accent/90">
                        "More than solving problems. Play the match."
                    </blockquote>

                    {/* Quick Stats Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full pt-6">
                        {stats.map((stat) => (
                            <div
                                key={stat.label}
                                className="rounded-xl border border-border/40 bg-card/60 p-4 backdrop-blur-sm flex flex-col items-center justify-center text-center"
                            >
                                <span className="text-2xl sm:text-3xl font-bold font-special text-accent">
                                    {stat.value}
                                </span>
                                <span className="text-xs sm:text-sm font-semibold text-foreground mt-1">
                                    {stat.label}
                                </span>
                                <span className="text-[11px] text-foreground/60 mt-0.5">
                                    {stat.subtext}
                                </span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 2. Who We Are & Mission Section */}
                <section aria-labelledby="who-we-are-title" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="flex flex-col space-y-6">
                        <div className="flex items-center gap-3">
                            <Target className="w-6 h-6 text-accent" />
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

                        <div className="flex flex-wrap items-center gap-4 pt-2">
                            <Link to="/problems">
                                <Button className="rounded-full px-6 bg-accent text-background font-bold hover:bg-accent/90 cursor-pointer">
                                    Explore Problem Catalog <ArrowRight className="w-4 h-4 ml-1" />
                                </Button>
                            </Link>
                            <Link to="/">
                                <Button variant="outline" className="rounded-full px-6 border-border hover:bg-card/80 text-foreground cursor-pointer">
                                    View Live Arena Demo
                                </Button>
                            </Link>
                        </div>
                    </div>

                    {/* Visual Card / Brand Identity */}
                    <div className="relative rounded-2xl border border-border/50 bg-card/80 p-8 shadow-2xl backdrop-blur-md flex flex-col space-y-6">
                        <div className="flex items-center gap-4">
                            <img src={MainLogo} alt="BrackeT Logo" className="w-14 h-14 object-contain" />
                            <div>
                                <h3 className="text-xl font-bold font-special text-foreground">
                                    BrackeT.io
                                </h3>
                                <p className="text-xs text-foreground/60 font-mono">
                                    Competitive Esports Coding Arena • Beta v0.0.1
                                </p>
                            </div>
                        </div>

                        <hr className="border-border/40" />

                        <div className="space-y-4 text-sm text-foreground/85">
                            <div className="flex items-start gap-3">
                                <div className="p-2 rounded-lg bg-primary/20 text-accent">
                                    <Target className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-foreground">The Mission</h4>
                                    <p className="text-foreground/70 text-xs mt-0.5">
                                        Empower developers to build unshakable problem-solving reflexes and eliminate interview anxiety through real-time challenge.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="p-2 rounded-lg bg-primary/20 text-secondary">
                                    <Sparkles className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-foreground">The Vision</h4>
                                    <p className="text-foreground/70 text-xs mt-0.5">
                                        A global digital colosseum where algorithms meet sportsmanship, rated fairly by Elo logic and transparent execution.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. What We Offer (Core Platform Pillars) */}
                <section aria-labelledby="pillars-title" className="flex flex-col space-y-10">
                    <div className="text-center max-w-2xl mx-auto space-y-3">
                        <h2 id="pillars-title" className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
                            What BrackeT Offers
                        </h2>
                        <p className="text-sm sm:text-base text-foreground/70">
                            A complete suite of tools tailored for competitive developers, algorithmic enthusiasts, and job seekers.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {platformPillars.map((pillar) => {
                            const IconComponent = pillar.icon;
                            return (
                                <div
                                    key={pillar.title}
                                    className="group relative rounded-xl border border-border/40 bg-card/60 p-6 backdrop-blur-sm transition-all duration-300 hover:border-accent/60 hover:-translate-y-1 flex flex-col justify-between"
                                >
                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between">
                                            <div className="p-3 rounded-lg bg-primary/30 text-accent group-hover:scale-110 transition-transform">
                                                <IconComponent className="w-6 h-6" />
                                            </div>
                                            <span className="text-[10px] uppercase tracking-wider font-special px-2.5 py-1 rounded-full bg-accent/10 text-accent border border-accent/20">
                                                {pillar.tag}
                                            </span>
                                        </div>

                                        <h3 className="text-lg font-bold text-foreground">
                                            {pillar.title}
                                        </h3>

                                        <p className="text-sm text-foreground/70 leading-relaxed">
                                            {pillar.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>

                {/* 4. Core Values & Principles */}
                <section aria-labelledby="values-title" className="flex flex-col space-y-10">
                    <div className="text-center max-w-2xl mx-auto space-y-3">
                        <h2 id="values-title" className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
                            Our Core Principles
                        </h2>
                        <p className="text-sm sm:text-base text-foreground/70">
                            The standards that guide the design of our matchmaking, code execution engine, and community.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {coreValues.map((val) => {
                            const Icon = val.icon;
                            return (
                                <div
                                    key={val.title}
                                    className="rounded-xl border border-border/40 bg-card/50 p-6 backdrop-blur-sm flex items-start gap-4"
                                >
                                    <div className="p-3 rounded-lg bg-primary/20 text-accent shrink-0">
                                        <Icon className="w-6 h-6" />
                                    </div>
                                    <div className="space-y-1">
                                        <h3 className="text-base font-bold text-foreground">
                                            {val.title}
                                        </h3>
                                        <p className="text-sm text-foreground/70 leading-relaxed">
                                            {val.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>

                {/* 5. Useful Links & Platform Navigation */}
                <section aria-labelledby="useful-links-title" className="flex flex-col space-y-8">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border/30 pb-4">
                        <div>
                            <div className="flex items-center gap-2 text-accent text-xs font-special uppercase tracking-wider mb-1">
                                <Compass className="w-4 h-4" />
                                <span>Platform Directory</span>
                            </div>
                            <h2 id="useful-links-title" className="text-2xl sm:text-3xl font-bold tracking-tight">
                                Useful Links & Navigation
                            </h2>
                        </div>
                        <p className="text-xs sm:text-sm text-foreground/60 max-w-md">
                            Jump straight into the competitive arena, explore problems, or examine the open-source repository.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        <Link
                            to="/problems"
                            className="group rounded-xl border border-border/40 bg-card/60 p-5 backdrop-blur-sm hover:border-accent/60 hover:bg-card/90 transition-all flex flex-col justify-between"
                        >
                            <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                    <BookOpen className="w-5 h-5 text-accent group-hover:scale-110 transition-transform" />
                                    <ArrowRight className="w-4 h-4 text-foreground/40 group-hover:text-accent group-hover:translate-x-1 transition-all" />
                                </div>
                                <h3 className="font-bold text-foreground text-base group-hover:text-accent transition-colors">
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

                        <Link
                            to="/rival"
                            className="group rounded-xl border border-border/40 bg-card/60 p-5 backdrop-blur-sm hover:border-accent/60 hover:bg-card/90 transition-all flex flex-col justify-between"
                        >
                            <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                    <Swords className="w-5 h-5 text-accent group-hover:scale-110 transition-transform" />
                                    <ArrowRight className="w-4 h-4 text-foreground/40 group-hover:text-accent group-hover:translate-x-1 transition-all" />
                                </div>
                                <h3 className="font-bold text-foreground text-base group-hover:text-accent transition-colors">
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

                        <Link
                            to="/interview"
                            className="group rounded-xl border border-border/40 bg-card/60 p-5 backdrop-blur-sm hover:border-accent/60 hover:bg-card/90 transition-all flex flex-col justify-between"
                        >
                            <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                    <Code2 className="w-5 h-5 text-accent group-hover:scale-110 transition-transform" />
                                    <ArrowRight className="w-4 h-4 text-foreground/40 group-hover:text-accent group-hover:translate-x-1 transition-all" />
                                </div>
                                <h3 className="font-bold text-foreground text-base group-hover:text-accent transition-colors">
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

                        <a
                            href="https://github.com/Riad-Zz/BrackeT"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group rounded-xl border border-border/40 bg-card/60 p-5 backdrop-blur-sm hover:border-accent/60 hover:bg-card/90 transition-all flex flex-col justify-between"
                        >
                            <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                    <ExternalLink className="w-5 h-5 text-accent group-hover:scale-110 transition-transform" />
                                    <ArrowRight className="w-4 h-4 text-foreground/40 group-hover:text-accent group-hover:translate-x-1 transition-all" />
                                </div>
                                <h3 className="font-bold text-foreground text-base group-hover:text-accent transition-colors">
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
                    </div>
                </section>

                {/* 6. Contact & Inquiry Section */}
                <ContactSection />

            </div>
        </main>
    );
};

export default About;