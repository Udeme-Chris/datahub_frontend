import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Search, Database, Users, FileText, Activity, Heart, Dna, Microscope, TestTube, Globe, Twitter, Linkedin } from "lucide-react";





export default function StudyItem({ title, samples, isChecked, onToggle, studyType = "genomic" }) {
    const getStudyIcon = () => {
        switch (studyType) {
            case 'genomic': return <Dna className="w-4 h-4 text-blue-500" />;
            case 'clinical': return <FileText className="w-4 h-4 text-green-500" />;
            case 'proteomics': return <TestTube className="w-4 h-4 text-purple-500" />;
            default: return <Database className="w-4 h-4 text-gray-500" />;
        }
    };

    return (
        <div className="flex items-center justify-between p-3 border-b border-gray-100 hover:bg-gray-50">
            <div className="flex items-center space-x-3">
                <input 
                    type="checkbox" 
                    checked={isChecked}
                    onChange={onToggle}
                    className="w-4 h-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500"
                />
                <div className="flex items-center space-x-2">
                    {getStudyIcon()}
                    <span className="font-medium text-gray-900">{title}</span>
                </div>
            </div>
            <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">{samples} samples</span>
                <div className="flex space-x-1">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                </div>
            </div>
        </div>
    );
}
