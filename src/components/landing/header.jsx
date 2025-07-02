import { Dna } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import logo from "@/assets/fedgen_logo.png"

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
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
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-neutral-dark hover:text-primary-teal font-medium">Home</a>
            <a href="#features" className="text-gray-600 hover:text-primary-teal font-medium">Features</a>
            <a href="#benefits" className="text-gray-600 hover:text-primary-teal font-medium">Benefits</a>
            <a href="#testimonials" className="text-gray-600 hover:text-primary-teal font-medium">Testimonials</a>
            <a href="#contact" className="text-gray-600 hover:text-primary-teal font-medium">Contact</a>
          </nav>
          <div className="flex items-center space-x-4">

            <Link href="/signin">
              <Button className="bg-primary-teal text-white hover:bg-opacity-90 font-medium">
                Sign In
              </Button>
            </Link>
            <Link href="/signup">
              <Button variant="outline" className="border-primary-teal text-primary-teal hover:bg-primary-teal hover:text-white font-medium">
                Sign Up
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
