'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaStethoscope, FaHeart, FaShieldAlt, FaUserMd } from 'react-icons/fa'

export default function Hero() {
  const features = [
    {
      icon: FaStethoscope,
      title: 'Профессиональная диагностика',
      description: 'Точная постановка диагноза с использованием современных методов'
    },
    {
      icon: FaHeart,
      title: 'Заботливый подход',
      description: 'Индивидуальное отношение к каждому ребенку и его семье'
    },
    {
      icon: FaShieldAlt,
      title: 'Безопасность',
      description: 'Соблюдение всех медицинских стандартов и протоколов'
    },
    {
      icon: FaUserMd,
      title: 'Опыт работы',
      description: 'Более 8 лет практики в детской медицине'
    }
  ]

  return (
    <section className="relative bg-gradient-to-br from-primary-50 to-secondary-50 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%230ea5e9%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
      
      <div className="container-custom section-padding relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Здоровье вашего ребенка — 
              <span className="text-primary-600"> наш приоритет</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Профессиональная медицинская помощь детям от 0 до 18 лет. 
              Индивидуальный подход, современные методы диагностики и лечения.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Link href="/contacts" className="btn-primary text-lg px-8 py-4">
                Записаться на консультацию
              </Link>
              <Link href="/about" className="btn-secondary text-lg px-8 py-4">
                Узнать больше
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">8+</div>
                <div className="text-sm text-gray-600">лет опыта</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">2000+</div>
                <div className="text-sm text-gray-600">пациентов</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">24/7</div>
                <div className="text-sm text-gray-600">консультации</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">100%</div>
                <div className="text-sm text-gray-600">доверие</div>
              </div>
            </div>
          </motion.div>

          {/* Right content - Doctor image and features */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Doctor image placeholder */}
            <div className="relative">
              <div className="w-full h-96 lg:h-[500px] bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-primary-200 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaUserMd className="w-16 h-16 text-primary-600" />
                  </div>
                  <p className="text-gray-600">Фото врача</p>
                </div>
              </div>
              
              {/* Floating features */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 max-w-xs"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <FaHeart className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Забота о детях</div>
                    <div className="text-sm text-gray-600">С 2008 года</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Features grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              className="card text-center hover:scale-105 transition-transform duration-300"
            >
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
