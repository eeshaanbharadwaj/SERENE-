import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHeart, FaUserMd, FaBookOpen, FaBars, FaTimes, FaUserPlus, FaChartLine, FaComments, FaQuoteLeft, FaStar, FaUsers, FaShieldAlt, FaLock, FaCheckCircle, FaChevronDown, FaChevronUp, FaLeaf } from 'react-icons/fa';

// FAQ Component
function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-lg">
      <button
        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold text-gray-900">{question}</span>
        {isOpen ? (
          <FaChevronUp className="text-emerald-600" />
        ) : (
          <FaChevronDown className="text-gray-400" />
        )}
      </button>
      {isOpen && (
        <div className="px-6 pb-4">
          <p className="text-gray-600 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50">
      {/* Navbar */}
      <nav className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
                <FaLeaf className="text-white text-lg" />
              </div>
              <div>
                <span className="text-2xl font-bold text-gray-800">Serene</span>
                <div className="text-xs text-gray-500 font-medium -mt-1">Mental Health</div>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-emerald-600 transition-colors">Features</a>
              <a href="#about" className="text-gray-600 hover:text-emerald-600 transition-colors">About</a>
              <Link to="/login" className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6 py-2 rounded-full hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200">
                Login
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-emerald-600 transition-colors"
              >
                {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-white border-t border-gray-200 py-4">
              <div className="flex flex-col space-y-4">
                <a href="#features" className="text-gray-600 hover:text-emerald-600 transition-colors px-4">Features</a>
                <a href="#about" className="text-gray-600 hover:text-emerald-600 transition-colors px-4">About</a>
                <Link to="/login" className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6 py-2 rounded-full mx-4 hover:shadow-lg transition-all duration-200">
                  Login
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-teal-50"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" style={{animationDelay: '1s'}}></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="text-center lg:text-left">
              <div className="animate-fade-in-up">
                <div className="inline-flex items-center bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  <FaLeaf className="mr-2" />
                  Trusted by 50,000+ users worldwide
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  Your Mental Health
                  <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent"> Journey</span>
                  <br />
                  Starts Here
                </h1>
                <p className="text-xl text-gray-600 mb-8 max-w-2xl leading-relaxed">
                  Serene provides a comprehensive platform for tracking your mood, connecting with licensed healthcare professionals, 
                  and accessing evidence-based mental health resources to support your wellbeing journey.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                  <Link to="/signup" className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                    Start Free Trial
                  </Link>
                  <button className="border-2 border-emerald-500 text-emerald-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-emerald-50 transition-all duration-300">
                    Watch Demo
                  </button>
                </div>
                <div className="flex items-center justify-center lg:justify-start space-x-8 text-sm text-gray-600">
                  <div className="flex items-center">
                    <FaCheckCircle className="text-green-500 mr-2" />
                    Free to start
                  </div>
                  <div className="flex items-center">
                    <FaCheckCircle className="text-green-500 mr-2" />
                    HIPAA compliant
                  </div>
                  <div className="flex items-center">
                    <FaCheckCircle className="text-green-500 mr-2" />
                    No credit card
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Visual Placeholder */}
            <div className="relative">
              <div className="bg-white rounded-3xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-6 mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-800">Today's Mood</h3>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className="text-yellow-400 text-sm" />
                      ))}
                    </div>
                  </div>
                  <div className="h-32 bg-white rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-2">
                        <FaHeart className="text-white text-xl" />
                      </div>
                      <p className="text-sm text-gray-600">Mood Tracking Dashboard</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Weekly Progress</span>
                    <span className="text-blue-600 font-semibold">85%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full" style={{width: '85%'}}></div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-lg p-4 animate-bounce">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                    <FaUserMd className="text-white text-sm" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-600">Dr. Sarah</p>
                    <p className="text-xs text-green-600 font-semibold">Available</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-lg p-4 animate-bounce" style={{animationDelay: '1s'}}>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <FaBookOpen className="text-white text-sm" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-600">Resources</p>
                    <p className="text-xs text-purple-600 font-semibold">New Article</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-semibold text-gray-600 mb-2">Trusted by Thousands</h2>
            <p className="text-gray-500">Join a growing community of mental health advocates</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">50K+</div>
              <div className="text-gray-600 font-medium">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-600 mb-2">500+</div>
              <div className="text-gray-600 font-medium">Licensed Professionals</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">1M+</div>
              <div className="text-gray-600 font-medium">Mood Entries Tracked</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-500 mb-2">99.9%</div>
              <div className="text-gray-600 font-medium">Uptime Guarantee</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need for Better Mental Health
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive tools and resources designed to support your mental wellness journey
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Mood Tracking Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-2xl flex items-center justify-center mb-6">
                <FaHeart className="text-white text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Mood Tracking</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Track your daily mood patterns, identify triggers, and monitor your emotional wellbeing 
                with our intuitive mood tracking tools.
              </p>
              <a href="#" className="text-emerald-600 font-semibold hover:text-emerald-700 transition-colors">
                Learn More →
              </a>
            </div>

            {/* Doctor Communication Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                <FaUserMd className="text-white text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Doctor Communication</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Connect securely with licensed mental health professionals for consultations, 
                therapy sessions, and ongoing support.
              </p>
              <a href="#" className="text-emerald-600 font-semibold hover:text-emerald-700 transition-colors">
                Learn More →
              </a>
            </div>

            {/* Resources Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6">
                <FaBookOpen className="text-white text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Mental Health Resources</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Access curated articles, guided meditations, breathing exercises, and other 
                evidence-based mental health resources.
              </p>
              <a href="#" className="text-emerald-600 font-semibold hover:text-emerald-700 transition-colors">
                Learn More →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Getting started with Serene is simple and straightforward
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Step 1: Sign Up */}
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
                <FaUserPlus className="text-white text-2xl" />
              </div>
              <div className="bg-emerald-100 text-emerald-800 text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                Step 1
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Sign Up</h3>
              <p className="text-gray-600 leading-relaxed">
                Create your account in minutes with a simple registration process. 
                Your privacy and security are our top priorities.
              </p>
            </div>

            {/* Arrow */}
            <div className="hidden md:flex items-center justify-center">
              <div className="w-12 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-600 relative">
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-teal-600 border-t-2 border-t-transparent border-b-2 border-b-transparent"></div>
              </div>
            </div>

            {/* Step 2: Track Mood */}
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce" style={{animationDelay: '0.5s'}}>
                <FaChartLine className="text-white text-2xl" />
              </div>
              <div className="bg-teal-100 text-teal-800 text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                Step 2
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Track Your Mood</h3>
              <p className="text-gray-600 leading-relaxed">
                Use our intuitive mood tracking tools to monitor your emotional wellbeing 
                and identify patterns over time.
              </p>
            </div>

            {/* Arrow */}
            <div className="hidden md:flex items-center justify-center">
              <div className="w-12 h-0.5 bg-gradient-to-r from-teal-500 to-emerald-500 relative">
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-emerald-500 border-t-2 border-t-transparent border-b-2 border-b-transparent"></div>
              </div>
            </div>

            {/* Step 3: Connect with Doctor */}
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce" style={{animationDelay: '1s'}}>
                <FaComments className="text-white text-2xl" />
              </div>
              <div className="bg-emerald-100 text-emerald-800 text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                Step 3
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Connect with Doctor</h3>
              <p className="text-gray-600 leading-relaxed">
                Get professional support by connecting with licensed mental health 
                professionals for consultations and ongoing care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              What Our Community Says
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real stories from real people who have found support through Serene
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-4">
                <FaQuoteLeft className="text-emerald-500 text-2xl mr-3" />
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 text-sm" />
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                "Serene has been a game-changer for my mental health journey. The mood tracking 
                feature helped me understand my patterns, and connecting with my therapist 
                through the platform made getting help so much easier."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-semibold">SM</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Sarah M.</h4>
                  <p className="text-gray-600 text-sm">Patient, 2 years</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-4">
                <FaQuoteLeft className="text-emerald-500 text-2xl mr-3" />
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 text-sm" />
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                "As a mental health professional, I appreciate how Serene makes it easy to 
                stay connected with my patients. The platform's tools help me provide 
                better, more personalized care."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-semibold">DJ</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Dr. Jennifer L.</h4>
                  <p className="text-gray-600 text-sm">Licensed Therapist</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-4">
                <FaQuoteLeft className="text-emerald-500 text-2xl mr-3" />
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 text-sm" />
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                "The resources section has been incredibly helpful. From guided meditations 
                to articles about managing anxiety, Serene provides everything I need 
                to take care of my mental health daily."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-semibold">MR</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Michael R.</h4>
                  <p className="text-gray-600 text-sm">Patient, 1 year</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security & Trust Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Your Privacy & Security Matter
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're committed to protecting your mental health data with industry-leading security
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaLock className="text-green-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">End-to-End Encryption</h3>
              <p className="text-gray-600">All your data is encrypted using bank-level security protocols</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaShieldAlt className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">HIPAA Compliant</h3>
              <p className="text-gray-600">Fully compliant with healthcare privacy regulations</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaUsers className="text-purple-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Licensed Professionals</h3>
              <p className="text-gray-600">All healthcare providers are verified and licensed</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about Serene
            </p>
          </div>

          <div className="space-y-4">
            <FAQItem 
              question="Is my mental health data private and secure?"
              answer="Yes, absolutely. We use end-to-end encryption and are fully HIPAA compliant. Your data is never shared without your explicit consent, and we follow strict privacy protocols to protect your information."
            />
            <FAQItem 
              question="How do I connect with a mental health professional?"
              answer="Simply sign up for our Pro plan and browse our directory of licensed professionals. You can schedule consultations, have video sessions, and maintain ongoing relationships with therapists and counselors."
            />
            <FAQItem 
              question="Can I use Serene without a subscription?"
              answer="Yes! Our free plan includes basic mood tracking, access to mental health resources, and community support. You can upgrade to Pro anytime for additional features like professional consultations."
            />
            <FAQItem 
              question="What types of mental health professionals are available?"
              answer="We have licensed therapists, psychologists, psychiatrists, counselors, and other mental health professionals. All providers are verified and licensed in their respective states."
            />
            <FAQItem 
              question="How accurate is the mood tracking?"
              answer="Our mood tracking uses evidence-based methods and provides insights based on your patterns over time. While it's a helpful tool, it's not a replacement for professional mental health care."
            />
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Start Your Mental Health Journey?
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Join thousands of people who have found support, understanding, and professional care through Serene.
          </p>
          <Link to="/signup" className="bg-white text-emerald-600 px-12 py-4 rounded-full text-xl font-bold hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 hover:bg-emerald-50">
            Join Serene Today
          </Link>
          <p className="text-emerald-200 text-sm mt-4">
            Free to start • No credit card required • Cancel anytime
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
                  <FaLeaf className="text-white text-lg" />
                </div>
                <div>
                  <span className="text-2xl font-bold">Serene</span>
                  <div className="text-xs text-gray-400 font-medium -mt-1">Mental Health</div>
                </div>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                Supporting your mental health journey with compassionate care, 
                innovative tools, and professional guidance.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Community</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Serene. All rights reserved. | Your mental health matters.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
