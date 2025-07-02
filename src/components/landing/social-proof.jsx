// import { Quote, Star, Building2 } from "lucide-react";

// export default function SocialProof() {
//   const stats = [
//     { number: "500+", label: "Research Teams", sublabel: "Across 45 countries" },
//     { number: "10TB+", label: "Data Processed Daily", sublabel: "Genomic & clinical data" },
//     { number: "99.9%", label: "Uptime Reliability", sublabel: "Enterprise SLA guarantee" },
//     { number: "100+", label: "Healthcare Systems", sublabel: "Major medical centers" }
//   ];

//   const testimonials = [
//     {
//       quote: "FEDGEN DataHub has transformed our malaria research workflow. The integration of genomic and clinical data has accelerated our biomarker discovery by 300% and enabled unprecedented collaboration across our international research network.",
//       author: "Dr. Sarah Chen",
//       title: "Lead Researcher, Malaria Genomics Consortium",
//       institution: "Harvard T.H. Chan School of Public Health",
//       rating: 5
//     },
//     {
//       quote: "The platform's ability to harmonize multi-omics data from different sources has been game-changing for our cancer research. We've identified novel therapeutic targets that would have taken years to discover using traditional methods.",
//       author: "Prof. Michael Rodriguez",
//       title: "Director of Precision Oncology",
//       institution: "Memorial Sloan Kettering Cancer Center",
//       rating: 5
//     },
//     {
//       quote: "As an educator, I've never seen students so engaged with bioinformatics. The platform's interactive tutorials and real data access have revolutionized how we teach genomic analysis to the next generation of scientists.",
//       author: "Dr. Aisha Patel",
//       title: "Professor of Bioinformatics",
//       institution: "Stanford University School of Medicine",
//       rating: 5
//     }
//   ];

//   const institutions = [
//     "Harvard Medical School",
//     "Johns Hopkins University",
//     "Mayo Clinic",
//     "NIH/NCI",
//     "Stanford Medicine",
//     "UCSF Health",
//     "MD Anderson",
//     "Broad Institute"
//   ];

//   return (
//     <section id="testimonials" className="py-24 bg-gradient-to-br from-primary-teal via-primary-blue to-accent-cyan text-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-20">
//           <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
//             <span className="text-white font-medium">Trusted Worldwide</span>
//           </div>
//           <h2 className="text-5xl font-bold mb-6">Leading Institutions Choose FEDGEN</h2>
//           <p className="text-xl text-blue-100 max-w-3xl mx-auto">
//             Join the growing community of researchers and healthcare professionals advancing scientific discovery
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
//           {stats.map((stat, index) => (
//             <div key={index} className="text-center">
//               <div className="bg-white bg-opacity-10 rounded-2xl p-6 backdrop-blur-sm border border-white border-opacity-20">
//                 <div className="text-4xl font-bold mb-2">{stat.number}</div>
//                 <div className="text-lg font-semibold mb-1">{stat.label}</div>
//                 <p className="text-blue-100 text-sm">{stat.sublabel}</p>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="mb-20">
//           <h3 className="text-3xl font-bold text-center mb-12">What Our Users Say</h3>
//           <div className="grid lg:grid-cols-3 gap-8">
//             {testimonials.map((testimonial, index) => (
//               <div key={index} className="bg-white bg-opacity-10 rounded-2xl p-8 backdrop-blur-sm border border-white border-opacity-20">
//                 <div className="flex mb-4">
//                   {Array.from({ length: testimonial.rating }).map((_, i) => (
//                     <Star key={i} className="text-yellow-400 fill-current" size={20} />
//                   ))}
//                 </div>
//                 <Quote className="text-white opacity-50 mb-4" size={32} />
//                 <p className="text-blue-100 leading-relaxed mb-6 italic">"{testimonial.quote}"</p>
//                 <div className="border-t border-white border-opacity-20 pt-4">
//                   <div className="font-semibold">{testimonial.author}</div>
//                   <div className="text-blue-200 text-sm">{testimonial.title}</div>
//                   <div className="text-blue-300 text-sm flex items-center mt-1">
//                     <Building2 size={14} className="mr-1" />
//                     {testimonial.institution}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="text-center">
//           <h3 className="text-2xl font-bold mb-8">Trusted by Leading Research Institutions</h3>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//             {institutions.map((institution, index) => (
//               <div key={index} className="bg-white bg-opacity-10 rounded-xl p-4 backdrop-blur-sm border border-white border-opacity-20">
//                 <div className="text-sm font-medium text-center">{institution}</div>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="mt-20 text-center">
//           <h3 className="text-3xl font-bold mb-6">Ready to Join the Scientific Revolution?</h3>
//           <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
//             Start your free trial today and experience the future of health data management
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <button className="bg-white text-primary-teal px-8 py-4 rounded-xl font-semibold hover:bg-opacity-90 transition-all transform hover:scale-105">
//               Start Free Trial
//             </button>
//             <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-primary-teal transition-all">
//               Schedule Demo
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import { Quote, Star, Building2 } from "lucide-react";

