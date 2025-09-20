'use client'

import { motion } from 'framer-motion'
import { FaStethoscope, FaHeart, FaShieldAlt, FaUserMd } from 'react-icons/fa'

export default function ServicesHero() {
  const features = [
    {
      icon: FaStethoscope,
      title: 'Профессиональная диагностика',
      description: 'Точная постановка диагноза с использованием современных методов'
    },
    {
      icon: FaHeart,
      title: 'Индивидуальный подход',
      description: 'Учет особенностей каждого ребенка и его семьи'
    },
    {
      icon: FaShieldAlt,
      title: 'Безопасность',
      description: 'Соблюдение всех медицинских стандартов и протоколов'
    },
    {
      icon: FaUserMd,
      title: 'Опыт работы',
      description: 'Более 15 лет практики в детской медицине'
    }
  ]

  return (
    <section className="section-padding bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Наши услуги
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Полный спектр медицинских услуг для детей всех возрастов. 
            Индивидуальный подход, современные методы диагностики и лечения.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <feature.icon className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
