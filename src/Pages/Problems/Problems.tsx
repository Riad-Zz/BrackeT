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

const Problems = () => {
    const [search, setSearch] = useState("");
    
    return (
        <div className="max-w-11/12 xl:max-w-7xl mx-auto my-10">
            <ProblemBanner />

            <Tabs defaultValue="alltopic" className="mt-8">
                <TabsList>
                    <TabsTrigger value="alltopic"><LuArchive /> All Topic</TabsTrigger>
                    <TabsTrigger value="datastructure"><FaCubesStacked /> Data Structure</TabsTrigger>
                    <TabsTrigger value="algo"><GiPathDistance /> Algorithm</TabsTrigger>
                    <TabsTrigger value="dbms"><FiDatabase /> Database</TabsTrigger>
                    <TabsTrigger value="shell"><VscTerminalPowershell /> Shell</TabsTrigger>
                </TabsList>

                {/* Search and filtering options */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 my-8">
                    
                    {/* Search bar */}
                    <div className="relative w-full max-w-md">
                        <CiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-xl font-bold" />
                        <Input 
                            type="text"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search problems..."
                            className="w-full pl-10 pr-4 h-11 bg-white/3 border-white/10 text-white placeholder:text-gray-500 rounded-lg focus-visible:ring-1 focus-visible:ring-primary focus-visible:border-primary transition-all"
                        />
                    </div>
                    
                    {/* Filter options */}
                    <div className="flex items-center gap-3 w-full md:w-auto">
                        <Button variant="outline" className="flex-1 md:flex-none h-10 bg-white/3 border-none text-gray-300 hover:bg-white/8 transition-colors">
                            <CiFilter />  Filter
                        </Button>
                        <Button variant="outline" className="flex-1 md:flex-none h-10 bg-white/3 border-none text-gray-300 hover:bg-white/8  transition-colors">
                            <TbArrowsSort/>  Sort by
                        </Button>
                    </div>

                </div>

                {/* Tab Contents */}
                <TabsContent value="alltopic" className="mt-6">
                    <p className="text-gray-400">This is all topic</p>
                </TabsContent>
                <TabsContent value="datastructure" className="mt-6">
                    <p className="text-gray-400">Data Structure problems go here.</p>
                </TabsContent>
                <TabsContent value="algo" className="mt-6">
                    <p className="text-gray-400">Algorithm problems go here.</p>
                </TabsContent>
                <TabsContent value="dbms" className="mt-6">
                    <p className="text-gray-400">Database problems go here.</p>
                </TabsContent>
                <TabsContent value="shell" className="mt-6">
                    <p className="text-gray-400">Shell scripting problems go here.</p>
                </TabsContent>
            </Tabs>

        </div>
    );
};

export default Problems;