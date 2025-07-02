import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Search, Database, Users, FileText, Activity, Heart, Dna, Microscope, TestTube, Globe, Twitter, Linkedin } from "lucide-react";




export default function StudyCategory({ title, count, icon, isSelected = false, onClick }) {
    const IconComponent = icon;
    
    return (
        <div 
            className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition-all ${
                isSelected ? 'bg-teal-50 border-l-4 border-teal-500' : 'hover:bg-gray-50'
            }`}
            onClick={onClick}
        >
            <div className="flex items-center space-x-3">
                <IconComponent className={`w-5 h-5 ${isSelected ? 'text-teal-600' : 'text-gray-500'}`} />
                <span className={`font-medium ${isSelected ? 'text-teal-900' : 'text-gray-700'}`}>
                    {title}
                </span>
            </div>
            <span className={`text-sm px-2 py-1 rounded-full ${
                isSelected ? 'bg-teal-100 text-teal-700' : 'bg-gray-100 text-gray-600'
            }`}>
                {count}
            </span>
        </div>
    );
}

