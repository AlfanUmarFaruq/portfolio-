import { Link } from 'react-router-dom'
import { ArrowRight, Github, Linkedin, Mail, ExternalLink } from 'lucide-react'

const Home = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Profile Image Placeholder */}
          <div className="mb-8 flex justify-center">
            <div className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1 shadow-xl">
              <div className="w-full h-full rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-4xl font-bold text-gray-600 dark:text-gray-400">
                AU
              </div>
            </div>
          </div>

          {/* Hero Text */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 dark:from-blue-400 dark:via-purple-400 dark:to-blue-300 bg-clip-text text-transparent">
            Alfan Umar Faruq
          </h1>
          
          <div className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4 font-medium">
            Robotics Engineering | Problem Solver
          </div>
          
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Saya menciptakan solusi digital yang inovatif dengan teknologi modern. 
            Spesialisasi dalam JavaScript, React, Node.js, dan pengembangan aplikasi web yang responsif dan user-friendly.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              to="/projects"
              className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
            >
              Lihat Proyek Saya
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 font-semibold rounded-lg border-2 border-blue-600 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
            >
              Hubungi Saya
              <Mail className="ml-2 h-5 w-5" />
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transform hover:-translate-y-1 transition-all duration-200"
              aria-label="GitHub Profile"
            >
              <Github className="h-6 w-6" />
            </a>
            
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transform hover:-translate-y-1 transition-all duration-200"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            
            <a
              href="mailto:developer@example.com"
              className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transform hover:-translate-y-1 transition-all duration-200"
              aria-label="Email Contact"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-blue-500 rounded-full animate-pulse delay-2000"></div>
      </section>

      {/* Quick Stats Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400">50+</div>
              <div className="text-gray-600 dark:text-gray-400">Proyek Selesai</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400">3+</div>
              <div className="text-gray-600 dark:text-gray-400">Tahun Pengalaman</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400">25+</div>
              <div className="text-gray-600 dark:text-gray-400">Klien Puas</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400">100%</div>
              <div className="text-gray-600 dark:text-gray-400">Kualitas Terjamin</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Skills Preview */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">
            Teknologi yang Saya Kuasai
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            Bekerja dengan teknologi terdepan untuk menciptakan solusi yang efisien dan scalable
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              'JavaScript', 'React', 'Node.js', 'TypeScript', 'Python', 'PostgreSQL'
            ].map((tech) => (
              <div
                key={tech}
                className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200"
              >
                <div className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                  {tech}
                </div>
              </div>
            ))}
          </div>
          
          <Link
            to="/about"
            className="inline-flex items-center mt-8 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
          >
            Pelajari lebih lanjut tentang saya
            <ExternalLink className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home
