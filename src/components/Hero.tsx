import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-br from-blue-50 to-indigo-100 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Welcome to{' '}
            <span className="text-blue-600">Sila</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Your trusted partner for innovative solutions and exceptional service. 
            We deliver excellence in every project we undertake.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors duration-200">
              Get Started
            </button>
            <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors duration-200">
              Learn More
            </button>
          </div>
        </div>
        
        {/* Hero Image/Illustration */}
        <div className="mt-16 flex justify-center">
          <div className="w-full max-w-4xl h-96 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-lg shadow-2xl flex items-center justify-center">
            <div className="text-center text-white">
              <h3 className="text-2xl font-semibold mb-4">Your Vision, Our Expertise</h3>
              <p className="text-lg opacity-90">
                Transforming ideas into reality with cutting-edge technology and innovative solutions
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
