import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Search, Database, Users, FileText, Activity, Heart, Dna, Microscope, TestTube, Globe, Twitter, Linkedin } from "lucide-react";




export default function SearchSection() {
    const [searchType, setSearchType] = useState("Query");
    const [selectedDataType, setSelectedDataType] = useState("Data type");
    
    return (
        <div className="bg-gray-50 px-6 py-4 border-b">
            <div className="flex items-center space-x-4 mb-4">
                <div className="flex space-x-2">
                    <Button 
                        variant={searchType === "Query" ? "default" : "outline"}
                        onClick={() => setSearchType("Query")}
                        className="bg-teal-600 hover:bg-teal-700"
                    >
                        Query
                    </Button>
                    <Button 
                        variant={searchType === "Quick Search" ? "default" : "outline"}
                        onClick={() => setSearchType("Quick Search")}
                    >
                        Quick Search
                    </Button>
                </div>
                <div className="flex-1 flex items-center space-x-4">
                    <select 
                        value={selectedDataType}
                        onChange={(e) => setSelectedDataType(e.target.value)}
                        className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                    >
                        <option>Data type</option>
                        <option>Genomic</option>
                        <option>Clinical</option>
                        <option>Proteomics</option>
                    </select>
                    <div className="flex-1 relative">
                        <Input 
                            placeholder="Search..." 
                            className="pr-10"
                        />
                        <Search className="absolute right-3 top-2.5 w-5 h-5 text-gray-400" />
                    </div>
                </div>
                {/* <div className="text-sm text-gray-600">
                    Please cite <span className="text-teal-600 font-medium">FEDGEN Portal</span>
                </div> */}
            </div>
        </div>
    );
}
