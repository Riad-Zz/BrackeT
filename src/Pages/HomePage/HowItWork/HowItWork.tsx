import { Highlighter } from "@/components/ui/highlighter";
import { HyperText } from "@/components/ui/hyper-text";
import queueIcon from "@/assets/Queue.gif"
import VersusIcon from "@/assets/Versus.png"
import WinnIcon from "@/assets/Win.png"
import { useRef } from "react";
import { AnimatedBeam } from "@/components/ui/animated-beam";

const HowItWork = () => {
    const containerRef = useRef<HTMLDivElement>(null)
    const div1Ref = useRef<HTMLDivElement>(null)
    const div2Ref = useRef<HTMLDivElement>(null)
    const div3Ref = useRef<HTMLDivElement>(null)

    return (
        <div className="max-w-11/12 xl:max-w-7xl mx-auto my-20">
            {/* ----------------- Top Text/Motivation ------------------- */}
            <div className="mx-auto w-fit rounded-full border-b border-accent px-4 py-1.5 sm:px-6 md:px-10 mb-8 md:mb-12">
                <div className="flex items-center gap-2 sm:gap-4 whitespace-nowrap text-[10px] sm:text-xs md:text-sm font-black uppercase tracking-[0.2em] sm:tracking-[0.35em] text-white">
                    <HyperText as='span' className='text-[10px] sm:text-xs md:text-sm startOnView delay-300'>
                        Queue
                    </HyperText>
                    <span className="text-[6px] sm:text-[8px] md:text-[10px] opacity-80">●</span>
                    <HyperText as='span' className='text-[10px] sm:text-xs md:text-sm startOnView'>
                        Code
                    </HyperText>
                    <span className="text-[6px] sm:text-[8px] md:text-[10px] opacity-80">●</span>
                    <HyperText as='span' className='text-[10px] sm:text-xs md:text-sm startOnView'>
                        Climb
                    </HyperText>
                </div>
            </div>

            {/* Title and Subtitle Section  */}
            <div className="text-center flex flex-col items-center space-y-3">
                {/* title  */}
                <div className="text-4xl  tracking-tight font-bold">Just solving problems isn't enough. <br /> <span className="text-accent">Can you beat your rival?</span> </div>
                {/* Subtitle  */}
                <div className="tracking-tight max-w-xl mx-auto mt-3"> <Highlighter color="#0052d8" isView={true} > Stop solving problems alone with no pressure</Highlighter> and no stakes. On BrackeT,  <Highlighter action="underline" color="#dffb15" isView={true}>you'll face real opponents,</Highlighter>  solve under pressure, and build your rating through every session.</div>
            </div>

            {/*-------------------------------- Workflow Describe Section Queue -> Code -> Climb (Concept 1) --------------------  */}

            {/* <div className="flex my-10 flex-col  md:flex-row justify-center gap-10 relative" ref={containerRef}>
                <div className="flex-1 z-10 bg-[#15191B] p-10 rounded-xl" ref={div1Ref}>
                    <div className="">
                        <img src={queueIcon} alt="" className="w-10 h-10 bg-accent rounded-full mb-7" />
                    </div>
                    <p className="text-2xl font-bold my-4">Queue Up</p>
                    <p className="text-lg my-2">Find your next rival.</p>
                    <p className="text-sm my-1 text-gray-400">Enter the queue and get matched with a coder ready to compete at your level.</p>
                </div>

                <div className="flex-1 z-10 bg-[#15191B] p-10 rounded-sm" ref={div2Ref}>
                    <div className="">
                        <img src={VersusIcon} alt="" className="w-10 h-10 bg-accent rounded-full mb-7" />
                    </div>
                    <p className="text-2xl font-bold my-4">Enter the Arena</p>
                    <p className="text-lg my-2">Same problem. Same clock. One winner.</p>
                    <p className="text-sm my-1 text-gray-400">Solve the challenge before your opponent does. Speed, accuracy, and strategy all matter.</p>
                </div>

                <div className="flex-1 z-10 bg-[#15191B] p-10 rounded-sm" ref={div3Ref}>
                    <div className="">
                        <img src={WinnIcon} alt="" className="w-10 h-10 bg-accent rounded-full mb-7" />
                    </div>
                    <p className="text-2xl font-bold my-4">Climb the Ranks</p>
                    <p className="text-lg my-2">Win duels. Gain RR. Become harder to beat.</p>
                    <p className="text-sm my-1 text-gray-400">Every victory pushes your rating higher and brings you closer to the next rank.</p>
                </div>

                <AnimatedBeam
                    duration={3}
                    containerRef={containerRef}
                    fromRef={div1Ref}
                    toRef={div2Ref}
                    pathColor="#ffffff" 
                    gradientStartColor="#0052d8"
                    gradientStopColor="#dffb15"
                />

                <AnimatedBeam
                    duration={3}
                    containerRef={containerRef}
                    fromRef={div2Ref}
                    toRef={div3Ref}
                    pathColor="#ffffff"
                    gradientStartColor="#0052d8"
                    gradientStopColor="#dffb15"
                />
            </div> 
            */}




            {/*--------------------- Workflow Describe Section Queue -> Code -> Climb (Concept 2) -------------------------- */}
         
            <div className="flex mt-20 mb-10 flex-col md:flex-row justify-center items-start gap-10 md:gap-4 relative" ref={containerRef}>
                
                {/* Queue Step  */}
                <div className="flex-1 flex flex-col items-center text-center z-10 px-4">
                   
                    <div ref={div1Ref} className="w-24 h-24 rounded-full bg-[#15191B] border border-gray-800 flex items-center justify-center z-10 mb-6 shadow-xl">
                        <img src={queueIcon} alt="" className="w-12 h-12 bg-accent rounded-full" />
                    </div>
                    {/* Text content floats below unboxed */}
                    <p className="text-2xl font-bold text-foreground mb-2">Queue Up</p>
                    <p className="text-sm font-medium text-gray-300 mb-2">Find your next rival.</p>
                    <p className="text-xs text-gray-500 max-w-62.5">Enter the queue and get matched with a coder ready to compete at your level.</p>
                </div>

                {/* Code Step  */}
                <div className="flex-1 flex flex-col items-center text-center z-10 px-4">
                    <div ref={div2Ref} className="w-24 h-24 rounded-full bg-[#15191B] border border-gray-800 flex items-center justify-center z-10 mb-6 shadow-xl">
                        <img src={VersusIcon} alt="" className="w-12 h-12 bg-accent rounded-full" />
                    </div>
                    <p className="text-2xl font-bold text-foreground mb-2">Enter the Arena</p>
                    <p className="text-sm font-medium text-gray-300 mb-2">Same problem. Same clock. One winner.</p>
                    <p className="text-xs text-gray-500 max-w-62.5">Solve the challenge before your opponent does. Speed, accuracy, and strategy all matter.</p>
                </div>

                {/* Climb Step  */}
                <div className="flex-1 flex flex-col items-center text-center z-10 px-4">
                    <div ref={div3Ref} className="w-24 h-24 rounded-full bg-[#15191B] border border-gray-800 flex items-center justify-center z-10 mb-6 shadow-xl">
                        <img src={WinnIcon} alt="" className="w-12 h-12 bg-accent rounded-full" />
                    </div>
                    <p className="text-2xl font-bold text-foreground mb-2">Climb the Ranks</p>
                    <p className="text-sm font-medium text-gray-300 mb-2">Win duels. Gain RR. Become harder to beat.</p>
                    <p className="text-xs text-gray-500 max-w-62.5">Every victory pushes your rating higher and brings you closer to the next rank.</p>
                </div>

                {/* Animated Beams */}
                <AnimatedBeam
                    duration={6}
                    pathLengthValues={[0, 1, 1]}
                    pathLengthTimes={[0, 0.5, 1]}
                    containerRef={containerRef}
                    fromRef={div1Ref}
                    toRef={div2Ref}
                    pathColor="rgba(255,255,255,0.1)" 
                    gradientStartColor="#0052d8"
                    gradientStopColor="#dffb15"
                />

                <AnimatedBeam
                    duration={6}
                    pathLengthValues={[0, 0, 1]}
                    pathLengthTimes={[0, 0.5, 1]}
                    containerRef={containerRef}
                    fromRef={div2Ref}
                    toRef={div3Ref}
                    pathColor="rgba(255,255,255,0.1)"
                    gradientStartColor="#dffb15"
                    gradientStopColor="#0052d8"
                />
            </div>

        </div>
    );
};

export default HowItWork;