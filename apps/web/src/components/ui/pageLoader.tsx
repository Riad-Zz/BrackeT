import { cn } from "@/lib/utils";
import logo from "@/assets/MainLogo.png"
const pageLoader = () => {
    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div className={cn("flex flex-col items-center gap-4 p-4 rounded-lg")}>
                <div className="relative flex justify-center items-center">
                    <div className="absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-accent"></div>
                    <img src={logo} className="rounded-full h-28 w-28" />
                </div>
            </div>
        </div>
    );
};

export default pageLoader;

