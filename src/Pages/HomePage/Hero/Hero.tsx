import { BorderBeam } from '@/components/ui/border-beam';
import { Button } from '@/components/ui/button';
import { GridPattern } from '@/components/ui/grid-pattern';
import { HeroVideoDialog } from '@/components/ui/hero-video-dialog';
import { HyperText } from '@/components/ui/hyper-text';
import { cn } from "@/lib/utils";
import { Link } from 'react-router';

const Hero = () => {
    return (
        // Changed to a relative wrapper that handles the overall layout and grid properly
        <section className="relative w-full flex flex-col items-center justify-center overflow-hidden pt-1 pb-24 md:pb-32">
            <div className="absolute inset-0 -z-10 flex h-full w-full items-center justify-center">
                <GridPattern
                    width={40} height={40} x={-1} y={-1}
                    className={cn(
                        "h-full w-full [mask-image:radial-gradient(860px_circle_at_center,white,transparent)]"
                    )}
                />
            </div>

            <div className="w-[92%] max-w-7xl mx-auto flex flex-col items-center">

                {/* ----------------- Top Text/Motivation ------------------- */}
                <div className="mx-auto w-fit rounded-full border-b border-accent px-4 py-1.5 sm:px-6 md:px-10 mb-8 md:mb-12">
                    <div className="flex items-center gap-2 sm:gap-4 whitespace-nowrap text-[10px] sm:text-xs md:text-sm font-black uppercase tracking-[0.2em] sm:tracking-[0.35em] text-white">
                        <HyperText as='span' className='text-[10px] sm:text-xs md:text-sm startOnView delay-300'>
                            SOLVE
                        </HyperText>
                        <span className="text-[6px] sm:text-[8px] md:text-[10px] opacity-80">●</span>
                        <HyperText as='span' className='text-[10px] sm:text-xs md:text-sm startOnView'>
                            ADAPT
                        </HyperText>
                        <span className="text-[6px] sm:text-[8px] md:text-[10px] opacity-80">●</span>
                        <HyperText as='span' className='text-[10px] sm:text-xs md:text-sm startOnView'>
                            OUTPLAY
                        </HyperText>
                    </div>
                </div>

                {/* ----------------- Main Hero Text ------------------- */}
                <div className="flex flex-col items-center justify-center text-center space-y-6 md:space-y-8 w-full max-w-4xl mx-auto px-2">

                    {/* Title */}
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-normal tracking-tight text-foreground leading-[1.15] text-balance">
                        Unlock Your Potential Through <br className="hidden md:block" />
                        <span className="text-accent">Competitive Coding</span>
                    </h1>

                    {/* Subtitle */}
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-foreground/70 max-w-2xl mx-auto text-balance leading-relaxed">
                        Challenge yourself in real-time coding battles, compete against developers from around the world, and turn every match into an opportunity to improve.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 w-full sm:w-auto">
                        {/* Get Started Button  */}
                        <Link to='/problems' className=' block w-full sm:w-auto'><Button className="w-full sm:w-auto rounded-full h-12 sm:h-14 px-8 bg-foreground text-background hover:bg-foreground/90 text-base font-medium transition-transform active:scale-95 cursor-pointer">
                            Get Started
                        </Button></Link>
                        {/* Learn More Button  */}
                        <Link to='/about' className=' block w-full sm:w-auto '><Button  variant="outline" className="w-full sm:w-auto rounded-full h-12 sm:h-14 px-8 bg-transparent border-foreground/30 text-foreground hover:bg-foreground/10 text-base font-medium transition-transform active:scale-95 cursor-pointer">
                            Learn More
                        </Button></Link>
                    </div>
                </div>


                {/* ----------------- Video Section ------------------- */}
                <div className='w-full mt-16 md:mt-18 px-2 sm:px-4'>
                    <div className="relative mx-auto w-full max-w-6xl rounded-2xl shadow-2xl">
                        {/* --- ADD THIS GLOW DIV --- */}
                        <div className="absolute -inset-1 sm:-inset-4 bg-accent/20 blur-2xl sm:blur-3xl -z-10 rounded-3xl opacity-20" />
                        {/* <div className="absolute top-1/2 -bottom-10 left-12 right-12 -z-10 rounded-full bg-accent/30 opacity-60 blur-3xl sm:blur-[80px]" /> */}
                        <HeroVideoDialog
                            className='border-none rounded-2xl w-full'
                            animationStyle='from-center'
                            videoSrc='/BracKeT_Motion_Promo.mp4'
                            thumbnailSrc='/HeroThumnailll.jpeg'
                        />
                        {/* BorderBeam hugs the exact dimensions of this relative wrapper */}
                        <BorderBeam
                            duration={4}
                            size={300}
                            reverse
                            className='from-transparent via-accent to-transparent rounded-xl'
                        />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;