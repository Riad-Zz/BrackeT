import { Swords } from "lucide-react";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import avatar1 from "@/assets/Avatar1.jpeg";
import avatar2 from "@/assets/Avatar2.png";
import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/ui/terminal";
import { motion } from "framer-motion";

// Reusable glassy card styling: subtle background, clean borders, and consistent typography
const glassCardClass = "rounded-2xl border border-white/10 bg-white/[0.02]  hover:bg-white/[0.04] transition-colors shadow-sm overflow-hidden [&_h3]:text-white [&_p]:text-gray-400";

const features = [
  {
    Icon: () => null,
    name: "Code in the Arena",
    description:
      "Solve problems, write your solution, and compete head-to-head in real time.",
    href: "/problem",
    cta: "Enter the arena",
    className: `col-span-3 lg:col-span-2 ${glassCardClass}`,
    background: (
      <div className="absolute left-1/2 top-4 w-[90%] lg:w-[80%] -translate-x-1/2 origin-top transition-all duration-300 ease-out group-hover:scale-[1.02] [mask-image:linear-gradient(to_bottom,#000_60%,transparent_100%)]">
        <Terminal className="w-full border border-white/10 bg-[#0E1011]/90 shadow-2xl backdrop-blur-md opacity-70 hover:opacity-90">
          {/* C++ Code Snippet */}
          <TypingAnimation className="font-mono text-xs text-[var(--secondary)] md:text-sm">
            #include &lt;iostream&gt;
          </TypingAnimation>

          <AnimatedSpan className="font-mono text-xs text-[var(--secondary)] md:text-sm">
            using namespace std;
          </AnimatedSpan>

          <AnimatedSpan className="font-mono text-xs text-gray-300 md:text-sm pt-2">
            void solve() {"{"}
          </AnimatedSpan>

          <AnimatedSpan className="font-mono text-xs text-gray-300 md:text-sm">
            {"}"}
          </AnimatedSpan>

          <AnimatedSpan className="font-mono text-xs text-[var(--accent)] md:text-sm pt-2">
            int main() {"{"}
          </AnimatedSpan>

          <AnimatedSpan className="font-mono text-xs text-gray-300 md:text-sm pl-4">
            solve();
          </AnimatedSpan>

          <AnimatedSpan className="font-mono text-xs text-gray-300 md:text-sm pl-4">
            return 0;
          </AnimatedSpan>

          <AnimatedSpan className="font-mono text-xs text-[var(--accent)] md:text-sm">
            {"}"}
          </AnimatedSpan>
        </Terminal>
      </div>
    ),
  },

  {
    Icon: () => null,
    name: "Live Match",
    description:
      "You are not solving alone. Every match puts your skills against another coder.",
    href: "/rival",
    cta: "See how it works",
    className: `col-span-3 lg:col-span-1 ${glassCardClass}`,
    background: (
      <div className="absolute inset-x-4 top-8 flex items-center justify-center transition-all duration-300 ease-out group-hover:scale-105">
        <div className="flex w-full items-center justify-between rounded-xl border border-white/10 bg-[#0E1011]/80 p-4 shadow-xl backdrop-blur-md">
          
          {/* Player 1: KaZuha */}
          <div className="text-center">
            <div className="mx-auto mb-2 flex size-12 items-center justify-center overflow-hidden rounded-full border-2 border-[var(--primary)] bg-[var(--primary)] shadow-[0_0_15px_rgba(0,82,216,0.4)]">
              <img src={avatar1} alt="KaZuha" className="h-full w-full object-cover" />
            </div>
            <p className="text-sm font-semibold text-white">KaZuha</p>
            <p className="font-mono text-xs text-gray-500">1240 RR</p>
          </div>

          <div className="text-[var(--accent)]">
            <Swords className="size-5 drop-shadow-[0_0_8px_rgba(223,251,21,0.4)]" />
          </div>

          {/* Player 2: Emma */}
          <div className="text-center">
            <div className="mx-auto mb-2 flex size-12 items-center justify-center overflow-hidden rounded-full border-2 border-[var(--secondary)] bg-[var(--secondary)] shadow-[0_0_15px_rgba(75,198,157,0.3)]">
              <img src={avatar2} alt="Emma" className="h-full w-full object-cover" />
            </div>
            <p className="text-sm font-semibold text-white">Emma</p>
            <p className="font-mono text-xs text-gray-500">1218 RR</p>
          </div>
          
        </div>
      </div>
    ),
  },

  {
    Icon: () => null,
    name: "Climb the Ladder",
    description:
      "Turn every win into progress and every match into part of your competitive record.",
    href: "/profile",
    cta: "Explore ranks",
    className: `col-span-3 lg:col-span-1 ${glassCardClass}`,
    background: (
      <div className="absolute inset-x-5 top-10 transition-all duration-300 ease-out group-hover:scale-105">
        <div className="space-y-4 rounded-xl border border-white/10 bg-[#0E1011]/80 p-5 shadow-xl backdrop-blur-sm">
          <div className="flex items-center justify-between text-sm">
            <span className="font-bold tracking-wider text-white">GOLD III</span>
            <span className="font-mono font-bold text-[var(--accent)]">1240 RR</span>
          </div>

          <div className="h-2 w-full overflow-hidden rounded-full bg-gray-800 shadow-inner">
            <div className="h-full w-[72%] rounded-full bg-[var(--accent)] shadow-[0_0_10px_rgba(223,251,21,0.5)]" />
          </div>

          <div className="flex justify-between font-mono text-[10px] uppercase tracking-wider text-gray-500">
            <span>0 RR</span>
            <span className="text-gray-300">+24 this match</span>
            <span>1500 RR</span>
          </div>
        </div>
      </div>
    ),
  },

  {
    Icon: () => null,
    name: "Every Match Counts",
    description:
      "Track wins, losses, streaks, and rating changes as your record grows.",
    href: "/rivalhistory",
    cta: "View your record",
    className: `col-span-3 lg:col-span-2 ${glassCardClass}`,
    background: (
      <div className="absolute right-4 top-6 flex w-[70%] flex-col gap-6 transition-all duration-300 ease-out group-hover:scale-105 [mask-image:linear-gradient(to_bottom,#000_40%,transparent_100%)]">
        <div className="grid grid-cols-5 gap-2">
          {[
            { result: "WIN", value: "+24" },
            { result: "WIN", value: "+18" },
            { result: "LOSS", value: "-17" },
            { result: "WIN", value: "+22" },
            { result: "WIN", value: "+26" },
          ].map((match, index) => (
            <div
              key={index}
              className="rounded-lg border border-white/10 bg-[#0E1011]/80 py-3 text-center shadow-md backdrop-blur-sm"
            >
              <p className="text-[9px] font-bold uppercase tracking-widest text-gray-500">
                {match.result}
              </p>
              <p
                className={`mt-1 text-xs font-bold md:text-sm ${
                  match.result === "LOSS" ? "text-white" : "text-[var(--accent)]"
                }`}
              >
                {match.value}
              </p>
            </div>
          ))}
        </div>

        <div className="flex h-28 items-end gap-2 opacity-90">
          {[35, 48, 42, 65, 58, 78, 92].map((height, index) => (
            <div
              key={index}
              className="flex-1 rounded-t-sm bg-[var(--primary)] transition-all duration-500"
              style={{ height: `${height}%` }}
            />
          ))}
        </div>
      </div>
    ),
  },
];