export default function SocialProof() {
  const stats = [
    { number: "--+", label: "Research Teams", sublabel: "Across 45 countries" },
    { number: "--TB+", label: "Data Processed Daily", sublabel: "Genomic & clinical data" },
    { number: "--%", label: "Uptime Reliability", sublabel: "Enterprise SLA guarantee" },
    { number: "--+", label: "Healthcare Systems", sublabel: "Major medical centers" }
  ];

  const testimonials = [
    {
      quote: "FEDGEN DataHub has transformed our malaria research workflow. The integration of genomic and clinical data has accelerated our biomarker discovery by 300% and enabled unprecedented collaboration across our international research network.",
      author: "Dr. Sarah Chen",
      title: "Lead Researcher, Malaria Genomics Consortium",
      institution: "Harvard T.H. Chan School of Public Health",
      rating: 5
    },
    {
      quote: "The platform's ability to harmonize multi-omics data from different sources has been game-changing for our cancer research. We've identified novel therapeutic targets that would have taken years to discover using traditional methods.",
      author: "Prof. Michael Rodriguez",
      title: "Director of Precision Oncology",
      institution: "Memorial Sloan Kettering Cancer Center",
      rating: 5
    },
    {
      quote: "As an educator, I've never seen students so engaged with bioinformatics. The platform's interactive tutorials and real data access have revolutionized how we teach genomic analysis to the next generation of scientists.",
      author: "Dr. Aisha Patel",
      title: "Professor of Bioinformatics",
      institution: "Stanford University School of Medicine",
      rating: 5
    }
  ];

  const institutions = [
    "Harvard Medical School",
    "Johns Hopkins University",
    "Mayo Clinic",
    "NIH/NCI",
    "Stanford Medicine",
    "UCSF Health",
    "MD Anderson",
    "Broad Institute"
  ];

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-br from-teal-600 via-blue-700 to-cyan-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <span className="text-white font-medium">Trusted Worldwide</span>
          </div>
          <h2 className="text-5xl font-bold mb-6">Leading Institutions Choose FEDGEN</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Join the growing community of researchers and healthcare professionals advancing scientific discovery
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-white bg-opacity-10 rounded-2xl p-6 backdrop-blur-sm border border-white border-opacity-20">
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg font-semibold mb-1">{stat.label}</div>
                <p className="text-blue-100 text-sm">{stat.sublabel}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12">What Our Users Say</h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white bg-opacity-10 rounded-2xl p-8 backdrop-blur-sm border border-white border-opacity-20">
                <div className="flex mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={20} />
                  ))}
                </div>
                <Quote className="text-white opacity-50 mb-4" size={32} />
                <p className="text-blue-100 leading-relaxed mb-6 italic">"{testimonial.quote}"</p>
                <div className="border-t border-white border-opacity-20 pt-4">
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-blue-200 text-sm">{testimonial.title}</div>
                  <div className="text-blue-300 text-sm flex items-center mt-1">
                    <Building2 size={14} className="mr-1" />
                    {testimonial.institution}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold mb-8">Trusted by Leading Research Institutions</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {institutions.map((institution, index) => (
              <div key={index} className="bg-white bg-opacity-10 rounded-xl p-4 backdrop-blur-sm border border-white border-opacity-20">
                <div className="text-sm font-medium text-center">{institution}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 text-center">
          <h3 className="text-3xl font-bold mb-6">Ready to Join the Scientific Revolution?</h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Start your free trial today and experience the future of health data management
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-teal-700 px-8 py-4 rounded-xl font-semibold hover:bg-opacity-90 transition-all transform hover:scale-105">
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-teal-700 transition-all">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}