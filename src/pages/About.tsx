import { Code, Database, Globe, Smartphone, Users, Zap, Award, BookOpen } from 'lucide-react'

const About = () => {
  const skills = [
    {
      category: 'Frontend Development',
      icon: <Globe className="h-6 w-6" />,
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vue.js', 'HTML5', 'CSS3', 'SASS'],
      color: 'blue'
    },
    {
      category: 'Backend Development',
      icon: <Database className="h-6 w-6" />,
      technologies: ['Node.js', 'Express.js', 'Python', 'Django', 'PostgreSQL', 'MongoDB', 'Redis', 'GraphQL'],
      color: 'green'
    },
    {
      category: 'Mobile Development',
      icon: <Smartphone className="h-6 w-6" />,
      technologies: ['React Native', 'Flutter', 'Expo', 'Android Studio', 'iOS Development'],
      color: 'purple'
    },
    {
      category: 'Tools & DevOps',
      icon: <Code className="h-6 w-6" />,
      technologies: ['Git', 'Docker', 'AWS', 'Vercel', 'Webpack', 'Vite', 'Jest', 'Cypress'],
      color: 'orange'
    }
  ]

  const experiences = [
    {
      role: 'Senior Full-Stack Developer',
      company: 'Tech Solutions Inc.',
      period: '2022 - Sekarang',
      description: 'Memimpin tim pengembangan untuk proyek e-commerce skala besar dengan 100K+ pengguna aktif. Mengimplementasikan arsitektur microservices dan meningkatkan performa aplikasi hingga 40%.'
    },
    {
      role: 'Frontend Developer',
      company: 'Digital Agency XYZ',
      period: '2021 - 2022',
      description: 'Mengembangkan antarmuka pengguna yang responsif dan interaktif untuk berbagai klien. Spesialisasi dalam React dan optimasi SEO, berhasil meningkatkan konversi klien hingga 25%.'
    },
    {
      role: 'Junior Developer',
      company: 'Startup Innovation',
      period: '2020 - 2021',
      description: 'Memulai karir sebagai junior developer, fokus pada pembelajaran teknologi modern dan pengembangan MVP untuk berbagai ide bisnis startup.'
    }
  ]

  const achievements = [
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Best Developer Award 2023',
      description: 'Penghargaan dari perusahaan atas kontribusi luar biasa dalam mengoptimalkan performa aplikasi'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Team Leadership',
      description: 'Memimpin tim pengembangan 5 orang dalam proyek kompleks dengan deadline ketat'
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Performance Optimization Expert',
      description: 'Spesialis dalam optimasi performa web dengan track record peningkatan speed hingga 60%'
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: 'Continuous Learner',
      description: 'Aktif belajar teknologi baru dan sharing knowledge melalui blog dan community'
    }
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                <div className="w-80 h-80 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 p-1 shadow-2xl">
                  <div className="w-full h-full rounded-2xl bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-6xl font-bold text-gray-600 dark:text-gray-400">
                    AU
                  </div>
                </div>
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-400 rounded-full animate-bounce"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-400 rounded-full animate-pulse"></div>
              </div>
            </div>

            {/* Profile Info */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-gray-100">
                Tentang Saya
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                Halo! Saya Alfan Umar Faruq, seorang Robotics Engineering yang passionate dalam menciptakan 
                solusi inovatif. Dengan pengalaman 3+ tahun di industri teknologi, saya 
                telah mengembangkan berbagai alat robotik dan iot dalam berbagai bidang.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Saya percaya bahwa teknologi harus mempermudah hidup manusia. Oleh karena itu, 
                saya selalu fokus pada user experience yang optimal dan kode yang clean, maintainable, 
                serta scalable. Saya juga aktif berkontribusi pada open source dan community development.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200">
                  Download CV
                </button>
                <button className="px-6 py-3 bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 font-semibold rounded-lg border-2 border-blue-600 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200">
                  Lihat Portfolio
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">
              Keahlian Teknis
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Menguasai berbagai teknologi modern untuk mengembangkan aplikasi yang robust dan scalable
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill) => (
              <div
                key={skill.category}
                className="p-6 bg-gray-50 dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className={`p-3 bg-${skill.color}-100 dark:bg-${skill.color}-900/20 text-${skill.color}-600 dark:text-${skill.color}-400 rounded-lg mr-4`}>
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                    {skill.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 bg-${skill.color}-100 dark:bg-${skill.color}-900/20 text-${skill.color}-700 dark:text-${skill.color}-300 text-sm rounded-full font-medium`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">
              Pengalaman Profesional
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Perjalanan karir saya dalam dunia pengembangan software
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-1">
                      {exp.role}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-semibold">
                      {exp.company}
                    </p>
                  </div>
                  <span className="text-gray-500 dark:text-gray-400 font-medium mt-2 md:mt-0">
                    {exp.period}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">
              Pencapaian & Prestasi
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Beberapa highlight dari perjalanan profesional saya
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-6 bg-gray-50 dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="p-3 bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-lg flex-shrink-0">
                  {achievement.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {achievement.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
