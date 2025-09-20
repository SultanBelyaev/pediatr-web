'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaGraduationCap, FaAward, FaUserMd, FaHeart } from 'react-icons/fa'

export default function AboutPreview() {
  const achievements = [
    {
      icon: FaGraduationCap,
      title: 'Образование',
      description: 'Московский государственный медицинский университет им. И.М. Сеченова'
    },
    {
      icon: FaAward,
      title: 'Сертификаты',
      description: 'Сертификат по педиатрии, курсы повышения квалификации'
    },
    {
      icon: FaUserMd,
      title: 'Опыт работы',
      description: '15+ лет в детской больнице, частная практика с 2015 года'
    },
    {
      icon: FaHeart,
      title: 'Подход',
      description: 'Индивидуальный подход к каждому ребенку и его семье'
    }
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-primary-200 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaUserMd className="w-12 h-12 text-primary-600" />
                  </div>
                  <p className="text-gray-600">Фото врача</p>
                </div>
              </div>
              
              {/* Floating stats */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-6 max-w-xs">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-1">15+</div>
                  <div className="text-sm text-gray-600">лет опыта</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right content - Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Обо мне
            </h2>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Я — детский врач-педиатр с более чем 15-летним опытом работы. 
              Моя миссия — обеспечить каждому ребенку качественную медицинскую помощь 
              в комфортной и безопасной обстановке.
            </p>

            <p className="text-gray-600 mb-8 leading-relaxed">
              Специализируюсь на профилактике, диагностике и лечении заболеваний 
              у детей всех возрастов. Постоянно совершенствую свои знания, 
              участвую в медицинских конференциях и курсах повышения квалификации.
            </p>

            {/* Achievements grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-3"
                >
                  <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <achievement.icon className="w-4 h-4 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{achievement.title}</h4>
                    <p className="text-sm text-gray-600">{achievement.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/about" className="btn-primary">
                Подробнее обо мне
              </Link>
              <Link href="/contacts" className="btn-secondary">
                Связаться со мной
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
