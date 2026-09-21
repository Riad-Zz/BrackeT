import { Highlighter } from "@/components/ui/highlighter";
import { HyperText } from "@/components/ui/hyper-text";

const HowItWork = () => {
    return (
        <div className="max-w-11/12 xl:max-w-7xl mx-auto my-10">
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
                {/* Subtittle  */}
                <div className="tracking-tight max-w-xl mx-auto mt-3"> <Highlighter  color="#0052d8" isView = {true} > Stop solving problems alone with no pressure</Highlighter> and no stakes. On BrackeT,  <Highlighter action="underline" color="#dffb15">you'll face real opponents,</Highlighter>  solve under pressure, and build your rating through every session.</div>
            </div>
            
        </div>
    );
};

export default HowItWork;