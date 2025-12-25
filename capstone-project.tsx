import React, { useState, useEffect } from 'react';

const ProjectPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const paragraphs = [
    "Egypt is currently facing significant environmental challenges, one of the most critical being the increasing amount of electrical and electronic waste. This issue is mainly caused by rapid technological advancements, inadequate recycling infrastructure, and the disposal of broken or obsolete electronic devices. As a result, electronic waste negatively impacts the environment and contributes to climate change.",
    
    "During our research on existing solutions, we found projects such as a pH meter constructed from recycled motherboards and an oscilloscope built using components from old laptops, chargers, and LCD screens. These solutions demonstrated how electronic waste can be transformed into functional scientific instruments.",
    
    "Based on our findings, we selected the Leaf Health Detector as the most suitable solution. This device is particularly useful in biology laboratories, especially for Grade 10 Semester 2 practical sessions and examinations.",
    
    "The system measures the chlorophyll percentage in plant leaves by analyzing RGB color values and determines plant health by measuring temperature and stress levels. It satisfies project requirements by reusing electronic components while providing more than one measurable function.",
    
    "To validate the prototype, tests were conducted on five different plant types. Healthy plants showed green pigmentation, moderately stressed plants showed yellow pigmentation, and unhealthy plants appeared nearly colorless. The variation depended on both plant type and health condition.",
    
    "This project aims to preserve the environment by transforming electrical and electronic waste into valuable scientific tools that support education and experimentation."
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-green-50/30 to-blue-50/30">
      {/* Navigation */}
      <nav className="border-b border-gray-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex gap-8">
            <button onClick={() => window.location.hash = 'project'} className="text-gray-900 font-semibold border-b-2 border-green-600 pb-1 transition-colors">
              Project Details
            </button>
            <button onClick={() => window.location.hash = 'results'} className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
              Test Results
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-16">
        
        {/* Title */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
              Capstone Project 2025
            </span>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-700 via-blue-700 to-purple-700">
            Leaf Health Detector
          </h1>
          <p className="text-xl text-gray-600">using Recycled Electronic Waste</p>
        </div>

        {/* Image Section */}
        <div className="mb-20 flex justify-center">
          <div 
            className={`transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            <div className="relative w-full max-w-5xl">
              {/* Animated background glow */}
              <div className="absolute -inset-8 bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 rounded-3xl opacity-20 blur-3xl animate-pulse"></div>
              
              {/* Decorative floating elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full opacity-40 blur-2xl animate-pulse"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-40 blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
              
              {/* Main image container */}
              <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-white ring-2 ring-gray-100">
                {/* Replace './prototype.jpg' with your actual image path */}
                <img 
                  src="WhatsApp Image 2025-12-25 at 03.00.21.jpeg"
                  alt="Leaf Health Detector Prototype with breadboard, colorful wires, sensors, and yellow flower"
                  className="w-full h-auto"
                />
                
                {/* Overlay badges */}
                <div className="absolute top-6 left-6 flex flex-col gap-3">
                  <div className="bg-white/95 backdrop-blur-md px-5 py-3 rounded-2xl shadow-lg border border-green-100 flex items-center gap-2 transform hover:scale-105 transition-transform">
                    <span className="text-2xl">♻️</span>
                    <span className="text-sm font-bold text-green-700">Recycled Electronics</span>
                  </div>
                  <div className="bg-white/95 backdrop-blur-md px-5 py-3 rounded-2xl shadow-lg border border-blue-100 flex items-center gap-2 transform hover:scale-105 transition-transform">
                    <span className="text-2xl">🔬</span>
                    <span className="text-sm font-bold text-blue-700">Lab-Ready Device</span>
                  </div>
                </div>
                
                {/* Bottom info badge */}
                <div className="absolute bottom-6 right-6">
                  <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-6 py-3 rounded-2xl shadow-xl backdrop-blur-sm flex items-center gap-2">
                    <span className="text-2xl">🌿</span>
                    <span className="text-sm font-bold">Plant Health Monitor</span>
                  </div>
                </div>
              </div>
              
              {/* Corner accent decorations */}
              <div className="absolute -top-3 -right-3 w-20 h-20 border-4 border-green-400 rounded-full opacity-50"></div>
              <div className="absolute -bottom-3 -left-3 w-16 h-16 border-4 border-blue-400 rounded-full opacity-50"></div>
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-12 shadow-lg border border-gray-100">
            <div className="space-y-8">
              {paragraphs.map((text, index) => (
                <p
                  key={index}
                  className={`text-xl leading-relaxed text-gray-700 transition-all duration-700 ${
                    isVisible 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-4'
                  }`}
                  style={{
                    transitionDelay: `${(index + 2) * 150}ms`
                  }}
                >
                  {text}
                </p>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white/80 backdrop-blur-sm mt-24">
        <div className="max-w-6xl mx-auto px-6 py-8 text-center">
          <p className="text-gray-600 font-medium">Environmental Technology • Sustainable Innovation • Educational Excellence</p>
          <p className="text-gray-400 text-sm mt-2">Capstone Project 2025</p>
        </div>
      </footer>
    </div>
  );
};

const ResultsPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const results = [
    { trial: 1, temp: '25.1', humidity: '60', rgb: '62%', interpretation: 'Healthy leaf', status: 'healthy' },
    { trial: 2, temp: '27.0', humidity: '55', rgb: '64%', interpretation: 'Moderately stressed leaf', status: 'moderate' },
    { trial: 3, temp: '29.2', humidity: '49', rgb: '63%', interpretation: 'Highly stressed leaf', status: 'stressed' },
    { trial: 4, temp: '24.9', humidity: '64', rgb: '65%', interpretation: 'Healthy leaf', status: 'healthy' },
    { trial: 5, temp: '28.3', humidity: '52', rgb: '63%', interpretation: 'Moderately stressed leaf', status: 'moderate' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-green-50/30 to-blue-50/30">
      {/* Navigation */}
      <nav className="border-b border-gray-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex gap-8">
            <button onClick={() => window.location.hash = 'project'} className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
              Project Details
            </button>
            <button onClick={() => window.location.hash = 'results'} className="text-gray-900 font-semibold border-b-2 border-blue-600 pb-1 transition-colors">
              Test Results
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-16">
        
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
              Validation Results
            </span>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700">
            Test Results
          </h1>
          <p className="text-xl text-gray-600">Five Trials Across Different Plant Types</p>
        </div>

        <div className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}>
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-gray-100">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-blue-50 to-purple-50 border-b-2 border-gray-200">
                  <tr>
                    <th className="px-8 py-5 text-left text-sm font-bold text-gray-800 uppercase tracking-wider">Trial</th>
                    <th className="px-8 py-5 text-left text-sm font-bold text-gray-800 uppercase tracking-wider">Temperature (°C)</th>
                    <th className="px-8 py-5 text-left text-sm font-bold text-gray-800 uppercase tracking-wider">Humidity (%)</th>
                    <th className="px-8 py-5 text-left text-sm font-bold text-gray-800 uppercase tracking-wider">RGB %</th>
                    <th className="px-8 py-5 text-left text-sm font-bold text-gray-800 uppercase tracking-wider">Interpretation</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {results.map((row, index) => (
                    <tr 
                      key={row.trial}
                      className="hover:bg-gradient-to-r hover:from-green-50/50 hover:to-blue-50/50 transition-all duration-200"
                      style={{
                        animationDelay: `${index * 100}ms`
                      }}
                    >
                      <td className="px-8 py-5">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                            {row.trial}
                          </div>
                          <span className="font-semibold text-gray-700">Trial {row.trial}</span>
                        </div>
                      </td>
                      <td className="px-8 py-5">
                        <span className="text-gray-900 font-medium text-lg">{row.temp}</span>
                      </td>
                      <td className="px-8 py-5">
                        <span className="text-gray-900 font-medium text-lg">{row.humidity}</span>
                      </td>
                      <td className="px-8 py-5">
                        <span className="text-gray-900 font-medium text-lg">{row.rgb}</span>
                      </td>
                      <td className="px-8 py-5">
                        <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold shadow-md ${
                          row.status === 'healthy'
                            ? 'bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 border-2 border-green-300'
                            : row.status === 'stressed'
                            ? 'bg-gradient-to-r from-red-100 to-pink-100 text-red-800 border-2 border-red-300'
                            : 'bg-gradient-to-r from-yellow-100 to-orange-100 text-yellow-800 border-2 border-yellow-300'
                        }`}>
                          <span className="text-lg">
                            {row.status === 'healthy' ? '✓' : row.status === 'stressed' ? '✕' : '○'}
                          </span>
                          {row.interpretation}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          {/* Summary Stats */}
          <div className="grid grid-cols-3 gap-6 mt-12">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border-2 border-green-200 shadow-lg">
              <div className="text-4xl font-bold text-green-700 mb-2">2</div>
              <div className="text-sm font-semibold text-green-600 uppercase">Healthy Leaves</div>
            </div>
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-6 border-2 border-yellow-200 shadow-lg">
              <div className="text-4xl font-bold text-yellow-700 mb-2">2</div>
              <div className="text-sm font-semibold text-yellow-600 uppercase">Moderately Stressed</div>
            </div>
            <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-6 border-2 border-red-200 shadow-lg">
              <div className="text-4xl font-bold text-red-700 mb-2">1</div>
              <div className="text-sm font-semibold text-red-600 uppercase">Highly Stressed</div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white/80 backdrop-blur-sm mt-24">
        <div className="max-w-6xl mx-auto px-6 py-8 text-center">
          <p className="text-gray-600 font-medium">Environmental Technology • Sustainable Innovation • Educational Excellence</p>
          <p className="text-gray-400 text-sm mt-2">Capstone Project 2025</p>
        </div>
      </footer>
    </div>
  );
};

// Demo component to switch between pages
export default function CapstoneApp() {
  const [currentPage, setCurrentPage] = useState('project');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash === 'results' || hash === 'project') {
        setCurrentPage(hash);
      }
    };
    
    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div>
      <div className="fixed top-4 right-4 z-50 bg-white rounded-xl shadow-2xl p-2 border-2 border-gray-200">
        <div className="flex gap-2">
          <button
            onClick={() => {
              setCurrentPage('project');
              window.location.hash = 'project';
            }}
            className={`px-5 py-2 rounded-lg text-sm font-bold transition-all ${
              currentPage === 'project'
                ? 'bg-gradient-to-r from-green-600 to-blue-600 text-white shadow-lg'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Project
          </button>
          <button
            onClick={() => {
              setCurrentPage('results');
              window.location.hash = 'results';
            }}
            className={`px-5 py-2 rounded-lg text-sm font-bold transition-all ${
              currentPage === 'results'
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Results
          </button>
        </div>
      </div>
      
      {currentPage === 'project' ? <ProjectPage /> : <ResultsPage />}
    </div>
  );
}
