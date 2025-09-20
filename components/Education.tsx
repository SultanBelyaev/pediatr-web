'use client'

import { motion } from 'framer-motion'
import { FaGraduationCap, FaCertificate, FaBook, FaMicroscope } from 'react-icons/fa'

export default function Education() {
  const educationItems = [
    {
      icon: FaGraduationCap,
      title: 'Высшее медицинское образование',
      institution: 'Московский государственный медицинский университет им. И.М. Сеченова',
      year: '2008',
      description: 'Специальность: Педиатрия. Диплом с отличием.'
    },
    {
      icon: FaCertificate,
      title: 'Сертификат по педиатрии',
      institution: 'Российская медицинская академия последипломного образования',
      year: '2023',
      description: 'Сертификат специалиста по педиатрии. Действителен до 2028 года.'
    },
    {
      icon: FaBook,
      title: 'Курсы повышения квалификации',
      institution: 'Национальный медицинский исследовательский центр здоровья детей',
      year: '2022',
      description: 'Современные методы диагностики и лечения детских заболеваний.'
    },
    {
      icon: FaMicroscope,
      title: 'Специализация по неонатологии',
      institution: 'Московский областной научно-исследовательский клинический институт',
      year: '2020',
      description: 'Углубленное изучение патологии новорожденных и недоношенных детей.'
    }
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Образование и квалификация
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Постоянное совершенствование знаний и навыков — основа качественной медицинской помощи
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card group hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-primary-200 transition-colors duration-300">
                  <item.icon className="w-6 h-6 text-primary-600" />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                    <span className="text-sm text-primary-600 font-medium">{item.year}</span>
                  </div>
                  
                  <p className="text-primary-600 font-medium mb-2">{item.institution}</p>
                  
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 bg-primary-50 rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Непрерывное обучение
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Ежегодно прохожу курсы повышения квалификации, участвую в медицинских конференциях 
            и семинарах. Слежу за последними достижениями в области педиатрии и детской медицины.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
            <span className="bg-white px-3 py-1 rounded-full">Детская кардиология</span>
            <span className="bg-white px-3 py-1 rounded-full">Аллергология</span>
            <span className="bg-white px-3 py-1 rounded-full">Гастроэнтерология</span>
            <span className="bg-white px-3 py-1 rounded-full">Неврология</span>
            <span className="bg-white px-3 py-1 rounded-full">Иммунология</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
