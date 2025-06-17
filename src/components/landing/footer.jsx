import { Dna, Mail, Phone, MapPin, Github, Twitter, Linkedin, ExternalLink } from "lucide-react";
import { Link } from "wouter";
import logo from "@/assets/fedgen_logo.png"

export default function Footer() {
  return (
    <footer id="contact" className="bg-neutral-dark text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-teal to-primary-blue rounded-lg flex items-center justify-center">
                {/* <Dna className="text-white text-lg" size={24} /> */}
                    <img src={logo} alt="Fedgen healthEduApp logo" className="w-18 h-12" />
                
              </div>
              <div>
                <h3 className="text-2xl font-bold">FEDGEN</h3>
                <p className="text-sm text-gray-400 -mt-1">HealthEduApp DataHub</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-8 text-lg">
              Empowering healthcare research through advanced data integration, AI-powered analytics, and collaborative visualization tools for genomic medicine.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-primary-teal rounded-lg flex items-center justify-center">
                  <Mail size={16} className="text-white" />
                </div>
                <span className="text-gray-300">contact@fedgen-datahub.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-primary-blue rounded-lg flex items-center justify-center">
                  <Phone size={16} className="text-white" />
                </div>
                <span className="text-gray-300">+234 814 030 8890</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-accent-cyan rounded-lg flex items-center justify-center">
                  <MapPin size={16} className="text-white" />
                </div>
                <span className="text-gray-300">Covenant University, Ota, Nigeria.</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6">Platform</h4>
            <ul className="space-y-3 text-gray-300">
              <li><Link href="/dashboard" className="hover:text-primary-teal transition-colors flex items-center">Data Integration <ExternalLink size={14} className="ml-1" /></Link></li>
              <li><a href="#features" className="hover:text-primary-teal transition-colors">Visualizations</a></li>
              <li><a href="#benefits" className="hover:text-primary-teal transition-colors">Collaboration</a></li>
              <li><a href="#features" className="hover:text-primary-teal transition-colors">Security & Compliance</a></li>
              <li><a href="#features" className="hover:text-primary-teal transition-colors">AI Analytics</a></li>
              <li><a href="#" className="hover:text-primary-teal transition-colors">API Documentation</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6">Resources</h4>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#" className="hover:text-primary-teal transition-colors">Getting Started</a></li>
              <li><a href="#" className="hover:text-primary-teal transition-colors">User Guide</a></li>
              <li><a href="#" className="hover:text-primary-teal transition-colors">Video Tutorials</a></li>
              <li><a href="#" className="hover:text-primary-teal transition-colors">Best Practices</a></li>
              <li><a href="#" className="hover:text-primary-teal transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-primary-teal transition-colors">Help Center</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-700">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
              <p className="text-gray-400">© 2025 FEDGEN HealthEduApp DataHub. All rights reserved.</p>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-primary-teal text-sm transition-colors">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-primary-teal text-sm transition-colors">Terms of Service</a>
                <a href="#" className="text-gray-400 hover:text-primary-teal text-sm transition-colors">Cookie Policy</a>
                <a href="#" className="text-gray-400 hover:text-primary-teal text-sm transition-colors">HIPAA Compliance</a>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm">Follow us:</span>
              <div className="flex space-x-3">
                <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-primary-teal rounded-lg flex items-center justify-center transition-colors">
                  <Twitter size={18} className="text-white" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-primary-blue rounded-lg flex items-center justify-center transition-colors">
                  <Linkedin size={18} className="text-white" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-neutral-dark rounded-lg flex items-center justify-center transition-colors">
                  <Github size={18} className="text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
