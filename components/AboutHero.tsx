'use client'

import { motion } from 'framer-motion'
import { FaUserMd, FaHeart, FaStethoscope, FaAward } from 'react-icons/fa'

export default function AboutHero() {
  const stats = [
    { number: '8+', label: 'лет опыта' },
    { number: '2000+', label: 'пациентов' },
    { number: '50+', label: 'курсов повышения квалификации' },
    { number: '100%', label: 'доверие родителей' }
  ]

  return (
    <section className="section-padding bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              <div className="w-full h-96 lg:h-[500px] bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl overflow-hidden">
                <img 
                  src="/images/doctor-2.jpg" 
                  alt="Али Муслимович - педиатр" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-lg p-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <FaHeart className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Забота о детях</div>
                    <div className="text-sm text-gray-600">С 2008 года</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right content - Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Добро пожаловать в мою практику
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Меня зовут [Имя Фамилия], и я — детский врач-педиатр с более чем 8-летним опытом работы. 
              Моя миссия — обеспечить каждому ребенку качественную медицинскую помощь 
              в комфортной и безопасной обстановке.
            </p>

            <p className="text-gray-600 mb-8 leading-relaxed">
              Я верю, что здоровье ребенка — это результат совместной работы врача и родителей. 
              Поэтому особое внимание уделяю объяснению родителям всех аспектов лечения 
              и профилактики заболеваний.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-primary-600 mb-2">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="/contacts" className="btn-primary">
                Записаться на консультацию
              </a>
              <a href="/services" className="btn-secondary">
                Посмотреть услуги
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
