import { useParams, Link, useLoaderData } from "react-router";
import { useState, use } from "react";
import { AuthContext } from "@/Provider/Authentication/AuthProvider";
import { AuroraText } from "@/components/ui/aurora-text";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CiSettings, CiTimer } from "react-icons/ci";
import { PiUserCircleThin } from "react-icons/pi";
import { FaShuffle, FaPlay } from "react-icons/fa6";
import { VscCloudUpload } from "react-icons/vsc";
import { TbBraces, TbReload } from "react-icons/tb";
import MainLogo from "@/assets/MainLogo.png";
import Avatar1 from "@/assets/TempProfile.jpeg";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import Editor from '@monaco-editor/react';

const ProblemDetails = () => {
    const { slug } = useParams();
    const { user } = use(AuthContext)!;
    const allProblem = useLoaderData() as any[];
    const currentProblem = allProblem.find((problem: any) => problem.slug === slug);
    const [language, setLanguage] = useState<string>(currentProblem?.allowedLanguages?.[0] || "javascript");

    const auraColor = ["#ffffff", "#eefed1", "#dffb15", "#4bc69d", "#38bdf8", "#0052d8", "#d8ecff", "#ffffff"];

    // Reusable dropdown content 
    const profileDropdown = (
        <>
            <DropdownMenuGroup>
                <Link to={'/profile'}><DropdownMenuItem className="cursor-pointer text-foreground/80 hover:text-foreground"><PiUserCircleThin className="mr-2 text-lg" /> Profile</DropdownMenuItem></Link>
                <Link to={'/setting'}><DropdownMenuItem className="cursor-pointer text-foreground/80 hover:text-foreground"><CiSettings className="mr-2 text-lg" /> Settings</DropdownMenuItem></Link>
            </DropdownMenuGroup>
            <DropdownMenuSeparator className="bg-foreground/10" />
        </>
    );

    return (
        <div className="h-screen flex flex-col bg-background">

            {/* ------------------ *** Workspace Navbar *** ------------------------ */}
            <header className="flex h-14 w-full items-center justify-between border-b border-foreground/10 bg-background px-4 shrink-0 z-10">
                <div className="flex flex-1 items-center justify-start">
                    <Link to="/" className="flex items-end justify-center transition-transform hover:scale-105 active:scale-95">
                        <img src={MainLogo} alt="Website Logo" className="w-8 h-8 object-contain" />
                        <p className="font-bold font-special text-lg ml-2 leading-none hidden sm:block">
                            <AuroraText colors={auraColor}>
                                <span className="text-xl">B</span>rackeT
                            </AuroraText>
                        </p>
                    </Link>
                </div>
                {/* -------------------*** MIDDLE:All the  Actions Btnns ***------------------ */}
                <div className="flex items-center justify-center gap-2 md:gap-3">
                    <button className="flex h-8 w-8 items-center cursor-pointer justify-center rounded bg-foreground/[0.03] text-foreground/60 hover:bg-foreground/10 hover:text-foreground transition-colors" title="Timer">
                        <CiTimer className="text-xl" />
                    </button>
                    <button className="flex h-8 w-8 items-center cursor-pointer justify-center rounded bg-foreground/[0.03] text-foreground/60 hover:bg-foreground/10 hover:text-foreground transition-colors" title="Pick Random Problem">
                        <FaShuffle className="text-sm" />
                    </button>
                    <button className="flex h-8 px-4 cursor-pointer items-center justify-center gap-2 rounded bg-foreground/10 text-foreground text-sm font-semibold hover:bg-foreground/20 transition-colors" title="Run Code">
                        <FaPlay className="text-xs" /> Run
                    </button>
                    <button className="flex h-8 px-4 cursor-pointer items-center justify-center gap-2 rounded bg-green-600 text-white text-sm font-bold hover:bg-green-500 transition-colors shadow-lg shadow-green-900/20" title="Submit Solution">
                        <VscCloudUpload className="text-lg" /> Submit
                    </button>
                </div>

                {/* ----------------------------*** RIGHT: Profile Avatar and Stuff ***------------------------------- */}
                <div className="flex flex-1 items-center justify-end">
                    {user ? (
                        <DropdownMenu>
                            <DropdownMenuTrigger className="focus:outline-none transition-transform hover:scale-105 active:scale-95">
                                <img src={user.photoURL || Avatar1} alt="User Avatar" className="h-8 w-8 rounded-full border border-foreground/20 object-cover" />
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="bg-background border-foreground/10 mt-2 min-w-[150px]">
                                {profileDropdown}
                            </DropdownMenuContent>
                        </DropdownMenu>
                    ) : (
                        <Link to="/login" className="rounded-sm bg-accent px-4 py-1.5 text-center text-sm font-bold text-background hover:opacity-90 transition-opacity">
                            Login
                        </Link>
                    )}
                </div>
            </header>

            {/* ------------------ *** Main Problem Area *** ------------------------ */}
            <main className="flex-1 overflow-hidden p-2">
                <ResizablePanelGroup orientation="horizontal" className="gap-1">
                    
                    {/* -------------------*** LEFT PANEL: PROBLEM DESCRIPTION ***--------------- --- */}
                    <ResizablePanel defaultSize={50}>
                        <div className="flex h-full w-full rounded-sm border border-foreground/5 bg-foreground/[0.04] flex-col overflow-y-auto no-scrollbar shadow-sm">
                            {currentProblem ? (
                                <div className="p-6 lg:p-8 max-w-3xl pb-10">
                                    <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4 tracking-tight">
                                        {currentProblem.title}
                                    </h1>
                                    <div className="flex flex-wrap items-center gap-2.5 mb-8">
                                        <span className="bg-foreground/10 border border-foreground/5 text-accent text-xs px-3 py-1 rounded-full font-bold font-mono">
                                            Rating: {currentProblem.rating}
                                        </span>
                                        {currentProblem.tags?.map((tag: string) => (
                                            <span key={tag} className="bg-foreground/3 border border-foreground/10 text-foreground/70 text-xs px-3 py-1 rounded-full font-medium capitalize">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="text-foreground/80 leading-loose text-[15px] mb-10 whitespace-pre-wrap">
                                        {currentProblem.statement?.description}
                                    </div>

                                    {currentProblem.examples?.length > 0 && (
                                        <div className="mb-10">
                                            <h2 className="text-lg font-bold text-foreground mb-5 tracking-wide">Examples</h2>
                                            <div className="flex flex-col gap-6">
                                                {currentProblem.examples.map((ex: any, idx: number) => (
                                                    <div key={idx} className="bg-foreground/2  border border-foreground/10 p-5 shadow-sm">
                                                        <p className="font-bold text-foreground/90 mb-4 text-sm">Example {idx + 1}:</p>
                                                        <div className="mb-4">
                                                            <span className="font-bold text-foreground/40 text-[10px] uppercase tracking-[0.15em]">Input</span>
                                                            <div className="bg-black/30 border border-foreground/5 p-3  mt-1.5 text-sm font-mono text-foreground/80 whitespace-pre-wrap">{ex.input}</div>
                                                        </div>
                                                        <div className="mb-4">
                                                            <span className="font-bold text-foreground/40 text-[10px] uppercase tracking-[0.15em]">Output</span>
                                                            <div className="bg-black/30 border border-foreground/5 p-3  mt-1.5 text-sm font-mono text-foreground/80 whitespace-pre-wrap">{ex.output}</div>
                                                        </div>
                                                        {ex.explanation && (
                                                            <div>
                                                                <span className="font-bold text-foreground/40 text-[10px] uppercase tracking-[0.15em]">Explanation</span>
                                                                <p className="text-foreground/70 text-sm mt-1.5 leading-relaxed">{ex.explanation}</p>
                                                            </div>
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <div className="flex h-full items-center justify-center text-foreground/50 font-mono text-sm">Loading problem data...</div>
                            )}
                        </div>
                    </ResizablePanel>

                    <ResizableHandle className="bg-transparent" />
                    
                    {/* -----------------*** RIGHT PANEL: EDITOR & TEST CASES ** --------------------------------- */}
                    <ResizablePanel defaultSize={50}>
                        <ResizablePanelGroup orientation="vertical" className="gap-1">
                            
                            {/*-------------------------*** Editor Section ***------------------------- */}
                            <ResizablePanel defaultSize={65}>
                                <div className="flex flex-col h-full w-full rounded-sm border border-foreground/5 bg-foreground/2 overflow-hidden shadow-sm">
                                    <div className="h-12 flex items-center justify-between px-3 bg-foreground/6 border-b border-foreground/10">
                                        <Select value={language} onValueChange={(value) => setLanguage(value ?? "javascript")} >
                                            <SelectTrigger className="h-8 w-35 bg-foreground/10 border-none text-xs font-semibold text-foreground focus:ring-0 focus:ring-offset-0">
                                                <SelectValue placeholder="Language" />
                                            </SelectTrigger>
                                            <SelectContent  className="bg-background border-foreground/10 text-foreground ">
                                                {currentProblem?.allowedLanguages?.map((lang: string) => (
                                                    <SelectItem key={lang} value={lang} className="text-xs capitalize cursor-pointer focus:bg-foreground/10 focus:text-white ">
                                                        {lang}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>

                                        <div className="flex items-center gap-4 text-foreground/50 pr-2">
                                            <button className="hover:text-foreground transition-colors" title="Format Code">
                                                <TbBraces size={17} />
                                            </button>
                                            <button className="hover:text-foreground transition-colors" title="Reset to Default Code">
                                                <TbReload size={17} />
                                            </button>
                                        </div>
                                    </div>
                                    
                                    <div className="flex-1 w-full  bg-transparent">
                                        <Editor  
                                            theme="vs-dark"
                                            language={language === "cpp" ? "cpp" : language}
                                            value={currentProblem?.starterCode?.[language] || "// Write your code here"}
                                            options={{
                                                minimap: { enabled: false },
                                                fontSize: 14,
                                                padding: { top: 8 },
                                                scrollBeyondLastLine: false,
                                                smoothScrolling: true,
                                                cursorBlinking: "smooth",
                                            }}
                                        />
                                    </div>
                                </div>
                            </ResizablePanel>
                            
                            <ResizableHandle className="bg-transparent" />
                            
                            
                            {/*----------------------*** Test Cases Section ***---------------------------- */}
                            <ResizablePanel defaultSize={35}>
                                <div className="flex flex-col h-full w-full rounded-sm border border-foreground/5 bg-foreground/4 overflow-hidden shadow-sm">
                                    <div className="h-10 flex items-center px-4 bg-foreground/6 border-b border-foreground/10">
                                        <span className="text-xs font-bold uppercase tracking-wider text-foreground/60">Test Cases</span>
                                    </div>
                                    <div className="flex-1 flex items-center justify-center text-foreground/40 font-mono text-sm">
                                        Test cases console goes here
                                    </div>
                                </div>
                            </ResizablePanel>
                        </ResizablePanelGroup>
                    </ResizablePanel>

                </ResizablePanelGroup>
            </main>

        </div>
    );
};

export default ProblemDetails;