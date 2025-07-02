import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Search, Database, Users, FileText, Activity, Heart, Dna, Microscope, TestTube, Globe, Twitter, Linkedin } from "lucide-react";




export default function WhatsNewSidebar() {
    const updates = [
        {
            title: "Added data",
            description: "consisting of 4,571 samples from 10 studies:",
            items: [
                "Pancreatic Adenocarcinoma (MSK, Nat Med 2024): 2336 samples",
                "Cerebrospinal Fluid Circulating Tumor DNA (MSK, Acta Neuropathol Commun 2024): 1007 samples",
                "Ovarian Cancer (Gray Foundation, Cancer Discov 2024): 567 samples"
            ]
        }
    ];

    return (
        <div className="w-80 bg-white border-l border-gray-200 p-6">
            <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-gray-900">What's New</h3>
                    <Twitter className="w-5 h-5 text-blue-400" />
                </div>
                <p className="text-sm text-gray-600 mb-4">June 26, 2025</p>
                
                {updates.map((update, index) => (
                    <div key={index} className="mb-6">
                        <p className="font-medium text-gray-900 mb-2">
                            <span className="text-teal-600">Added data</span> {update.description}
                        </p>
                        <ul className="space-y-2">
                            {update.items.map((item, itemIndex) => (
                                <li key={itemIndex} className="text-sm text-blue-600 hover:text-blue-800 cursor-pointer">
                                    • {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            <div className="border-t pt-6">
                <h4 className="font-semibold text-gray-900 mb-4">Example Queries</h4>
                <ul className="space-y-2">
                    <li className="text-sm text-blue-600 hover:text-blue-800 cursor-pointer">
                        • Primary vs. metastatic prostate cancer
                    </li>
                    <li className="text-sm text-blue-600 hover:text-blue-800 cursor-pointer">
                        • RAS/RAF alterations in colorectal cancer
                    </li>
                    <li className="text-sm text-blue-600 hover:text-blue-800 cursor-pointer">
                        • BRCA1 and BRCA2 mutations in ovarian cancer
                    </li>
                </ul>
            </div>

            <div className="border-t pt-6 mt-6">
                <p className="text-sm text-gray-600 mb-4">
                    Read the latest FEDGEN Portal Newsletter! Subscribe via:
                </p>
                <div className="flex space-x-4">
                    <Linkedin className="w-5 h-5 text-blue-600 cursor-pointer" />
                    <Globe className="w-5 h-5 text-gray-600 cursor-pointer" />
                </div>
            </div>
        </div>
    );
}