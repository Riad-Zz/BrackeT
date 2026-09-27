import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const ProblemList = ({ filteredProblems }: any) => {
    return (
        
        <div className="rounded-sm border border-foreground/10 bg-background overflow-hidden shadow-2xl mt-6">
            <Table>
                
                {/*----------------------------*** Table Header ***------------------------------------------ */}
                <TableHeader className="bg-foreground/2 border-b border-foreground/10">
                    <TableRow className="hover:bg-transparent border-none">
                        <TableHead className="w-8/12 py-4 pl-6 text-xs font-semibold uppercase tracking-wider text-foreground/60">
                            Problem
                        </TableHead>
                        <TableHead className="py-4 text-xs font-semibold uppercase tracking-wider text-foreground/60 text-center">
                            Rating
                        </TableHead>
                        <TableHead className="py-4 pr-6 text-xs font-semibold uppercase tracking-wider text-foreground/60 text-right">
                            Acceptance
                        </TableHead>
                    </TableRow>
                </TableHeader>
                
                <TableBody>
                    {filteredProblems?.length > 0 ? 
                    // -------------------------*** Problem list if not empty *** -------------------------------------
                    (
                        filteredProblems.map((prob: any) => (
                            <TableRow 
                                key={prob.id}
                                className="border-b border-foreground/5 hover:bg-foreground/4 transition-colors group cursor-pointer"
                            >
                                {/* Title */}
                                <TableCell className="py-4 pl-6 font-semibold text-foreground/80 group-hover:text-accent transition-colors">
                                    {prob.title}
                                </TableCell>
                                
                                {/* Rating */}
                                <TableCell className="py-4 text-center font-mono text-sm font-bold text-accent ">
                                    {prob.rating}
                                </TableCell>
                                
                                {/* Acceptance Rate */}
                                <TableCell className="py-4 pr-6 text-right font-mono text-sm text-foreground/60">
                                    {prob.stats?.acceptanceRate}%
                                </TableCell>
                            </TableRow>
                        ))
                    ) 
                    : 
                     //------------------------*** Empty State ***---------------------------
                    (
                        
                        <TableRow className="hover:bg-transparent">
                            <TableCell colSpan={3} className="py-16 text-center">
                                <p className="font-mono text-sm text-foreground/50">No problems found matching your criteria.</p>
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>

            </Table>
        </div>
    );
};

export default ProblemList;