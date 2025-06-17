import { Database, TrendingUp, Users, Shield, Lock, Brain, Activity, FileText, Zap, Globe, Clock, BarChart3 } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: Database,
      title: "Multi-Format Data Integration",
      description: "Connect genomics (FASTQ, BAM, VCF), clinical (CSV, JSON), imaging (DICOM), and IoT device data seamlessly with automated format detection",
      gradient: "from-teal-500 to-green-500",
      stats: "50+ data formats"
    },
    {
      icon: TrendingUp,
      title: "Real-time Visualization",
      description: "Create interactive dashboards with bar charts, line graphs, heatmaps, and scatter plots. Share insights instantly with live collaboration",
      gradient: "from-blue-500 to-cyan-500",
      stats: "15+ chart types"
    },
    {
      icon: Users,
      title: "Collaborative Research",
      description: "Organize multi-institutional projects with role-based access control. Share data safely across research teams worldwide",
      gradient: "from-cyan-500 to-green-500",
      stats: "Team management"
    },
    {
      icon: Shield,
      title: "Data Quality Monitoring",
      description: "Automated quality checks, data validation protocols, and integrity monitoring with detailed quality score reporting",
      gradient: "from-orange-500 to-blue-500",
      stats: "99.8% accuracy"
    },
    {
      icon: Lock,
      title: "HIPAA-Compliant Security",
      description: "Enterprise-grade security with end-to-end encryption, audit trails, and compliance with healthcare data regulations",
      gradient: "from-teal-500 to-blue-500",
      stats: "SOC 2 certified"
    },
    {
      icon: Brain,
      title: "AI-Powered Analytics",
      description: "Machine learning algorithms for pattern recognition, biomarker discovery, and predictive modeling in genomic data",
      gradient: "from-green-500 to-cyan-500",
      stats: "ML algorithms"
    },
    {
      icon: Activity,
      title: "Real-time Processing",
      description: "Stream processing capabilities for live data feeds from sequencers and clinical systems with sub-second latency",
      gradient: "from-blue-500 to-orange-500",
      stats: "<100ms latency"
    },
    {
      icon: FileText,
      title: "Automated Reporting",
      description: "Generate comprehensive reports with statistical analysis, publication-ready charts, and exportable formats",
      gradient: "from-cyan-500 to-teal-500",
      stats: "Auto-generated"
    },
    {
      icon: Zap,
      title: "High-Performance Computing",
      description: "Scalable cloud infrastructure optimized for large genomic datasets with distributed processing capabilities",
      gradient: "from-green-500 to-blue-500",
      stats: "Petabyte scale"
    },
    {
      icon: Globe,
      title: "Global Data Exchange",
      description: "Secure data sharing protocols compatible with international research databases and biobanks",
      gradient: "from-orange-500 to-cyan-500",
      stats: "Global standards"
    },
    {
      icon: Clock,
      title: "Version Control",
      description: "Track data lineage, maintain version history, and ensure reproducible research with comprehensive audit trails",
      gradient: "from-teal-500 to-orange-500",
      stats: "Full history"
    },
    {
      icon: BarChart3,
      title: "Custom Dashboards",
      description: "Build personalized dashboards with drag-and-drop interface, custom widgets, and real-time data updates",
      gradient: "from-blue-500 to-green-500",
      stats: "Unlimited views"
    }
  ];

  return (
    <section id="features" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex bg-orange-500 items-center rounded-full px-6 py-2 mb-6">
            <span className="text-white font-medium">Platform Features</span>
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">Comprehensive Health Data Platform</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            From genomic sequencing to clinical trials, our platform provides end-to-end solutions for modern healthcare research with enterprise-grade security and performance
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="text-white text-xl" size={24} />
              </div>
              <div className="mb-4">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <div className="inline-flex items-center bg-gray-100 rounded-full px-3 py-1 mb-3">
                  <span className="text-xs font-medium text-gray-600">{feature.stats}</span>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-gradient-to-r from-teal-500 to-blue-500 rounded-3xl p-12 text-white">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Research?</h3>
              <p className="text-blue-100 text-lg mb-6">
                Join leading research institutions using our platform to accelerate discovery in malaria, cancer, and genomic medicine.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-teal-600 px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all">
                  Register Now
                </button>
                {/* <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-teal-600 transition-all">
                  Schedule Demo
                </button> */}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white bg-opacity-20 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold">10TB+</div>
                <div className="text-sm opacity-80">Data Processed Daily</div>
              </div>
              <div className="bg-white bg-opacity-20 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold">500+</div>
                <div className="text-sm opacity-80">Research Projects</div>
              </div>
              <div className="bg-white bg-opacity-20 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold">99.9%</div>
                <div className="text-sm opacity-80">Uptime SLA</div>
              </div>
              <div className="bg-white bg-opacity-20 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-sm opacity-80">Expert Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}