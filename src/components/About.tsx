import React from 'react';

const About = () => {
  const stats = [
    { number: '100+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '5+', label: 'Years Experience' },
    { number: '24/7', label: 'Support Available' },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              About Sila
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              We are a team of passionate developers, designers, and innovators dedicated to 
              creating exceptional digital experiences. Our mission is to help businesses 
              transform their ideas into reality through cutting-edge technology and creative solutions.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              With years of experience in the industry, we understand the challenges businesses 
              face in today's digital landscape. We combine technical expertise with creative 
              thinking to deliver solutions that not only meet your requirements but exceed your expectations.
            </p>
            
            {/* Key Features */}
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                <span className="text-gray-700">Expert team with proven track record</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                <span className="text-gray-700">Cutting-edge technology and tools</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                <span className="text-gray-700">Client-focused approach and support</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                <span className="text-gray-700">Agile development methodology</span>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-20">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-12">
            Our Team
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">JD</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">John Doe</h4>
              <p className="text-gray-600">CEO & Founder</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-green-400 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">JS</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Jane Smith</h4>
              <p className="text-gray-600">Lead Developer</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">MJ</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Mike Johnson</h4>
              <p className="text-gray-600">UI/UX Designer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
