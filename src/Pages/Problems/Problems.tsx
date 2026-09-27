import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProblemBanner from "./ProblemBanner";
import { VscTerminalPowershell } from "react-icons/vsc";
import { LuArchive } from "react-icons/lu";
import { FaCubesStacked } from "react-icons/fa6";
import { GiPathDistance } from "react-icons/gi";
import { FiDatabase } from "react-icons/fi";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { CiFilter, CiSearch } from "react-icons/ci";
import { Button } from "@/components/ui/button";
import { TbArrowsSort } from "react-icons/tb";
import ProblemList from "./ProblemList";
import { useLoaderData } from "react-router";


const Problems = () => {
    const [search, setSearch] = useState("");
    const [topicFilter, setTopicFilter] = useState("alltopic") ;
    // console.log(topicFilter) ;
    const [filteredProblems  , setFilteredProblems] = useState(useLoaderData()) ;
    // console.log(filteredProblems) ;
    // const filteredProblems = useLoaderData() ;
    
    return (
        <div className="max-w-11/12 xl:max-w-7xl mx-auto my-10">
            {/* ------------------*** Top Banner ***------------------------ */}
            <ProblemBanner />

            {/* -----------------------------*** Topic Tabs ***---------------------------------------- */}
            <Tabs defaultValue="alltopic" className="mt-8" value={topicFilter} onValueChange={(topic) => setTopicFilter(topic)} > 
                <TabsList>
                    <TabsTrigger value="alltopic"><LuArchive /> All Topic</TabsTrigger>
                    <TabsTrigger value="datastructure"><FaCubesStacked /> Data Structure</TabsTrigger>
                    <TabsTrigger value="algo"><GiPathDistance /> Algorithm</TabsTrigger>
                    <TabsTrigger value="dbms"><FiDatabase /> Database</TabsTrigger>
                    <TabsTrigger value="shell"><VscTerminalPowershell /> Shell</TabsTrigger>
                </TabsList>
            </Tabs>

                {/*----------------------------*** Search and filtering options ***-------------------------- */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 my-8">
                    
                    {/* --------------------------*** Search bar ***------------------------------------ */}
                    <div className="relative w-full max-w-md">
                        <CiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-foreground/50 text-xl font-bold" />
                        <Input 
                            type="text"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search problems..."
                            className="w-full pl-10 pr-4 h-11 bg-foreground/3 border-foreground/10 text-foreground placeholder:text-foreground/50 rounded-lg focus-visible:ring-1 focus-visible:ring-accent/0 focus-visible:border-accent/0 transition-all"
                        />
                    </div>
                    
                    {/* -------------------------*** Filter options *** ---------------------------------- */}
                    <div className="flex items-center gap-3 w-full md:w-auto">
                        <Button variant="outline" className="flex-1 md:flex-none h-10 bg-foreground/3 border-none text-foreground/80 hover:bg-foreground/8 transition-colors">
                            <CiFilter />  Filter
                        </Button>
                        <Button variant="outline" className="flex-1 md:flex-none h-10 bg-foreground/3 border-none text-foreground/80 hover:bg-foreground/8 transition-colors">
                            <TbArrowsSort/>  Sort by
                        </Button>
                    </div>

                </div>

                {/*-------------------*** Tab Contents / Problem List ***----------------------------*/}
                <ProblemList filteredProblems  = {filteredProblems} />
            

        </div>
    );
};

export default Problems;