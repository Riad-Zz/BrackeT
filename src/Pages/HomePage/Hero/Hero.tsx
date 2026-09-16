import { Button } from '@/components/ui/button';
import { GridPattern } from '@/components/ui/grid-pattern';
import { HyperText } from '@/components/ui/hyper-text';
import { cn } from "@/lib/utils";
import { Link } from 'react-router';

const Hero = () => {
    return (
        <div className='max-w-11/12 xl:max-w-7xl m-auto'>

            {/* ----------------- Top Textss/Motivation------------------- */}
            <div className="mx-auto w-fit rounded-full border-b border-accent px-4 py-1 sm:px-6 md:px-10">
                <div className="flex items-center gap-2 sm:gap-4 whitespace-nowrap text-xs sm:text-sm font-black uppercase tracking-[0.2em] sm:tracking-[0.35em] text-white">
                    <HyperText as='span' className='text-xs sm:text-sm startOnView delay-300'>
                        SOLVE
                    </HyperText>
                    <span className="text-[8px] sm:text-[10px] opacity-80">●</span>
                    <HyperText as='span' className='text-xs sm:text-sm startOnView'>
                        ADAPT
                    </HyperText>
                    <span className="text-[8px] sm:text-[10px] opacity-80">●</span>
                    <HyperText as='span' className='text-xs sm:text-sm startOnView'>
                        OUTPLAY
                    </HyperText>

                </div>
            </div>

            {/* Main Hero Text */}
            <div className="flex flex-col items-center justify-center text-center px-4 mt-7 md:mt-13 space-y-6 md:space-y-8">
                {/* Title  */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-normal tracking-tight text-foreground max-w-4xl leading-[1.15] text-balance">
                    Unlock Your Potential Through <br className="hidden md:block" />
                    <span className="text-accent">Competitive Coding</span>
                </h1>
                {/* Subtitle*/}
                <p className="text-sm sm:text-base md:text-lg text-foreground/70 max-w-3xl text-balance leading-relaxed">
                    Challenge yourself in real-time coding battles, compete against developers from around the world, and turn every match into an opportunity to improve.
                </p>

                {/* Buttons Div */}
                <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 w-full sm:w-auto">
                    {/* Get Starrted Button  */}
                    <Link to={'/problems'}><Button className="w-full sm:w-auto rounded-full h-12 px-8 bg-foreground text-background hover:bg-foreground/90 text-base font-medium">Get Started</Button></Link> 

                    {/* Learn More button */}
                    <Link to={'/about'}><Button variant="outline"className="w-full sm:w-auto rounded-full h-12 px-8 bg-transparent border-foreground/30 text-foreground hover:bg-foreground/10 text-base font-medium">
                    Learn More
                    </Button></Link> 
                </div>
            </div>

            <div className="relative h-[700px] w-full overflow-hidden -top-60">
                <GridPattern
                    width={40} height={40} x={-1} y={-1} 
                    className={cn(
                        "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]"
                    )} />
                {/* <p className='relative top-70'>hello</p> */}
            </div>
            
        </div>
    );
};

export default Hero;