export function BentoSection() {
  return (
    <section className="mx-auto max-w-11/12 py-24 xl:max-w-7xl relative overflow-hidden">
      
      {/* Animated Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto mb-14 max-w-3xl text-center relative z-10"
      >
        <h2 className="mb-6 text-3xl font-bold tracking-tight text-[var(--foreground)] md:text-5xl lg:text-6xl">
          More than solving problems. <br />
          <span className="text-[var(--accent)] drop-shadow-[0_0_20px_rgba(223,251,21,0.2)]">
            Play the match.
          </span>
        </h2>

        <p className="mx-auto mt-4 max-w-2xl font-mono text-sm leading-relaxed text-gray-400 md:text-base">
          BracKeT turns coding practice into a competitive experience where
          <br className="hidden md:block" /> every match matters.
        </p>
      </motion.div>

      <div className="relative mx-auto w-full">
        {/* Dynamic Multi-Color Ambient Glows behind the grid */}
        <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
          {/* Animated Primary Glow */}
          <motion.div 
            animate={{ 
              scale: [1, 1.1, 1], 
              opacity: [0.1, 0.15, 0.1] 
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[6%] left-[15%] h-[400px] w-[500px] rounded-full bg-[var(--primary)] blur-[120px] sm:h-[500px]" 
          />
          {/* Animated Accent Glow */}
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1], 
              opacity: [0.08, 0.12, 0.08] 
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-[5%] right-[10%] h-[400px] w-[500px] rounded-full bg-[var(--accent)] blur-[120px] sm:h-[400px]" 
          />
        </div>

        {/* Animated Grid Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        >
          <BentoGrid className="mx-auto w-full">
            {features.map((feature, index) => (
              <BentoCard key={index} {...feature} />
            ))}
          </BentoGrid>
        </motion.div>

      </div>
    </section>
  );
}