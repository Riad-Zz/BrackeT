import { useEffect } from "react";

const About = () => {
    useEffect(() => {
        document.title = "About Us | BrackeT ⚡ The Competitive Coding Arena";
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="relative min-h-[calc(100vh-80px)] w-full overflow-hidden bg-background text-foreground">
            {/* Ambient Background & Canvas Scaffolding */}
            <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center overflow-hidden">
                <div className="absolute left-[-10%] top-[10%] h-[500px] w-[500px] rounded-full bg-primary/10 blur-[140px]" />
                <div className="absolute right-[-10%] top-[40%] h-[450px] w-[450px] rounded-full bg-accent/10 blur-[140px]" />
            </div>

            <div className="w-[92%] max-w-7xl mx-auto py-12 md:py-16">
                {/* Preparation placeholder */}
                <div className="text-center">
                    <p className="text-sm font-special text-accent uppercase tracking-widest">
                        About BrackeT
                    </p>
                </div>
            </div>
        </main>
    );
};

export default About;