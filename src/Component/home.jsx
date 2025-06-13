import React, { useState, useEffect } from 'react';
import { Menu, X, BarChart3, Users, Lightbulb, ArrowRight, Play } from 'lucide-react';

export default function SocialMediaMarketingLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Sales');

  const tabs = [
    { name: 'Sales', icon: BarChart3, description: 'Boost revenue through targeted social campaigns' },
    { name: 'Marketing', icon: Users, description: 'Engage audiences across all major platforms' },
    { name: 'Idea', icon: Lightbulb, description: 'Creative content strategies that convert' }
  ];

  const brands = [
    { name: 'Avast', color: 'text-orange-500' },
    { name: 'BuzzFeed', color: 'text-red-500' },
    { name: 'Booking.com', color: 'text-blue-600' },
    { name: 'Expedia', color: 'text-blue-800' },
    { name: 'Dispatch', color: 'text-blue-500' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-blue-50 to-cyan-100 overflow-hidden relative">
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-8 h-8 bg-yellow-400 rounded-full opacity-80 animate-bounce"></div>
      <div className="absolute top-40 right-20 w-6 h-6 bg-pink-400 rounded-full opacity-60 animate-pulse"></div>
      <div className="absolute bottom-40 left-20 w-4 h-4 bg-green-400 rounded-full opacity-70 animate-bounce delay-1000"></div>
      <div className="absolute top-60 left-1/4 w-5 h-5 bg-purple-400 rounded-full opacity-50 animate-pulse delay-500"></div>

      {/* Abstract Shapes */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-purple-200 to-transparent rounded-full opacity-30 transform translate-x-32 -translate-y-32"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-cyan-200 to-transparent rounded-full opacity-40 transform -translate-x-48 translate-y-48"></div>

      {/* Header */}
      <header className="relative z-50 px-4 sm:px-6 lg:px-8 py-6">
        <nav className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-500 rounded-xl flex items-center justify-center">
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-gradient-to-br from-purple-600 to-pink-500 rounded-full"></div>
              </div>
            </div>
            <span className="text-xl font-bold text-gray-900">Marketing</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">About</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Service</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Product</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Blog</a>
            <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-2 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-200">
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-lg shadow-lg rounded-2xl mx-4 mt-2 p-6 space-y-4">
            <a href="#" className="block text-gray-600 hover:text-gray-900 transition-colors">About</a>
            <a href="#" className="block text-gray-600 hover:text-gray-900 transition-colors">Service</a>
            <a href="#" className="block text-gray-600 hover:text-gray-900 transition-colors">Product</a>
            <a href="#" className="block text-gray-600 hover:text-gray-900 transition-colors">Blog</a>
            <button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-2 rounded-full">
              Contact Us
            </button>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center py-12">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Social Media
                <br />
                <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                  Marketing
                </span>
              </h1>
            </div>

            {/* Tabs */}
            <div className="space-y-4">
              {tabs.map((tab) => {
                const IconComponent = tab.icon;
                return (
                  <div
                    key={tab.name}
                    className={`p-4 rounded-2xl cursor-pointer transition-all duration-300 ${activeTab === tab.name
                        ? 'bg-white/80 backdrop-blur-lg shadow-lg border border-white/20'
                        : 'bg-white/40 backdrop-blur-sm hover:bg-white/60'
                      }`}
                    onClick={() => setActiveTab(tab.name)}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-lg ${activeTab === tab.name ? 'bg-gradient-to-br from-purple-500 to-pink-500' : 'bg-gray-200'
                        }`}>
                        <IconComponent className={`w-5 h-5 ${activeTab === tab.name ? 'text-white' : 'text-gray-600'
                          }`} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{tab.name}</h3>
                        <p className="text-sm text-gray-600">{tab.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column - 3D Illustration */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
              {/* Person Illustration */}
              <div className="relative flex justify-center items-center h-80">
                <div className="relative">
                  {/* Person sitting with laptop */}
                  <div className="w-32 h-32 bg-gradient-to-br from-yellow-200 to-orange-300 rounded-full relative">
                    {/* Head */}
                    <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-yellow-600 to-orange-500 rounded-full"></div>
                    {/* Body */}
                    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-20 h-16 bg-gradient-to-br from-gray-300 to-gray-400 rounded-2xl"></div>
                  </div>

                  {/* Question mark bubble */}
                  <div className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center transform rotate-12">
                    <span className="text-white text-2xl font-bold">?</span>
                  </div>

                  {/* Books stack */}
                  <div className="absolute -right-12 bottom-4 space-y-1">
                    <div className="w-8 h-2 bg-blue-400 rounded"></div>
                    <div className="w-8 h-2 bg-green-400 rounded"></div>
                    <div className="w-8 h-2 bg-yellow-400 rounded"></div>
                    <div className="w-8 h-2 bg-red-400 rounded"></div>
                  </div>

                  {/* Plant */}
                  <div className="absolute -left-12 bottom-8">
                    <div className="w-4 h-8 bg-green-500 rounded-t-full"></div>
                    <div className="w-6 h-3 bg-orange-400 rounded-b-lg"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Brand Logos */}
        <div className="py-12">
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-70">
            {brands.map((brand, index) => (
              <div key={index} className="flex items-center space-x-2 hover:opacity-100 transition-opacity">
                <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${brand.name === 'Avast' ? 'from-orange-400 to-orange-600' :
                    brand.name === 'BuzzFeed' ? 'from-red-400 to-red-600' :
                      brand.name === 'Booking.com' ? 'from-blue-500 to-blue-700' :
                        brand.name === 'Expedia' ? 'from-blue-700 to-blue-900' :
                          'from-blue-400 to-blue-600'
                  }`}></div>
                <span className={`font-semibold text-lg ${brand.color}`}>{brand.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Features Section */}
        <section className="py-16">
          <div className="text-center space-y-6 mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Features</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod
              tincidunt ut laoreet dolore magna aliquam erat volutpat.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/60 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:shadow-xl transition-all duration-300 group">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl"></div>
                </div>
                <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-500 rounded-lg"></div>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Analytics & Insights</h3>
                <p className="text-gray-600">Track performance across all platforms with detailed analytics and actionable insights to optimize your social media strategy.</p>
                <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium group-hover:translate-x-1 transition-transform">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="bg-white/60 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:shadow-xl transition-all duration-300 group">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl flex items-center justify-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl"></div>
                </div>
                <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-purple-500 rounded-lg"></div>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Content Management</h3>
                <p className="text-gray-600">Schedule, manage, and publish content across multiple social media platforms from one unified dashboard.</p>
                <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium group-hover:translate-x-1 transition-transform">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}