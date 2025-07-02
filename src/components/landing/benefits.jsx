import { Microscope, Stethoscope, GraduationCap, ArrowRight, CheckCircle } from "lucide-react";

export default function Benefits() {
  const benefits = [
    {
      icon: Microscope,
      title: "For Researchers",
      subtitle: "Accelerate Scientific Discovery",
      description: "Streamline genomic analysis and biomarker discovery with integrated data workflows, collaborative tools, and AI-powered insights",
      features: [
        "Multi-omics data integration",
        "Automated quality control",
        "Collaborative workspaces",
        "Publication-ready visualizations",
        "Reproducible research pipelines"
      ],
      gradient: "from-teal-500 to-green-500",
      stats: "--+ active researchers"
    },
    {
      icon: Stethoscope,
      title: "For Clinicians",
      subtitle: "Enhance Patient Care",
      description: "Integrate patient data from multiple sources for evidence-based treatment decisions and personalized medicine approaches",
      features: [
        "Clinical data harmonization",
        "Real-time patient monitoring",
        "Treatment outcome tracking",
        "Precision medicine insights",
        "Regulatory compliance tools"
      ],
      gradient: "from-blue-500 to-cyan-500",
      stats: "--+ healthcare systems"
    },
    {
      icon: GraduationCap,
      title: "For Educators",
      subtitle: "Transform Learning",
      description: "Create interactive learning materials with real genomic and clinical data for enhanced bioinformatics education",
      features: [
        "Interactive data tutorials",
        "Virtual laboratory environments",
        "Student collaboration tools",
        "Assessment frameworks",
        "Curriculum integration support"
      ],
      gradient: "from-cyan-500 to-green-500",
      stats: "--+ universities"
    }
  ];

  return (
    <section id="benefits" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-orange bg-opacity-10 rounded-full px-6 py-2 mb-6">
            <span className="text-white font-medium">Who We Serve</span>
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">Designed for Healthcare Professionals</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Whether you're conducting cutting-edge research, treating patients, or educating the next generation of scientists, our platform adapts to your specific needs
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="group">
              <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                <div className="mb-8">
                  <div className={`w-20 h-20 bg-gradient-to-br ${benefit.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <benefit.icon className="text-white text-3xl" size={32} />
                  </div>
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-lg font-medium text-gray-500 mb-4">{benefit.subtitle}</p>
                    <div className="inline-flex items-center bg-gray-100 rounded-full px-4 py-2">
                      <span className="text-sm font-medium text-gray-600">{benefit.stats}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-6">{benefit.description}</p>
                </div>

                <div className="space-y-3 mb-8">
                  {benefit.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="text-green-500 flex-shrink-0" size={16} />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className="w-full bg-gradient-to-r from-teal-500 to-blue-500 text-white py-3 px-6 rounded-xl font-semibold hover:opacity-90 transition-all group-hover:scale-105 flex items-center justify-center space-x-2">
                  <span>Learn More</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Success Stories Across Healthcare</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform has enabled breakthrough discoveries and improved patient outcomes across diverse healthcare settings
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">--%</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Faster Data Analysis</h4>
              <p className="text-gray-600">Researchers report significantly faster data processing and analysis workflows</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">--%</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Improved Collaboration</h4>
              <p className="text-gray-600">Teams experience better cross-institutional collaboration and data sharing</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">--%</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Better Patient Outcomes</h4>
              <p className="text-gray-600">Clinicians report improved decision-making with integrated patient data</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}