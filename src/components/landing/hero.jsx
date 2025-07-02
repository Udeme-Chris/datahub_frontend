import { Button } from "@/components/ui/button";
import { Play, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative text-white py-24"
      style={{
        background: "linear-gradient(135deg, #14b8a6 0%, #2563eb 60%, #06b6d4 100%)",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2">
                <span className="text-sm font-medium">🧬 Advanced Health Data Platform</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Unify Your Health Data,
                <span className="text-accent-cyan"> Accelerate Discovery</span>
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed">
                Integrate genomics (FASTQ, BAM, VCF), clinical (CSV, JSON), and imaging (DICOM) data in one powerful platform designed for malaria, cancer, and comprehensive health research
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/dashboard">
                <Button
                  className="bg-white text-primary-teal px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all transform hover:scale-105"
                  size="lg"
                >
                  Start Now
                  <ArrowRight className="ml-2" size={16} />
                </Button>
              </Link>
              <Link to="/projects">
              
              <Button
                variant="outline"
                className=" bg-none-700 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-teal transition-all"
                size="lg"
              >
                View Projects
                <ArrowRight className="ml-2" size={16} />
              </Button>
              </Link>
            </div>
            <div className="flex items-center space-x-8 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>HIPAA Compliant</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>99.9% Uptime</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>SOC 2 Certified</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-6 border border-white border-opacity-20 shadow-2xl">
              <div className="space-y-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <div className="bg-gradient-to-br from-primary-teal to-accent-cyan rounded-lg p-6 text-white">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="bg-white bg-opacity-20 rounded-lg p-3">
                      <div className="text-sm opacity-80">Data Sources</div>
                      <div className="text-2xl font-bold">--</div>
                    </div>
                    <div className="bg-white bg-opacity-20 rounded-lg p-3">
                      <div className="text-sm opacity-80">Visualizations</div>
                      <div className="text-2xl font-bold">--</div>
                    </div>
                  </div>
                  <div className="w-full bg-white bg-opacity-20 rounded-full h-2">
                    <div
                      className="bg-white rounded-full h-2"
                      style={{ width: "92%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent-cyan rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-success-green rounded-full opacity-20 animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
