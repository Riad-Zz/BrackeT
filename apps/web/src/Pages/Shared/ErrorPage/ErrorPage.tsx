import { NavLink } from "react-router"; 
import { Button } from "@/components/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import { HomeIcon } from "lucide-react";
import errorCat from '@/assets/404Cat.png'

const ErrorPage = () => {
  return (
    <div className="flex min-h-screen w-full items-center justify-center p-6 bg-background">
      <Empty className="flex flex-col items-center justify-center text-center max-w-2xl">
        <EmptyHeader className="space-y-4">
          {/* 404 with a modern gradient */}
          <EmptyMedia className="relative top-13 md:top-18">
            <img src={errorCat} alt="" className="w-auto h-auto "/>
          </EmptyMedia>
          <EmptyTitle className="text-[10rem] sm:text-[14rem] md:text-[20rem] font-black leading-none tracking-tighter bg-gradient-to-b from-foreground/70 via-foreground/30 to-transparent bg-clip-text text-transparent select-none">
            404
          </EmptyTitle>

          {/* Subtitle / Description */}
          <EmptyDescription className="text-xl sm:text-2xl font-medium max-w-2xl mx-auto flex justify-center">
            The page you&apos;re looking for might have been moved or doesn&apos;t exist.
          </EmptyDescription>
        </EmptyHeader>

        <EmptyContent className="pt-2">
          {/* Large HOme Button */}
          <Button  size="lg" className="h-12 px-8 text-base font-semibold shadow-md">
            <NavLink to="/" className="inline-flex items-center gap-2.5">
              <HomeIcon className="size-5" />
              <span>Back to Home</span>
            </NavLink>
          </Button>
        </EmptyContent>
      </Empty>
    </div>
  );
};

export default ErrorPage;