'use client'

import { motion } from 'framer-motion'
import { FaHospital, FaUserMd, FaHeart, FaStethoscope } from 'react-icons/fa'

export default function Experience() {
  const experienceItems = [
    {
      icon: FaHospital,
      title: 'Детская городская больница №1',
      position: 'Врач-педиатр',
      period: '2008 - 2015',
      description: 'Работа в отделении педиатрии, ведение пациентов с различными заболеваниями, участие в реанимационных мероприятиях.'
    },
    {
      icon: FaUserMd,
      title: 'Частная клиника "Здоровый ребенок"',
      position: 'Ведущий педиатр',
      period: '2015 - 2020',
      description: 'Ведение амбулаторного приема, консультации, профилактические осмотры, вакцинация.'
    },
    {
      icon: FaHeart,
      title: 'Частная практика',
      position: 'Врач-педиатр',
      period: '2020 - настоящее время',
      description: 'Индивидуальный прием пациентов, патронаж новорожденных, консультации по уходу за детьми.'
    }
  ]

  const achievements = [
    {
      icon: FaStethoscope,
      title: '2000+ пациентов',
      description: 'Успешно пролечено и проконсультировано'
    },
    {
      icon: FaHeart,
      title: '8+ лет опыта',
      description: 'Непрерывной работы в педиатрии'
    },
    {
      icon: FaUserMd,
      title: '50+ курсов',
      description: 'Повышения квалификации пройдено'
    }
  ]

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Профессиональный опыт
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Более 8 лет практики в различных медицинских учреждениях
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-primary-200"></div>
          
          <div className="space-y-12">
            {experienceItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                
                {/* Content */}
                <div className={`ml-12 md:ml-0 w-full md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                }`}>
                  <div className="card">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-6 h-6 text-primary-600" />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                          <span className="text-sm text-primary-600 font-medium">{item.period}</span>
                        </div>
                        
                        <p className="text-primary-600 font-medium mb-3">{item.position}</p>
                        
                        <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Достижения
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card text-center"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <achievement.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{achievement.title}</h4>
                <p className="text-gray-600">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
