import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Search, Database, Users, FileText, Activity, Heart, Dna, Microscope, TestTube, Globe, Twitter, Linkedin } from "lucide-react";
import logo from "@/assets/fedgen_logo.png";




export default function ProjectHeader() {
    return (
        <div className="bg-white border-b border-gray-200 px-6 py-4">
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-6">

                    <Link to="/">
                        <div className="flex items-center space-x-3">


                            <div className="w-10 h-10 bg-gradient-to-br from-primary-teal to-primary-blue rounded-lg flex items-center justify-center">
                                <img src={logo} alt="Fedgen healthEduApp logo" className="w-12 h-12" />
                                {/* <Dna className="text-red-800 text-lg" size={20} /> */}
                            </div>
                            <div>
                                <h1 className="text-xl font-bold text-neutral-dark">FEDGEN DATAHUB</h1>
                                <p className="text-sm text-gray-800 -mt-1">HealthEduApp DataHub</p>
                            </div>

                        </div>
                    </Link>
                    {/* <nav className="hidden md:flex space-x-6">
                        <a href="#" className="text-gray-600 hover:text-teal-600">Data Sets</a>
                        <a href="#" className="text-gray-600 hover:text-teal-600">Web API</a>
                        <a href="#" className="text-gray-600 hover:text-teal-600">Tutorials</a>
                        <a href="#" className="text-gray-600 hover:text-teal-600">FAQ</a>
                        <a href="#" className="text-gray-600 hover:text-teal-600">News</a>
                        <a href="#" className="text-gray-600 hover:text-teal-600">Visualize Data</a>
                        <a href="#" className="text-gray-600 hover:text-teal-600">About</a>
                    </nav> */}
                </div>
                <div className="flex items-center space-x-4">
                    <Button variant="outline" className="text-red-600 border-red-600 hover:bg-red-50">
                        <Heart className="w-4 h-4 mr-2" />
                        Donate
                    </Button>
                    <Link to="/signin">
                                        <Button className="bg-teal-600 hover:bg-teal-700">Login</Button>

                    </Link>
                </div>
            </div>
        </div>
    );
}
