'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaStethoscope, FaSyringe, FaHeartbeat, FaBaby, FaThermometer, FaPills } from 'react-icons/fa'

export default function ServicesPreview() {
  const services = [
    {
      icon: FaStethoscope,
      title: 'Консультации педиатра',
      description: 'Полное обследование, постановка диагноза, назначение лечения',
      price: 'от 3 000 ₽'
    },
    {
      icon: FaSyringe,
      title: 'Вакцинация',
      description: 'Плановые и дополнительные прививки по индивидуальному календарю',
      price: 'от 1 500 ₽'
    },
    {
      icon: FaHeartbeat,
      title: 'Профилактические осмотры',
      description: 'Регулярные осмотры для контроля развития и здоровья ребенка',
      price: 'от 2 500 ₽'
    },
    {
      icon: FaBaby,
      title: 'Наблюдение новорожденных',
      description: 'Патронаж на дому, консультации по уходу за малышом',
      price: 'от 4 000 ₽'
    },
    {
      icon: FaThermometer,
      title: 'Лечение ОРВИ и простуд',
      description: 'Диагностика и лечение острых респираторных заболеваний',
      price: 'от 2 000 ₽'
    },
    {
      icon: FaPills,
      title: 'Консультации по питанию',
      description: 'Составление рациона, рекомендации по прикорму',
      price: 'от 2 500 ₽'
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
            Наши услуги
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Полный спектр медицинских услуг для детей всех возрастов. 
            Индивидуальный подход и современные методы лечения.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card group hover:scale-105 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary-200 transition-colors duration-300">
                {IconComponent && <IconComponent className="w-8 h-8 text-primary-600" />}
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-primary-600">
                  {service.price}
                </span>
                <Link 
                  href="/services" 
                  className="text-primary-600 hover:text-primary-700 font-medium transition-colors duration-200"
                >
                  Подробнее →
                </Link>
              </div>
            </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link href="/services" className="btn-primary text-lg px-8 py-4">
            Посмотреть все услуги
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
