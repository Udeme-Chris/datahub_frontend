import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Search, Database, Users, FileText, Activity, Heart, Dna, Microscope, TestTube, Globe, Twitter, Linkedin } from "lucide-react";
import ProjectHeader from "@/components/project/project-header";
import SearchSection from "@/components/project/search-section";
import StudyItem from "@/components/project/study-item";
import StudyCategory from "@/components/project/study-category";
import WhatsNewSidebar from "../components/project/whats-new-sidebar";


export default function Project() {
    const [selectedStudies, setSelectedStudies] = useState(new Set());
    const [selectedCategory, setSelectedCategory] = useState("PanCancer Studies");

    const studyCategories = [
        { title: "PanCancer Studies", count: 11, icon: Globe },
        { title: "Pediatric Cancer Studies", count: 15, icon: Heart },
        { title: "Immunogenomic Studies", count: 8, icon: Activity },
        { title: "Cell lines", count: 3, icon: Microscope },
        { title: "PreCancerous/Healthy Studies", count: 5, icon: TestTube },
        { title: "Adrenal Gland", count: 3, icon: Dna },
        { title: "Ampulla of Vater", count: 1, icon: FileText },
        { title: "Biliary Tract", count: 16, icon: Database },
        { title: "Bladder/Urinary Tract", count: 24, icon: Users }
    ];

    const studyData = [
        { title: "MSK-CHORD (MSK, Nature 2024)", samples: 25040, type: "genomic" },
        { title: "MSK-IMPACT Clinical Sequencing Cohort (MSK, Nat Med 2017)", samples: 10945, type: "clinical" },
        { title: "Metastatic Solid Cancers (UMich, Nature 2017)", samples: 500, type: "genomic" },
        { title: "MSS Mixed Solid Tumors (Broad/Dana-Farber, Nat Genet 2018)", samples: 249, type: "proteomics" },
        { title: "SUMMIT - Neratinib Basket Study (Multi-Institute, Nature 2018)", samples: 141, type: "clinical" },
        { title: "SUMMIT - Neratinib Basket Study (Multi-Institute, Nature 2018)", samples: 141, type: "clinical" },
        { title: "SUMMIT - Neratinib Basket Study (Multi-Institute, Nature 2018)", samples: 141, type: "clinical" },
        { title: "TMB and Immunotherapy (MSK, Nat Genet 2019)", samples: 1661, type: "genomic" },
        { title: "Tumors with TRK fusions (MSK, Clin Cancer Res 2020)", samples: 106, type: "genomic" },
        { title: "Cancer Cell Line Encyclopedia Hematopoiesis (MSK, Nat Genet 2020)", samples: 24146, type: "clinical" },
        { title: "Cancer Cell Line Encyclopedia Hematopoiesis (MSK, Nat Genet 2020)", samples: 24146, type: "clinical" },
        { title: "Cancer Cell Line Encyclopedia Hematopoiesis (MSK, Nat Genet 2020)", samples: 24146, type: "clinical" },
    ];

    const toggleStudy = (index) => {
        const newSelected = new Set(selectedStudies);
        if (newSelected.has(index)) {
            newSelected.delete(index);
        } else {
            newSelected.add(index);
        }
        setSelectedStudies(newSelected);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <ProjectHeader />
            <SearchSection />
            
            <div className="flex">
                {/* Main Content */}
                <div className="flex-1 p-6">
                    <div className="bg-white rounded-lg shadow-sm">
                        {/* Header Section */}
                        <div className="p-6 border-b border-gray-200">
                            <h2 className="text-xl font-bold text-gray-900 mb-2">
                                Select Studies for Visualization & Analysis: 
                                <span className="text-teal-600"> 493 studies available (321138 samples)</span>
                            </h2>
                            <div className="flex items-center space-x-4 mt-4">
                                <span className="text-sm font-medium text-gray-700">Quick select:</span>
                                <Button variant="outline" size="sm">TCGA PanCancer Atlas Studies</Button>
                                <Button variant="outline" size="sm">Curated set of non-redundant studies</Button>
                                <a href="#" className="text-sm text-blue-600 hover:text-blue-800">Help</a>
                            </div>
                            <p className="text-sm text-gray-600 mt-2">
                                Looking for <span className="font-medium">AACR Project GENIE</span>, the largest public clinicogenomic cancer dataset? 
                                <a href="#" className="text-blue-600 hover:text-blue-800 ml-1">It's available here</a>
                            </p>
                        </div>

                        <div className="flex">
                            {/* Categories Sidebar */}
                            <div className="w-68 border-r border-gray-200 p-4">
                                <h3 className="font-semibold text-gray-900 mb-4">Study Categories</h3>
                                <div className="space-y-2 overflow-y-auto h-96">
                                    {studyCategories.map((category, index) => (
                                        <StudyCategory
                                            key={index}
                                            title={category.title}
                                            count={category.count}
                                            icon={category.icon}
                                            isSelected={selectedCategory === category.title}
                                            onClick={() => setSelectedCategory(category.title)}
                                        />
                                    ))}
                                </div>
                            </div>

                           { /* Studies List */}
                            <div className="flex-1 p-4">
                                <div className="mb-4">
                                    <h3 className="font-semibold text-gray-900 mb-2">PanCancer Studies</h3>
                                </div>
                                
                                <div className="space-y-1  overflow-y-auto h-96">
                                    {studyData.map((study, index) => (
                                        <StudyItem
                                            key={index}
                                            title={study.title}
                                            samples={study.samples}
                                            studyType={study.type}
                                            isChecked={selectedStudies.has(index)}
                                            onToggle={() => toggleStudy(index)}
                                        />
                                    ))}
                                </div>

                                {/* Action Buttons */}
                                <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-200">
                                    <p className="text-sm text-gray-600">
                                        {selectedStudies.size > 0 
                                            ? `${selectedStudies.size} studies selected`
                                            : "493 studies available (321138 samples)"
                                        }
                                    </p>
                                    <div className="flex space-x-4">
                                        <Button 
                                            className="bg-teal-600 hover:bg-teal-700"
                                            disabled={selectedStudies.size === 0}
                                        >
                                            <Search className="w-4 h-4 mr-2" />
                                            Query By Gene
                                        </Button>
                                        <Button 
                                            variant="outline"
                                            disabled={selectedStudies.size === 0}
                                        >
                                            <Activity className="w-4 h-4 mr-2" />
                                            Explore Selected Studies
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* What's New Sidebar */}
                <WhatsNewSidebar />
            </div>
        </div>
    );
}