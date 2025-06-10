import { ExternalLink, Github, ArrowRight, Filter } from 'lucide-react'
import { useState } from 'react'

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = ['All', 'Web Development', 'Mobile App', 'E-commerce', 'Dashboard']

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Platform e-commerce lengkap dengan sistem pembayaran, manajemen inventory, dan dashboard admin yang comprehensive.',
      image: '/images/project1.jpg',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Docker'],
      category: 'E-commerce',
      liveDemo: 'https://demo-ecommerce.com',
      githubRepo: 'https://github.com/username/ecommerce-platform',
      featured: true
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Aplikasi manajemen tugas dengan fitur kolaborasi real-time, notifikasi, dan integrasi kalender.',
      image: '/images/project2.jpg',
      technologies: ['React Native', 'Firebase', 'Redux', 'TypeScript'],
      category: 'Mobile App',
      liveDemo: 'https://task-manager-demo.com',
      githubRepo: 'https://github.com/username/task-manager',
      featured: true
    },
    {
      id: 3,
      title: 'Analytics Dashboard',
      description: 'Dashboard analitik real-time untuk monitoring performa bisnis dengan visualisasi data yang interaktif.',
      image: '/images/project3.jpg',
      technologies: ['Next.js', 'D3.js', 'Express.js', 'MongoDB', 'Socket.io'],
      category: 'Dashboard',
      liveDemo: 'https://analytics-dashboard.com',
      githubRepo: 'https://github.com/username/analytics-dashboard',
      featured: false
    },
    {
      id: 4,
      title: 'Social Media App',
      description: 'Aplikasi media sosial dengan fitur posting, story, chat real-time, dan sistem rekomendasi konten.',
      image: '/images/project4.jpg',
      technologies: ['React', 'Node.js', 'GraphQL', 'Redis', 'AWS S3'],
      category: 'Web Development',
      liveDemo: 'https://social-media-demo.com',
      githubRepo: 'https://github.com/username/social-media-app',
      featured: true
    },
    {
      id: 5,
      title: 'Restaurant Website',
      description: 'Website restoran dengan sistem reservasi online, menu digital, dan integrasi dengan sistem POS.',
      image: '/images/project1.jpg',
      technologies: ['Vue.js', 'Laravel', 'MySQL', 'PayPal API'],
      category: 'Web Development',
      liveDemo: 'https://restaurant-demo.com',
      githubRepo: 'https://github.com/username/restaurant-website',
      featured: false
    },
    {
      id: 6,
      title: 'Fitness Tracker Mobile',
      description: 'Aplikasi mobile untuk tracking aktivitas fitness dengan AI recommendations dan social features.',
      image: '/images/project2.jpg',
      technologies: ['Flutter', 'Python', 'TensorFlow', 'Firebase'],
      category: 'Mobile App',
      liveDemo: 'https://fitness-tracker.com',
      githubRepo: 'https://github.com/username/fitness-tracker',
      featured: false
    }
  ]

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  const featuredProjects = projects.filter(project => project.featured)

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-gray-100">
            Proyek-Proyek Saya
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
            Kumpulan proyek yang telah saya kerjakan, mulai dari aplikasi web hingga mobile app. 
            Setiap proyek menunjukkan dedikasi saya dalam menciptakan solusi yang inovatif dan user-friendly.
          </p>
          
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {projects.reduce((acc, project) => acc + project.technologies.length, 0)} teknologi digunakan dalam {projects.length} proyek
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">
              Proyek Unggulan
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Beberapa proyek terbaik yang menunjukkan keahlian dan kreativitas saya
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-20">
            {featuredProjects.slice(0, 2).map((project) => (
              <div
                key={project.id}
                className="group bg-gray-50 dark:bg-gray-900 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                {/* Project Image */}
                <div className="relative h-64 bg-gradient-to-r from-blue-400 to-purple-500 overflow-hidden">
                  <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold">
                    {project.title}
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center space-x-4">
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                    <a
                      href={project.githubRepo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-800 hover:bg-gray-900 text-white rounded-full transition-colors"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                      {project.title}
                    </h3>
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-sm rounded-full font-medium">
                      {project.category}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-md font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-4">
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </a>
                    <a
                      href={project.githubRepo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 rounded-lg transition-colors"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">
              Semua Proyek
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              Jelajahi koleksi lengkap proyek yang telah saya kerjakan
            </p>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-r from-blue-400 to-purple-500 overflow-hidden">
                  <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center text-white font-bold">
                    {project.title}
                  </div>
                  
                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 right-4 px-2 py-1 bg-yellow-400 text-yellow-900 text-xs font-bold rounded-full">
                      Featured
                    </div>
                  )}
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">
                      {project.title}
                    </h3>
                    <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-xs rounded-full">
                      {project.category}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-2">
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-lg transition-colors"
                    >
                      <ExternalLink className="h-3 w-3 mr-1" />
                      Demo
                    </a>
                    <a
                      href={project.githubRepo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center px-3 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 text-sm rounded-lg transition-colors"
                    >
                      <Github className="h-3 w-3 mr-1" />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">
                Tertarik Berkolaborasi?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                Saya selalu terbuka untuk proyek baru dan kolaborasi yang menarik. 
                Mari diskusikan ide Anda dan wujudkan bersama!
              </p>
              <a
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
              >
                Hubungi Saya
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Projects
